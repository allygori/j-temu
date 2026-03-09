import { pgTable, integer, time, date, boolean, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { eventType } from "./event_types";

export const availability = pgTable("availability", {
	id: uuid("id").primaryKey().defaultRandom(),

	eventTypeId: uuid("event_type_id")
		.references(() => eventType.id),

	dayOfWeek: integer("day_of_week"), // 0-6

	startTime: time("start_time").notNull(),

	endTime: time("end_time").notNull(),

	dateSpecific: date("date_specific"),

	isRecurring: boolean("is_recurring").notNull().default(true),
});

export const availabilityRelations = relations(availability, ({ one }) => ({
	eventType: one(eventType, {
		fields: [availability.eventTypeId],
		references: [eventType.id],
	}),
}));
