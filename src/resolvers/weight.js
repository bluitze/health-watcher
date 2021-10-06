export default {
  Query: {
    userWeight: async (parent, { userId }, { models, user }, info) => {
      if (user) {
        return await models.Weight.findAll({
          where: {
            userId: userId
          }
        });
      }
    }
  },

  Mutation: {
    inputWeight: async (parent, { weight, userId }, { models, user }, info) => {
      if (user) {
        return await models.Weight.create({
          weight: weight,
          userId: userId,
          createdDate: new Date()
        });
      }
    }
  },

  Weight: {}
};
