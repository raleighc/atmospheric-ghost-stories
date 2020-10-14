module.exports = function (sequelize, Datatypes) {
  const Ghost = sequelize.define("Ghost", {
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
    homeTown: {
      type: Datatypes.STRING,
      notEmpty: true,
      notNull: true,
    },
    faveSport: {
      type: Datatypes.STRING,
      notNull: true,
      notEmpty: true,
    },
    storyId: {
      type: Datatypes.INTEGER,
    },
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
