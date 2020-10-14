module.exports = function (sequelize, Datatypes) {
  const Story = sequelize.define("Story", {
    positiveStory1: {
      type: Datatypes.TEXT,
      notNull: true,
      notEmpty: true,
    },
    positiveStory2: {
      type: Datatypes.TEXT,
      notNull: true,
      notEmpty: true,
    },
    positiveStory3: {
      type: Datatypes.TEXT,
      notNull: true,
      notEmpty: true,
    },
    positiveStory4: {
      type: Datatypes.TEXT,
      notNull: true,
      notEmpty: true,
    },
    positiveStory5: {
      type: Datatypes.TEXT,
      notNull: true,
      notEmpty: true,
    },
    negativeStory1: {
      type: Datatypes.TEXT,
      notNull: true,
      notEmpty: true,
    },
    negativeStory2: {
      type: Datatypes.TEXT,
      notNull: true,
      notEmpty: true,
    },
    negativeStory3: {
      type: Datatypes.TEXT,
      notNull: true,
      notEmpty: true,
    },
  });
  Story.associate = function (models) {
    Story.belongsTo(models.Ghost, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Story;
};

// Story.associate = function (models) {
//     Story.belongsTo(models.Ghost, {
//         foreignKey: {
//             allowNull: false,
//         }
//     })
// }
