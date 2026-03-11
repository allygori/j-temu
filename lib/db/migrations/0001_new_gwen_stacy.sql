ALTER TABLE "account" RENAME TO "accounts";--> statement-breakpoint
ALTER TABLE "invitation" RENAME TO "invitations";--> statement-breakpoint
ALTER TABLE "member" RENAME TO "members";--> statement-breakpoint
ALTER TABLE "organization" RENAME TO "organizations";--> statement-breakpoint
ALTER TABLE "session" RENAME TO "sessions";--> statement-breakpoint
ALTER TABLE "user" RENAME TO "users";--> statement-breakpoint
ALTER TABLE "verification" RENAME TO "verifications";--> statement-breakpoint
ALTER TABLE "accounts" RENAME COLUMN "accountId" TO "account_id";--> statement-breakpoint
ALTER TABLE "accounts" RENAME COLUMN "providerId" TO "provider_id";--> statement-breakpoint
ALTER TABLE "accounts" RENAME COLUMN "userId" TO "user_id";--> statement-breakpoint
ALTER TABLE "accounts" RENAME COLUMN "accessToken" TO "access_token";--> statement-breakpoint
ALTER TABLE "accounts" RENAME COLUMN "refreshToken" TO "refresh_token";--> statement-breakpoint
ALTER TABLE "accounts" RENAME COLUMN "idToken" TO "id_token";--> statement-breakpoint
ALTER TABLE "accounts" RENAME COLUMN "accessTokenExpiresAt" TO "access_token_expires_at";--> statement-breakpoint
ALTER TABLE "accounts" RENAME COLUMN "refreshTokenExpiresAt" TO "refresh_token_expires_at";--> statement-breakpoint
ALTER TABLE "accounts" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "accounts" RENAME COLUMN "updatedAt" TO "updated_at";--> statement-breakpoint
ALTER TABLE "invitations" RENAME COLUMN "organizationId" TO "organization_id";--> statement-breakpoint
ALTER TABLE "invitations" RENAME COLUMN "expiresAt" TO "expires_at";--> statement-breakpoint
ALTER TABLE "invitations" RENAME COLUMN "inviterId" TO "inviter_id";--> statement-breakpoint
ALTER TABLE "members" RENAME COLUMN "organizationId" TO "organization_id";--> statement-breakpoint
ALTER TABLE "members" RENAME COLUMN "userId" TO "user_id";--> statement-breakpoint
ALTER TABLE "members" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "organizations" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "sessions" RENAME COLUMN "expiresAt" TO "expires_at";--> statement-breakpoint
ALTER TABLE "sessions" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "sessions" RENAME COLUMN "updatedAt" TO "updated_at";--> statement-breakpoint
ALTER TABLE "sessions" RENAME COLUMN "ipAddress" TO "ip_address";--> statement-breakpoint
ALTER TABLE "sessions" RENAME COLUMN "userAgent" TO "user_agent";--> statement-breakpoint
ALTER TABLE "sessions" RENAME COLUMN "userId" TO "user_id";--> statement-breakpoint
ALTER TABLE "users" RENAME COLUMN "emailVerified" TO "email_verified";--> statement-breakpoint
ALTER TABLE "users" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "users" RENAME COLUMN "updatedAt" TO "updated_at";--> statement-breakpoint
ALTER TABLE "verifications" RENAME COLUMN "expiresAt" TO "expires_at";--> statement-breakpoint
ALTER TABLE "verifications" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "verifications" RENAME COLUMN "updatedAt" TO "updated_at";--> statement-breakpoint
ALTER TABLE "organizations" DROP CONSTRAINT "organization_slug_unique";--> statement-breakpoint
ALTER TABLE "sessions" DROP CONSTRAINT "session_token_unique";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "user_email_unique";--> statement-breakpoint
ALTER TABLE "accounts" DROP CONSTRAINT "account_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "invitations" DROP CONSTRAINT "invitation_organizationId_organization_id_fk";
--> statement-breakpoint
ALTER TABLE "invitations" DROP CONSTRAINT "invitation_inviterId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "members" DROP CONSTRAINT "member_organizationId_organization_id_fk";
--> statement-breakpoint
ALTER TABLE "members" DROP CONSTRAINT "member_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "sessions" DROP CONSTRAINT "session_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invitations" ADD CONSTRAINT "invitations_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invitations" ADD CONSTRAINT "invitations_inviter_id_users_id_fk" FOREIGN KEY ("inviter_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "members" ADD CONSTRAINT "members_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "members" ADD CONSTRAINT "members_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_slug_unique" UNIQUE("slug");--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_token_unique" UNIQUE("token");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");