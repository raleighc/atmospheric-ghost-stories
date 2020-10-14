module.exports = function (sequelize, DataTypes) {
  const Story = sequelize.define("Story", {
    positiveStory1: {
      type: DataTypes.TEXT,
      notNull: true,
      notEmpty: true,
    },
    positiveStory2: {
      type: DataTypes.TEXT,
      notNull: true,
      notEmpty: true,
    },
    positiveStory3: {
      type: DataTypes.TEXT,
      notNull: true,
      notEmpty: true,
    },
    positiveStory4: {
      type: DataTypes.TEXT,
      notNull: true,
      notEmpty: true,
    },
    positiveStory5: {
      type: DataTypes.TEXT,
      notNull: true,
      notEmpty: true,
    },
    negativeStory1: {
      type: DataTypes.TEXT,
      notNull: true,
      notEmpty: true,
    },
    negativeStory2: {
      type: DataTypes.TEXT,
      notNull: true,
      notEmpty: true,
    },
    negativeStory3: {
      type: DataTypes.TEXT,
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
