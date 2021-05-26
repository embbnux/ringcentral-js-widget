import GetMessageInfoResponse from 'ringcentral-client/build/definitions/GetMessageInfoResponse';
import { Brand } from 'ringcentral-integration/modules/BrandV2';
import { Locale } from 'ringcentral-integration/modules/LocaleV2';
import { ConversationLogger } from 'ringcentral-integration/modules/ConversationLoggerV2';
import {
  DateTimeFormat,
  FormatDateTimeOptions,
} from 'ringcentral-integration/modules/DateTimeFormatV2';
import { RegionSettings } from 'ringcentral-integration/modules/RegionSettingsV2';
import {
  Conversations,
  CurrentConversation,
} from 'ringcentral-integration/modules/ConversationsV2';
import { RateLimiter } from 'ringcentral-integration/modules/RateLimiterV2';
import { ConnectivityMonitor } from 'ringcentral-integration/modules/ConnectivityMonitorV2';
import { MessageStore } from 'ringcentral-integration/modules/MessageStoreV2';
import { ContactMatcher } from 'ringcentral-integration/modules/ContactMatcherV2';
import { Correspondent } from 'ringcentral-integration/lib/messageHelper';
import { Message } from 'ringcentral-integration/interfaces/MessageStore.model';
import { Attachment } from 'ringcentral-integration/modules/MessageSenderV2';
import { Entity } from 'ringcentral-integration/interfaces/Entity.interface';
import { RouterInteraction } from '../RouterInteraction';

export interface ConversationUIOptions {
  //
}

export interface Deps {
  brand: Brand;
  locale: Locale;
  conversationLogger: ConversationLogger;
  dateTimeFormat: DateTimeFormat;
  regionSettings: RegionSettings;
  conversations: Conversations;
  rateLimiter: RateLimiter;
  connectivityMonitor: ConnectivityMonitor;
  messageStore: MessageStore;
  routerInteraction: RouterInteraction;
  contactMatcher?: ContactMatcher;
  conversationUIOptions?: ConversationUIOptions;
}

export interface OnLogConversationOptions {
  conversationId: string;
  correspondentEntity: Entity;
  redirect: boolean;
}
export interface OnSelectContactOptions {
  correspondentEntity: Entity;
  conversation: CurrentConversation;
}

export interface RenderExtraButtonOptions {
  logConversation: (options: {
    redirect?: boolean;
    selected: number;
    prefill?: boolean;
  }) => Promise<void> | void;
  isLogging: boolean;
}

export interface ConversationContainerProps {
  params: {
    conversationId: string;
  };
  enableContactFallback?: boolean;
  showGroupNumberName?: boolean;
  supportAttachment?: boolean;
  perPage?: number;
  inputExpandable?: boolean;
  dateTimeFormatter?(options: Partial<FormatDateTimeOptions>): string;
  onLogConversation?(options: OnLogConversationOptions): Promise<void>;
  conversationsPath?: string;
  renderExtraButton?(
    conversation: CurrentConversation,
    options: RenderExtraButtonOptions,
  ): React.ReactElement;
}

// TODO: remove to ConversationPanel folder with TypeScript
export interface ConversationPanelProps {
  brand: string;
  enableContactFallback: boolean;
  showGroupNumberName: boolean;
  supportAttachment: boolean;
  currentLocale: string;
  conversationId: string;
  sendButtonDisabled: boolean;
  areaCode: string;
  countryCode: string;
  showSpinner: boolean;
  recipients: Correspondent[];
  messages: Message[];
  messageText: string;
  attachments: Attachment[];
  conversation: CurrentConversation;
  disableLinks: boolean;
  autoLog: boolean;
  perPage: number;
  loadingNextPage: boolean;
  inputExpandable: boolean;
  shouldLogSelectRecord?: boolean;
  contactPlaceholder?: string;
  replyToReceivers: (
    text: string,
    attachments?: Attachment[],
  ) => Promise<GetMessageInfoResponse>;
  unloadConversation: () => Promise<void>;
  loadConversation: (id: string) => Promise<void>;
  updateMessageText: (text: string) => Promise<boolean>;
  addAttachment: (attachment: Attachment) => Promise<void>;
  removeAttachment: (attachment: Attachment) => Promise<void>;
  dateTimeFormatter: (options: Partial<FormatDateTimeOptions>) => string;
  formatPhone: (phoneNumber: string) => string;
  getMatcherContactName: (phoneNumber: string) => string;
  getMatcherContactList: (phoneNumber: string) => string[];
  getMatcherContactNameList: (phoneNumber: string) => string[];
  onLogConversation: (options: OnLogConversationOptions) => Promise<void>;
  goBack(): void;
  readMessages(id: string): void;
  loadPreviousMessages(): void;
  renderExtraButton?(
    conversation: CurrentConversation,
    options: RenderExtraButtonOptions,
  ): React.ReactElement;
  onSelectContact?(options: OnSelectContactOptions): Promise<void> | void;
  restrictSendMessage?(...args: any): boolean;
}