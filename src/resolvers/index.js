import * as GraphQLJSON from 'graphql-type-json';
import userResolvers from '../resolvers/user';
import weightResolvers from '../resolvers/weight';
import flightsResolvers from '../resolvers/flights';
import stepsResolvers from '../resolvers/steps';

const jsonTypes = {
  JSON: GraphQLJSON
};

export default [
  jsonTypes,
  userResolvers,
  weightResolvers,
  flightsResolvers,
  stepsResolvers
];
