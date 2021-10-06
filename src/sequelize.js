import Sequelize from 'sequelize';
import { DB_NAME, DB_USER, DB_PASS, DB_HOST } from 'babel-dotenv';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

const models = {
  sequelize,
  User: sequelize.import('./models/user'),
  Weight: sequelize.import('./models/weight'),
  Flights: sequelize.import('./models/flights'),
  Steps: sequelize.import('./models/steps')
};

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

export default models;
