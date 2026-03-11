import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { organization } from "./organizations";
import { eventType } from "./event_types";
import { bookingStatusEnum, paymentStatusEnum } from "./enums";

export const booking = pgTable("bookings", {
	id: uuid("id").primaryKey().defaultRandom(),

	organizationId: text("organization_id")
		.notNull()
		.references(() => organization.id),

	eventTypeId: uuid("event_type_id")
		.notNull()
		.references(() => eventType.id),

	inviteeName: text("invitee_name").notNull(),

	inviteeEmail: text("invitee_email").notNull(),

	inviteePhone: text("invitee_phone"),

	startTime: timestamp("start_time").notNull(),

	endTime: timestamp("end_time").notNull(),

	status: bookingStatusEnum("status").notNull().default("pending"),

	notes: text("notes"),

	paymentStatus: paymentStatusEnum("payment_status")
		.notNull()
		.default("pending"),

	metadata: text("metadata"), // JSONB representation

	createdAt: timestamp("created_at").notNull().defaultNow(),

	updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const bookingRelations = relations(booking, ({ one }) => ({
	organization: one(organization, {
		fields: [booking.organizationId],
		references: [organization.id],
	}),
	eventType: one(eventType, {
		fields: [booking.eventTypeId],
		references: [eventType.id],
	}),
}));
