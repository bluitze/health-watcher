export default {
  Query: {
    userFlights: async (parent, { userId }, { models, user }, info) => {
      if (user) {
        return await models.Flights.findAll({
          where: {
            userId: userId
          }
        });
      }
    }
  },

  Mutation: {},

  Flights: {}
};
