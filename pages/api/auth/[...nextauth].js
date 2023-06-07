import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    providers : [
        // Google Provider
        GoogleProvider({
            clientId: "649827674277-la7ivfmbbu6povgin2du0kv4arshpjjg.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
})