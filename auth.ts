import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { OWNER_PERMS } from "@/lib/consts/permissions";

import Email from "@auth/core/providers/email";

import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.EMAIL_SERVER_PASSWORD!);

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHub,
        Google,
        Email({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: Number(process.env.EMAIL_SERVER_PORT),
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
            async sendVerificationRequest({ identifier, url }) {
                await sgMail.send({
                    to: identifier,
                    from: process.env.EMAIL_FROM!,
                    subject: "Sign in to your account",
                    html: `<a href="${url}">Sign in</a>`,
                });
            },
        }),
    ],
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
    pages: {
        signIn: "/login", // your custom page
    },
});
