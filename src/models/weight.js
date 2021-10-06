const weight = (sequelize, DataTypes) => {
  const Weight = sequelize.define(
    'weight',
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
      weight: {
        type: DataTypes.DECIMAL(5, 1),
        allowNull: false
      },
      createdDate: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      tableName: 'weight'
    }
  );
  return Weight;
};

export default weight;
