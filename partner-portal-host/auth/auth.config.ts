import type { AuthConfig } from "@auth/core";
import dotenv from "dotenv";
dotenv.config();

export const authOptions: AuthConfig = {
  secret: process.env.AUTH_SECRET,
  providers: [
    {
      id: "curity",
      name: "Curity",
      type: "oauth",
      wellKnown: `${process.env.AUTH_ISSUER}/.well-known/openid-configuration`,
      clientId: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      authorization: { params: { scope: "openid email profile" } },
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    },
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
};
