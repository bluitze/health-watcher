export default {
  Query: {
    userSteps: async (parent, { userId }, { models, user }, info) => {
      if (user) {
        return await models.Steps.findAll({
          where: {
            userId: userId
          }
        });
      }
    }
  },

  Mutation: {},

  Steps: {}
};
