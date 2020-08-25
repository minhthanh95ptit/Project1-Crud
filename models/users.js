module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        schoolId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        classId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'Users',
    });
    Users.associate = function (models) {
      Users.belongsTo(models.Classes, {
        foreignKey: 'classId',
     }),
     Users.belongsTo(models.Schools, {
        foreignKey: 'schoolId',
     })
    }
    return Users;
  };
  