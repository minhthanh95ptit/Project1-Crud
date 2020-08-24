module.exports = (sequelize, DataTypes) => {
    const Classes = sequelize.define('Users', {
        schoolId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'Users',
    });
    Classes.associate = function (models) {
      Users.belongsTo(models.Classes, {
        foreignKey: 'classId',
     }),
        Classes.belongsTo(models.Schools, {
            foreignKey: 'schoolId',
        })
    }
    return Users;
  };
  