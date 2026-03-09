import { db } from "./index";
import { user } from "./schema/users";
import { organization } from "./schema/organizations";
import { member } from "./schema/members";
import { eventType } from "./schema/event_types";
import { availability } from "./schema/availability";
import { auditLog } from "./schema/audit_logs";
import { randomUUID } from "crypto";

async function seed() {
  console.log("🌱 Seeding database...");

  const orgsData = [
    { name: "Barbershop Classic", slug: "barbershop-classic" },
    { name: "Dental Care Clinic", slug: "dental-care" },
    { name: "Tech Consultants", slug: "tech-consultants" },
    { name: "Yoga Studio Zen", slug: "yoga-zen" },
    { name: "Auto Repair Expert", slug: "auto-repair" },
  ];

  for (const orgData of orgsData) {
    const orgId = randomUUID();
    const ownerId = randomUUID();

    console.log(`Creating organization: ${orgData.name}...`);

    // 1. Create Organization
    await db.insert(organization).values({
      id: orgId,
      name: orgData.name,
      slug: orgData.slug,
      plan: "pro",
      createdAt: new Date(),
    });

    // 2. Create Owner User
    await db.insert(user).values({
      id: ownerId,
      name: `${orgData.name} Owner`,
      email: `owner@${orgData.slug}.com`,
      emailVerified: true,
      timezone: "Asia/Jakarta",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // 3. Create Membership
    await db.insert(member).values({
      id: randomUUID(),
      organizationId: orgId,
      userId: ownerId,
      role: "owner",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // 4. Create Event Types
    const eventTypes = [
      { title: "Standard Consult", slug: "standard-consult", duration: 30 },
      { title: "Long Session", slug: "long-session", duration: 60 },
    ];

    for (const et of eventTypes) {
      const etId = randomUUID();
      await db.insert(eventType).values({
        id: etId,
        organizationId: orgId,
        creatorId: ownerId,
        title: et.title,
        slug: et.slug,
        durationMinutes: et.duration,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      // 5. Create Availability for each Event Type (Mon-Fri)
      for (let day = 1; day <= 5; day++) {
        await db.insert(availability).values({
          id: randomUUID(),
          eventTypeId: etId,
          dayOfWeek: day,
          startTime: "09:00:00",
          endTime: "17:00:00",
          isRecurring: true,
        });
      }
    }

    // 6. Audit Log
    await db.insert(auditLog).values({
      id: randomUUID(),
      organizationId: orgId,
      userId: ownerId,
      action: "organization.created",
      entityType: "organization",
      entityId: orgId,
      details: { message: "Initial seed data created" },
      createdAt: new Date(),
    });
  }

  console.log("✅ Seeding completed!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seeding failed:");
  console.error(err);
  process.exit(1);
});
