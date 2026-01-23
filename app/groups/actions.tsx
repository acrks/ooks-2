
export type GroupWithUsers = {
    Groups: ({
        group: {
            id: string;
            name: string;
            companyId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        userId: string;
        groupId: string;
        isOwner: boolean;
        canDelete: boolean;
        canEdit: boolean;
        canInvite: boolean;
        canView: boolean;
        assignedAt: Date;
    })[];
} & {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    companyId: string;
}