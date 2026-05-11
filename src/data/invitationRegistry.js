import { invitationTemplates } from './invitationTemplates';

export const invitationTemplateList = Object.values(invitationTemplates);

export function getInvitationTemplateById(id) {
  return invitationTemplates[id] || null;
}

export function hasFullDemo(id) {
  return Boolean(getInvitationTemplateById(id));
}
