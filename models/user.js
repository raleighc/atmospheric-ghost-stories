module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
      fullName: {
        type: DataTypes.STRING,
        // notNull: true,
        // notEmpty: true,
      },
      age: {
        type: DataTypes.INTEGER,
        // notNull: true,
        // notEmpty: true,
      },
      gender: {
        type: DataTypes.STRING,
        // notEmpty: true,
        // notNull: true,
      },
    });
    return User
  };