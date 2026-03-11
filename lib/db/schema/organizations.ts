import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { member } from "./members";
import { invitation } from "./invitations";
import { eventType } from "./event_types";
import { booking } from "./bookings";
import { auditLog } from "./audit_logs";

export const organization = pgTable("organizations", {
	id: text("id").primaryKey(),

	name: text("name").notNull(),

	slug: text("slug").unique(),

	logo: text("logo"),

	createdAt: timestamp("created_at").notNull(),

	metadata: text("metadata"),

	plan: text("plan").default("free"),
});

export const organizationRelations = relations(organization, ({ many }) => ({
	members: many(member),
	invitations: many(invitation),
	eventTypes: many(eventType),
	bookings: many(booking),
	auditLogs: many(auditLog),
}));
