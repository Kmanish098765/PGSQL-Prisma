import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs.js';
import {resolvers} from './graphql/resolvers.js';
import {authMiddleware} from './middleware/auth.js';

const app = express();

app.use(authMiddleware); // Use the auth middleware

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ clientID: req.clientID }), // Pass clientID to resolvers
});
await server.start();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}); 