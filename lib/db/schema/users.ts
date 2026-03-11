import { pgTable, text, boolean, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { account } from "./accounts";
import { session } from "./sessions";
import { member } from "./members";
import { invitation } from "./invitations";
import { auditLog } from "./audit_logs";

export const user = pgTable("users", {
	id: text("id").primaryKey(),

	name: text("name").notNull(),

	email: text("email").notNull().unique(),

	emailVerified: boolean("email_verified").notNull(),

	image: text("image"),

	timezone: text("timezone").default("Asia/Jakarta"),

	createdAt: timestamp("created_at").notNull(),

	updatedAt: timestamp("updated_at").notNull(),

});

export const userRelations = relations(user, ({ many }) => ({
	accounts: many(account),
	sessions: many(session),
	members: many(member),
	invitationsSent: many(invitation),
	auditLogs: many(auditLog),
}));
