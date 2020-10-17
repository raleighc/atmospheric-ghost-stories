module.exports = function (sequelize, DataTypes) {
  const Story = sequelize.define("Story", {
    positiveStory: {

      type: DataTypes.TEXT,
      notNull: true,
      notEmpty: true,
    },

    negativeStory: {
      type: DataTypes.TEXT,
      notNull: true,
      notEmpty: true,
    }

  });
  Story.associate = (models) => {
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
