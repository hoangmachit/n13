import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { getUserByEmail } from "../../../../../../libraries/prisma/users";
const prisma = new PrismaClient();
export const authOptions = {
    session: {
        strategy: 'jwt'
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        CredentialsProvider({
            id: 'credentials',
            name: "Credentials",
            credentials: {
                username: { label: "Credentials username", type: "text", placeholder: "jsmith", value: `jsmith@example.com` },
                password: { label: "Credentials password", type: "password", value: `admin123` }
            },
            async authorize(credentials, req) {
                const { user } = await getUserByEmail();
                return await {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image
                };
            }
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user
                }
            }
        },
        jwt: ({ token }) => {
            return token
        }
    }
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }