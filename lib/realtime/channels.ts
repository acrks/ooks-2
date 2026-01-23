// lib/realtime/channels.ts
export const channels = {
    list: (listId: string) => `list:${listId}`,
    listItem: (listItemId: string) => `listItem:${listItemId}`,
    group: (groupId: string) => `group:${groupId}`,
    company: (companyId: string) => `company:${companyId}`,
    user: (userId: string) => `user:${userId}`,
};
