import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  providers: [Google],
  callbacks: {
    authorized: async ({ auth, request }) => {
      return !!auth;
    },
    signIn: async ({ user, account, profile }) => {
      try {
        // getGuest returns null if user does not exist
        const existingGuest = await getGuest(user.email);

        if (!existingGuest)
          await createGuest({
            email: user.email,
            fullName: user.name,
          });

        return true;
      } catch (error) {
        return false;
      }
    },
    session: async ({ session, user }) => {
      const guest = await getGuest(session.user.email);

      // update user session guestId with supabase id
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
