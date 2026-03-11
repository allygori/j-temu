import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { organization } from "./organizations";
import { user } from "./users";

export const invitation = pgTable("invitations", {
	id: text("id").primaryKey(),

	organizationId: text("organization_id")
		.notNull()
		.references(() => organization.id),

	email: text("email").notNull(),

	role: text("role"),

	status: text("status").notNull(),

	expiresAt: timestamp("expires_at").notNull(),

	inviterId: text("inviter_id")
		.notNull()
		.references(() => user.id)
});

export const invitationRelations = relations(invitation, ({ one }) => ({
	organization: one(organization, {
		fields: [invitation.organizationId],
		references: [organization.id],
	}),
	inviter: one(user, {
		fields: [invitation.inviterId],
		references: [user.id],
	}),
}));
