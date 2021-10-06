import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    userWeight(userId: Int!): [Weight]
  }

  extend type Mutation {
    inputWeight(weight: Float!, userId: Int!): Weight!
  }

  type Weight {
    id: Int
    userId: Int
    weight: Float
    createdDate: Date
  }
`;
