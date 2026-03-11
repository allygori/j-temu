import { pgTable, text, integer, boolean, timestamp, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { organization } from "./organizations";
import { user } from "./users";
import { availability } from "./availability";
import { booking } from "./bookings";

export const eventType = pgTable("event_types", {
	id: uuid("id").primaryKey().defaultRandom(),

	organizationId: text("organization_id")
		.notNull()
		.references(() => organization.id),

	creatorId: text("creator_id")
		.notNull()
		.references(() => user.id),

	title: text("title").notNull(),

	slug: text("slug").notNull(),

	durationMinutes: integer("duration_minutes").notNull(),

	description: text("description"),

	color: text("color"),

	isActive: boolean("is_active").notNull().default(true),

	maxBookingsPerDay: integer("max_bookings_per_day"),

	bufferBefore: integer("buffer_before").notNull().default(0),

	bufferAfter: integer("buffer_after").notNull().default(0),

	createdAt: timestamp("created_at").notNull().defaultNow(),

	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const eventTypeRelations = relations(eventType, ({ one, many }) => ({
	organization: one(organization, {
		fields: [eventType.organizationId],
		references: [organization.id],
	}),
	creator: one(user, {
		fields: [eventType.creatorId],
		references: [user.id],
	}),
	availabilities: many(availability),
	bookings: many(booking),
}));
