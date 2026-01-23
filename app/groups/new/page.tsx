import NewGroupForm from "@/app/groups/new/form";
import { getCompanyUsers } from "../actions";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export default async function NewGroupPage() {
    const session = await auth();

    if (!session) {
        return <div>Please log in to create a new group.</div>;
    }

    const user = await prisma.user.findFirst({
        where: {
            id: session.user?.id,
        },
    });

    const { companyId } = user || {};

    const companyUsers = await getCompanyUsers(companyId!);

    return <NewGroupForm users={companyUsers} />;
}
