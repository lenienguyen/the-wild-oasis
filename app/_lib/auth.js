import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  providers: [Google],
});
