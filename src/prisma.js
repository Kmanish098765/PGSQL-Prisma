import { PrismaClient } from "@prisma/client";
import { asyncContext } from './context.js';

const prisma = new PrismaClient({
    datasources: {
      db: { url: process.env.DATABASE_URL },
    },
    log: ['query', 'info', 'warn', 'error'],
  });

  prisma.$use(async (params, next) => {
    const store = asyncContext.getStore();
    const tenentID = store?.get('tenentID');
  
    // Inject tenant filter only if model has tenantId & it's a read/write operation
    const isReadOrWrite =
      ['findMany', 'findFirst', 'findUnique', 'update', 'updateMany', 'deleteMany'].includes(params.action);
  
    if (tenentID && isReadOrWrite && params.args) {
      params.args.where = {
        ...(params.args.where || {}),
        tenantid: parseInt(tenentID),
      };
    }
  
    return next(params);
  });

export default prisma;