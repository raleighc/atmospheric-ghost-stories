module.exports = function (sequelize, DataTypes) {
  const Ghost = sequelize.define("Ghost", {
    fullName: {
      type: DataTypes.STRING,
      // notNull: true,
      // notEmpty: true,
    },
    age: {
      type: DataTypes.STRING,
      // notNull: true,
      // notEmpty: true,
    },
    homeTown: {
      type: DataTypes.STRING,
      // notEmpty: true,
      // notNull: true,
    },
    faveSport: {
      type: DataTypes.STRING,
      // notNull: true,
      // notEmpty: true,
    },
    // storyId: {
    //   type: DataTypes.INTEGER,
    // },
  });
  Ghost.associate = function (models) {
    Ghost.hasMany(models.Story, {
      onDelete: "cascade",
    });
  };

  return Ghost;
};

// Ghost.associate = function (models) {
//   Ghost.hasMany(models.Story, {
//     onDelete: "cascade",
//   });
// };
