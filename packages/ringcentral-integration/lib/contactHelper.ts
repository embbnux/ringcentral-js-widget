import { reduce } from 'ramda';
import { formatSameSiteExtension } from '@ringcentral-integration/phone-number/lib/format';
import isBlank from './isBlank';
import { phoneTypes } from '../enums/phoneTypes';
import {
  ContactGroup,
  IContact,
  TypedContact,
  TypedPhoneNumber,
} from '../interfaces/Contact.model';

export const AllContactSourceName = 'all';

export function addPhoneToContact(
  contact: IContact,
  phone: IContact['phoneNumber'],
  type: IContact['type'],
) {
  if (isBlank(phone)) {
    return;
  }
  const existedPhone = contact.phoneNumbers.find(
    (number) => number && number.phoneNumber === phone,
  );
  if (existedPhone) {
    existedPhone.phoneType = type;
  } else {
    contact.phoneNumbers.push({
      phoneNumber: phone,
      phoneType: type.replace('Phone', ''),
    });
  }
}

export function uniqueContactItems(input: IContact[] = []) {
  const map: Record<string, boolean> = {};
  return reduce(
    (result, item) => {
      const itemId = `${item.type}${item.id}`;
      if (!map[itemId]) {
        map[itemId] = true;
        result.push(item);
      }
      return result;
    },
    [],
    input,
  ) as IContact[];
}

const NON_ALPHABET_RE = /[^a-z]/i;
function byName(a: IContact, b: IContact) {
  const name1 = (a.name || '').toLowerCase().replace(/^\s\s*/, ''); // trim start
  const name2 = (b.name || '').toLowerCase().replace(/^\s\s*/, ''); // trim start
  const isNumber1 = /^[0-9]/.test(name1);
  const isNumber2 = /^[0-9]/.test(name2);
  // Empty string should be put at the end
  if (name1.length <= 0 || name2.length <= 0) {
    return -name1.localeCompare(name2);
  }
  if (isNumber1 && isNumber2) {
    return name1.localeCompare(name2);
  }
  if (isNumber1 || isNumber2) {
    // put number name at last
    return -name1.localeCompare(name2);
  }
  if (NON_ALPHABET_RE.test(name1[0]) && !NON_ALPHABET_RE.test(name2[0])) {
    return 1;
  }
  if (!NON_ALPHABET_RE.test(name1[0]) && NON_ALPHABET_RE.test(name2[0])) {
    return -1;
  }
  return name1.localeCompare(name2);
}

export function sortContactItemsByName(input: IContact[] = []) {
  return input.sort(byName);
}

const POUND_SIGN = '#';
export function groupByFirstLetterOfName(input: IContact[] = []) {
  const groups: ContactGroup[] = [];
  if (input && input.length) {
    let group: ContactGroup;
    input.forEach((contact) => {
      const name = (contact.name || '').replace(/^\s\s*/, ''); // trim start
      let letter = null;
      if (name.length <= 0 || NON_ALPHABET_RE.test(name[0])) {
        letter = POUND_SIGN;
      } else {
        letter = (name[0] || '').toLocaleUpperCase();
      }
      if (!group || group.caption !== letter) {
        group = {
          contacts: [],
          caption: letter,
          id: letter,
        };
        groups.push(group);
      }
      group.contacts.push(contact);
    });
  }
  return groups;
}

export function isSearchHitContact({
  lowerSearch,
  contact,
}: {
  lowerSearch: string;
  contact: IContact;
}): boolean {
  return (
    // search names
    `${contact.firstName} ${contact.lastName} ${contact.name}`
      .toLowerCase()
      .includes(lowerSearch) ||
    // search phones
    (Array.isArray(contact.phoneNumbers) &&
      contact.phoneNumbers.some(
        (x) => x.phoneNumber && x.phoneNumber.includes(lowerSearch),
      )) ||
    // search emails
    (contact.email && contact.email.toLowerCase() === lowerSearch) ||
    (Array.isArray(contact.emails) &&
      contact.emails.map((x) => x && x.toLowerCase()).includes(lowerSearch))
  );
}

export function getFilterContacts(
  contacts: IContact[],
  searchFilter: string,
): IContact[] {
  if (!searchFilter || isBlank(searchFilter)) {
    return contacts;
  }
  const lowerSearch = searchFilter.toLowerCase();
  return contacts.filter((contact) =>
    isSearchHitContact({ lowerSearch, contact }),
  );
}

