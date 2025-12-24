"use server";

import prisma from "@/lib/prisma";

export async function getDefaultListData(userId: string) {
    const list = await prisma.list.findMany({
        where: {
            users: {
                some: {
                    user: {
                        id: userId,
                    },
                },
            },
        },
        include: {
            listItems: true,
        },
    });

    return list;
}
