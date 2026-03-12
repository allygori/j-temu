import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { organization } from "better-auth/plugins";
import { db } from "../db";
import { user } from "../db/schema/users";
import { session } from "../db/schema/sessions";
import { organization as orgSchema } from "../db/schema/organizations";
import { verification } from "../db/schema/verifications";
import { member } from "../db/schema/members";
import { invitation } from "../db/schema/invitations";
import { account } from "../db/schema/accounts";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
    schema: {
      users: user,
      sessions: session,
      organizations: orgSchema,
      verifications: verification,
      members: member,
      invitations: invitation,
      accounts: account,
    }
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  plugins: [
    organization()
  ],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      mapProfileToUser: (profile) => {
        return {
          firstName: profile.given_name,
          lastName: profile.family_name,
        };
      },
    },
  },
  user: {
    additionalFields: {
      timezone: { type: "string" },
    }
  },

  // databaseHooks: {
  //   session: {
  //     create: {
  //       before: async (session) => {
  //         // Implement your custom logic to set initial active organization
  //         const organization = await getInitialOrganization(session.userId);
  //         return {
  //           data: {
  //             ...session,
  //             activeOrganizationId: organization?.id,
  //           },
  //         };
  //       },
  //     },
  //   },
  // },
});
