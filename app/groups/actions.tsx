import prisma from "@/lib/prisma";

export type CompanyUser = {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
};

export type selectedUsers = {
    id: string;
    name: string;
};

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
};

export async function getCompanyUsers(companyId: string) {
    const companyUsers = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            image: true,
        },
        where: {
            companyId: companyId,
        },
    });

    return companyUsers;
}
