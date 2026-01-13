import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { OWNER_PERMS } from "./app/lists/const";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [GitHub, Google],
    events: {
        async createUser({ user }) {
            // This runs ONLY on first OAuth signup
            if (!user.id) return;

            await prisma.list.create({
                data: {
                    title: user.name + "'s Master List",
                    users: {
                        create: {
                            ...OWNER_PERMS,
                            userId: user.id,
                            assignedBy: user.id,
                        },
                    },
                },
            });
        },
    },
});
