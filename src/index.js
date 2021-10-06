import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from 'babel-dotenv';
import schema from './schema';
import resolvers from './resolvers';
import models from './sequelize';

const app = express();

const getToken = token => {
  try {
    if (token) {
      return jwt.verify(token, JWT_SECRET);
    }
    return null;
  } catch (err) {
    return null;
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,

  context: ({ req }) => {
    const tokenWithBearer = req.headers.authorization || '';
    const token = tokenWithBearer.split(' ')[1];
    const user = getToken(token);

    return {
      models,
      JWT_SECRET,
      user
    };
  },
  introspection: true,
  playground: true
});

server.applyMiddleware({ app, path: '/healthWatcherAPI' });

app.listen({ port: 3000 }, () => {
  console.log(`🚀 Server ready at ${server.graphqlPath}.`);
});

//~ "start": "nodemon src/index.js --ext js,graphql --exec babel-node"
//~ "start": "babel-node src/index.js"
