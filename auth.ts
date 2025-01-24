import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./lib/prisma";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/login",
        // Optional pages:
        // signOut: '/auth/signout',
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: null, // Disable new account creation page
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.image;
                session.user.username = token.username;
            }
            return session;
        },
        // async jwt({ token, user }) {
        //     if (user) {
        //         token.id = user.id;
        //         token.name = user.name;
        //         token.email = user.email;
        //         token.image = user.image;
        //         token.username = user.username;
        //     }
        //     return token;
        // },
    },
};

export default NextAuth(authOptions);

