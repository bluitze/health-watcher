import { gql } from 'apollo-server-express';
import userSchema from '../schema/user';
import weightSchema from '../schema/weight';
import flightsSchema from '../schema/flights';
import stepsSchema from '../schema/steps';

const linkSchema = gql`
  scalar Date
  scalar DateTime
  scalar Time
  scalar Text
  scalar Point
  scalar JSON
  scalar JSONObject

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [
  linkSchema,
  userSchema,
  weightSchema,
  flightsSchema,
  stepsSchema
];
