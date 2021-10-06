import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    userById(staffId: Int!): User
  }

  extend type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      phoneNumber: String!
      password: String!
    ): User!
    userLogin(email: String!, password: String!): UserLoginResponse!
  }

  type User {
    userId: Int
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    passwordHash: String
    createdDate: Date
    modifiedDate: Date
  }

  type UserLoginResponse {
    token: String
    user: User
  }
`;
