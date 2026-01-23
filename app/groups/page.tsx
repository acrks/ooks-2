import { auth } from "@/auth";
import GroupContent from "./content";
import prisma from "@/lib/prisma";

export default async function GroupsPage() {
    const session = await auth();

    const userId = session?.user?.id;

    // const users = await prisma.user.findMany({
    // where: {
    //     Groups: {
    //     some: {
    //         group: {
    //         Users: {
    //             some: {
    //             userId: userId,
    //             },
    //         },
    //         },
    //     },
    //     },
    // },
    // distinct: ['id'],
    // include: {
    //     Groups: {
    //     include: {
    //         group: true,
    //     },
    //     },
    // },
    // })
    // return users?.map((user) => (
    //     <GroupContent key={user.id} group={user} />
    // ));
}
