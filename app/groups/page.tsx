import { auth } from "@/auth";
import GroupContent from "./content";
import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function GroupsPage() {
    const session = await auth();

    const userId = session?.user?.id;

    const users = await prisma.user.findMany({
        where: {
            Groups: {
                some: {
                    group: {
                        Users: {
                            some: {
                                userId: userId,
                            },
                        },
                    },
                },
            },
        },
        distinct: ["id"],
        include: {
            Groups: {
                include: {
                    group: true,
                },
            },
        },
    });
    return (
        <div>
            <h1>Groups Page</h1>
            <Link href="/groups/new">
                <Button>New Group</Button>
            </Link>
            {/* Render group contents here */}
        </div>
    );
    // return users?.map((user) => <GroupContent key={user.id} group={user} />);
}
