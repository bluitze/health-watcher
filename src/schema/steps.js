import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    userSteps(userId: Int!): [Steps]
  }

  # extend type Mutation {

  # }

  type Steps {
    id: Int
    userId: Int
    startTime: Date
    finishTime: Date
    stepsWalked: Float
  }
`;
