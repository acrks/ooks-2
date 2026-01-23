"use server";

import prisma from "@/lib/prisma";
import { OWNER_PERMS } from "./const";

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

    if (list.length > 0) {
        return list;
    }

    return createList(userId);
}

export async function createList(userId: string): Promise<
    {
        id: string;
        title: string;
        primary?: boolean;
        favorite?: boolean;
        listItems: { id: string; content: string }[];
    }[]
> {
    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    const newList = await prisma.list.create({
        data: {
            title: user?.name + "'s Master List",
            users: {
                create: {
                    ...OWNER_PERMS,
                    userId: userId,
                    assignedBy: userId,
                    favorite: true,
                    primary: true,
                },
            },
        },
        include: {
            listItems: true,
        },
    });

    return [newList];
}
