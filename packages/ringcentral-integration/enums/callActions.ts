import { ObjectMap } from '@ringcentral-integration/core/lib/ObjectMap';

export const callActions = ObjectMap.fromObject({
  '411Info': '411 Info',
  acceptCall: 'Accept Call',
  callReturn: 'Call Return',
  callingCard: 'Calling Card',
  e911Update: 'E911 Update',
  emergency: 'Emergency',
  findMe: 'FindMe',
  followMe: 'FollowMe',
  incomingFax: 'Incoming Fax',
  outgoingFax: 'Outgoing Fax',
  phoneCall: 'Phone Call',
  phoneLogin: 'Phone Login',
  ringDirectly: 'Ring Directly',
  ringMe: 'RingMe',
  ringOutMobile: 'RingOut Mobile',
  ringOutPC: 'RingOut PC',
  ringOutWeb: 'RingOut Web',
  support: 'Support',
  transfer: 'Transfer',
  unknown: 'Unknown',
  voIPCall: 'VoIP Call',
} as const);

export default callActions;
