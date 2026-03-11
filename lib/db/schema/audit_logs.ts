import { pgTable, text, timestamp, uuid, jsonb } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { organization } from "./organizations";
import { user } from "./users";

export const auditLog = pgTable("audit_logs", {
	id: uuid("id").primaryKey().defaultRandom(),

	organizationId: text("organization_id")
		.notNull()
		.references(() => organization.id),

	userId: text("user_id")
		.notNull()
		.references(() => user.id),

	action: text("action").notNull(),

	entityType: text("entity_type").notNull(),

	entityId: uuid("entity_id"),

	details: jsonb("details"),

	createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const auditLogRelations = relations(auditLog, ({ one }) => ({
	organization: one(organization, {
		fields: [auditLog.organizationId],
		references: [organization.id],
	}),
	user: one(user, {
		fields: [auditLog.userId],
		references: [user.id],
	}),
}));
