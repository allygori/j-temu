import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { user } from "./users";

export const session = pgTable("sessions", {
	id: text("id").primaryKey(),

	activeOrganizationId: text("active_organization_id"),

	expiresAt: timestamp("expires_at").notNull(),

	token: text("token").notNull().unique(),

	createdAt: timestamp("created_at").notNull(),

	updatedAt: timestamp("updated_at").notNull(),

	ipAddress: text("ip_address"),

	userAgent: text("user_agent"),

	userId: text("user_id")
		.notNull()
		.references(() => user.id)
});

export const sessionRelations = relations(session, ({ one }) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id],
	}),
}));
