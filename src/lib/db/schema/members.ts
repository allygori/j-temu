import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { organization } from "./organizations";
import { user } from "./users";

export const member = pgTable("members", {
	id: text("id").primaryKey(),

	organizationId: text("organization_id")
		.notNull()
		.references(() => organization.id),

	userId: text("user_id")
		.notNull()
		.references(() => user.id),

	role: text("role").notNull(),

	createdAt: timestamp("created_at").notNull(),

	updatedAt: timestamp("updated_at").notNull()
});

export const memberRelations = relations(member, ({ one }) => ({
	organization: one(organization, {
		fields: [member.organizationId],
		references: [organization.id],
	}),
	user: one(user, {
		fields: [member.userId],
		references: [user.id],
	}),
}));
