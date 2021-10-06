const steps = (sequelize, DataTypes) => {
  const Steps = sequelize.define(
    'steps',
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
      stepsWalked: {
        type: DataTypes.FLOAT(12),
        allowNull: false
      }
    },
    {
      tableName: 'steps'
    }
  );
  return Steps;
};

export default steps;