export function getSearchForPhoneNumbers({
  contacts,
  entityType,
  searchString,
  options,
}: {
  contacts: IContact[];
  entityType: string;
  searchString: string;
  options?: {
    isMultipleSiteEnabled?: boolean;
    siteCode?: string;
  };
}): TypedPhoneNumber[] {
  if (!searchString) {
    return [];
  }
  const lowerSearch = searchString.toLowerCase();
  const result: TypedPhoneNumber[] = [];
  contacts.forEach((contact) => {
    if (!Array.isArray(contact.phoneNumbers) || !contact.phoneNumbers.length) {
      return;
    }
    const isContactHit = isSearchHitContact({ lowerSearch, contact });
    contact.phoneNumbers.forEach(({ phoneType, phoneNumber }) => {
      if (isContactHit || (phoneNumber && phoneNumber.includes(lowerSearch))) {
        if (
          phoneType === phoneTypes.extension &&
          options?.isMultipleSiteEnabled
        ) {
          // Remove site code of same site
          phoneNumber = formatSameSiteExtension({
            currentSiteCode: options?.siteCode ?? '',
            extension: phoneNumber,
          });
        }
        result.push({
          id: `${contact.id}${phoneNumber}`,
          name: contact.name || `${contact.firstName} ${contact.lastName}`,
          type: contact.type,
          phoneNumber,
          phoneType: phoneType.replace('Phone', ''),
          entityType,
        });
      }
    });
  });
  return result;
}

export function getMatchContactsByPhoneNumber({
  contacts,
  phoneNumber,
  entityType,
  normalizeNumber = (number) => number,
  findPhoneNumber = (item: IContact['phoneNumbers'][number]) =>
    normalizeNumber(item.phoneNumber) === phoneNumber,
}: {
  contacts: IContact[];
  phoneNumber: string;
  entityType: string;
  normalizeNumber?: (number: string) => string;
  findPhoneNumber?: (item: IContact['phoneNumbers'][number]) => boolean;
}): TypedContact[] {
  const result: TypedContact[] = [];
  contacts.forEach((contact) => {
    const found =
      contact.phoneNumbers && contact.phoneNumbers.find(findPhoneNumber);
    if (!found) {
      return;
    }
    const matchedContact = {
      ...contact,
      phoneNumbers: [...contact.phoneNumbers],
      entityType,
    };
    result.push(matchedContact);
  });
  return result;
}

const isSameSite = ({
  siteCode = '',
  extensionNumber,
  extensionFromContacts,
}: {
  siteCode?: string;
  extensionNumber: string;
  extensionFromContacts: string;
}): boolean => {
  /**
   * [multiple site number match role]:
   * Given an account which short extension starts with 0 in the same site, When short extension is equal to 0, it can match.
   * Otherwise it cannot match.
   */
  if (
    !siteCode ||
    !/^[0-9]+$/.test(extensionNumber) || // to avoid special character in regular
    (extensionNumber[0] === '0' && extensionNumber !== '0')
  ) {
    return false;
  }

  /**
   * [multiple site only]
   * The full extension number's length is fixed, no need to compute the frequency of 0.
   * For example, 21022, 210022 would not both exist at the same time
   */
  return new RegExp(`^${siteCode}0*${extensionNumber}$`).test(
    extensionFromContacts,
  );
};

export const isAnExtension = (number: string): boolean => {
  return number && number.length <= 6 && number[0] !== '+';
};

/**
 * check whether an extension is in contacts
 */
export const isExtensionExist = ({
  extensionNumber,
  extensionFromContacts,
  options,
}: {
  /**
   * extensionNumber need to be checked
   */
  extensionNumber: string;
  /**
   * extensionNumber from contact
   */
  extensionFromContacts: string;
  options?: {
    isMultipleSiteEnabled?: boolean;
    siteCode?: string;
  };
}): boolean => {
  if (extensionFromContacts === extensionNumber) {
    return true;
  }
  if (
    options.isMultipleSiteEnabled &&
    isSameSite({
      siteCode: options?.siteCode ?? '',
      extensionNumber,
      extensionFromContacts,
    })
  ) {
    return true;
  }
  return false;
};

export const getFindPhoneNumber = ({
  phoneNumber,
  options = {},
}: {
  phoneNumber: string;
  options?: {
    isMultipleSiteEnabled?: boolean;
    siteCode?: string;
  };
}) => (item: IContact['phoneNumbers'][number]) => {
  if (item.phoneType === phoneTypes.extension) {
    return (
      isAnExtension(phoneNumber) &&
      isExtensionExist({
        extensionNumber: phoneNumber,
        extensionFromContacts: item.phoneNumber,
        options,
      })
    );
  }
  return item.phoneNumber === phoneNumber;
};