module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define('Classes', {
      name: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      schoolId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      totalStudents: {
          type: DataTypes.INTEGER,
          allowNull: true,
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
