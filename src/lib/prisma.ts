import { PrismaClient } from '@/generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { createPool } from 'mariadb';

declare global {
  var prisma: PrismaClient | undefined;
}

function createPrismaClient() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not defined in environment variables');
  }

  const adapter = new PrismaMariaDb(databaseUrl);

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' 
      ? ['query', 'info', 'warn', 'error'] 
      : ['warn', 'error'],
    errorFormat: 'pretty',
  });
}

export const prisma = global.prisma || createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  const pool = (prisma as any).$adapter?.pool;
  if (pool && typeof pool.end === 'function') {
    await pool.end();
  }
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  const pool = (prisma as any).$adapter?.pool;
  if (pool && typeof pool.end === 'function') {
    await pool.end();
  }
  process.exit(0);
});

export default prisma;