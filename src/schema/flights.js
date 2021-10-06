import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    userFlights(userId: Int!): [Flights]
  }

  # extend type Mutation {

  # }

  type Flights {
    id: Int
    userId: Int
    startTime: Date
    finishTime: Date
    flightsClimbed: Float
  }
`;
