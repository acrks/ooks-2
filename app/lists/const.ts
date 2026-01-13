const OWNER_PERMS = {
    isOwner: true,
    canView: true,
    canEdit: true,
    canInvite: true,
    canDelete: true,
};

const ADMIN_PERMS = {
    isOwner: false,
    canView: true,
    canEdit: true,
    canInvite: true,
    canDelete: true,
};

const INVITE_PERMS = {
    isOwner: false,
    canView: true,
    canEdit: true,
    canInvite: true,
    canDelete: true,
};

const EDITOR_PERMS = {
    isOwner: false,
    canEdit: true,
    canView: true,
    canInvite: true,
    canDelete: false,
};

const VIEWER_PERMS = {
    isOwner: false,
    canView: true,
    canEdit: false,
    canInvite: false,
    canDelete: false,
};

export { OWNER_PERMS, ADMIN_PERMS, INVITE_PERMS, EDITOR_PERMS, VIEWER_PERMS };
