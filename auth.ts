import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

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
    pages: {
        signIn: "/login", // your frontend page
    },
    callbacks: {
        async signIn({ user, account }) {
            // user = the user object returned by NextAuth
            // account = OAuth or Email account info

            if (!account) {
                return false; // Reject sign-in if account is null
            }

            if (account.provider === "email") {
                const existingUser = await prisma.user.findUnique({
                    where: { email: user.email ?? undefined },
                });

                if (!existingUser) {
                    // Redirect to signup page
                    return "/signup"; // NextAuth will redirect here
                }
            }

            return true; // Allow sign-in to proceed normally
        },
        async redirect({ url, baseUrl }) {
            // always redirect users to your app domain
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            return baseUrl;
        },
    },
});
