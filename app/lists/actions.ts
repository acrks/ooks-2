"use server";

import prisma from "@/lib/prisma";

export async function getDefaultListData(userId: string): Promise<
    {
        id: string;
        title: string;
        primary?: boolean;
        favorite?: boolean;
        listItems: { id: string; content: string }[];
    }[]
> {
    const list = await prisma.list.findMany({
        where: {
            users: {
                some: {
                    userId,
                    primary: true,
                    favorite: true,
                },
            },
        },
        include: {
            listItems: true,
        },
    });

    return list;
}
