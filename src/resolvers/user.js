import Sequelize from 'sequelize';
const Op = Sequelize.Op;
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import _ from 'lodash';

export default {
  Query: {},

  Mutation: {
    createUser: async (
      parent,
      { firstName, lastName, email, phoneNumber, password },
      { models },
      info
    ) => {
      return await models.User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: (password =
          password && password != '' ? bcrypt.hashSync(password, 10) : ''),
        createdDate: new Date()
      });
    },

    userLogin: async (
      parent,
      { email, password },
      { models, JWT_SECRET },
      info
    ) => {
      const user = await models.User.findOne({ where: { email } });
      if (!user) {
        throw new Error('Not user with that email');
      }

      const valid = await bcrypt.compareSync(password, user.password);
      if (!valid) {
        throw new Error('Incorrect password');
      }

      const token = jwt.sign(
        {
          user: _.pick(user, ['userId', 'email'])
        },
        JWT_SECRET,
        {
          expiresIn: '30d'
        }
      );
      return {
        token,
        user
      };
    }
  },

  User: {}
};
