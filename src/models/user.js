const user = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      password: {
        type: DataTypes.CHAR(60),
        allowNull: false
      },
      createdDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      modifiedDate: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      tableName: 'user'
    }
  );
  return User;
};

export default user;
