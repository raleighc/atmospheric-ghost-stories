module.exports = function (sequelize, Datatypes) {
    const User = sequelize.define("User", {
      fullName: {
        type: Datatypes.STRING,
        notNull: true,
        notEmpty: true,
      },
      age: {
        type: Datatypes.INTEGER,
        notNull: true,
        notEmpty: true,
      },
      gender: {
        type: Datatypes.STRING,
        notEmpty: true,
        notNull: true,
      },
    });
    return User
  };