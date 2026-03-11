import { pgEnum } from "drizzle-orm/pg-core";

export const memberRoleEnum = pgEnum("member_role", ["owner", "admin", "staff"]);
export const invitationStatusEnum = pgEnum("invitation_status", ["pending", "accepted", "declined"]);
export const bookingStatusEnum = pgEnum("booking_status", ["pending", "confirmed", "cancelled", "completed"]);
export const paymentStatusEnum = pgEnum("payment_status", ["pending", "paid", "failed", "refunded"]);
export const organizationPlanEnum = pgEnum("organization_plan", ["free", "pro", "enterprise"]);
