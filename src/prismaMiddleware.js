// // src/prismaMiddleware.js
// const prismaMiddleware = async (params, next) => {
//   const clientID = params.context.clientID; // Get clientID from context

//   // Check if the action is a read operation (findUnique or findMany)
//   if (['findUnique', 'findMany'].includes(params.action)) {
//     if (params.model === 'tblsalesopportunity') {
//       // Modify the where condition to include tenantid check
//       if (!params.args.where) {
//         params.args.where = {};
//       }
//       params.args.where.tenantid = clientID; // Ensure tenantid matches clientID
//     }
//   }

//   // Proceed with the next middleware or the actual query
//   return next(params);
// };

// export default prismaMiddleware;
