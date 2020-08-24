module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define('Classes', {
      name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      schoolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
          type: DataTypes.STRING,
          allowNull: false,
      }
  }, {
      tableName: 'Classes',
  });
    Classes.associate = function (models) {
      Classes.belongsTo(models.Schools, {
        foreignKey: 'schoolId',
    });
    };
  return Classes;
};
