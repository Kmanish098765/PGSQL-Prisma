// import  { PrismaClient } from  '@prisma/client';
import prisma from '../prisma.js';
// const prisma = new PrismaClient({
//   datasources: {
//     db: { url: process.env.DATABASE_URL },
//   },
//   log: ['query', 'info', 'warn', 'error'],
// });

const resolvers = {
  Mutation: {
    createOpportunity: async (_, { data }, { clientID }) => {
      // Set createddate and modifieddate if not provided
      console.log(data, "data");
      console.log(clientID, "clientId")
      const now = new Date();
    //   const opportunity ={
    //     name:"",
    //     id: 1
    //   };
      const opportunity = await prisma.tblsalesopportunity.create({
        data: {
          ...data,
          closedate : now,
          createddate: data.createddate ? new Date(data.createddate) : now,
          modifieddate: data.modifieddate ? new Date(data.modifieddate) : now,
          tenantid: parseInt(clientID), // Assuming clientID is used as tenantID
        },
      });
      return opportunity;
    },
  },
  Query: {
    getOpportunity: async (_, { id }, {clientID}) => {
        console.log(clientID);
      const opportunity = await prisma.tblsalesopportunity.findUnique({
        where: { id },
      });
      return opportunity;
    },
    _empty: () => 'API is running',
  },
};

export {resolvers}; 