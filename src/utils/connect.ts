import { PrismaClient } from "../../prisma/app/generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Prisma client.
export const prisma = globalForPrisma.prisma || new PrismaClient();

// Global prisma if not production.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;