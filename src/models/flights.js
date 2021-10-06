const flights = (sequelize, DataTypes) => {
  const Flights = sequelize.define(
    'flights',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'user',
          key: 'userId'
        }
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      finishTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      flightsClimbed: {
        type: DataTypes.FLOAT(12),
        allowNull: false
      }
    },
    {
      tableName: 'flights'
    }
  );
  return Flights;
};

export default flights;
