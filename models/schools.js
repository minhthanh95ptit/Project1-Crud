module.exports = (sequelize, DataTypes) => {
    const Schools = sequelize.define('Schools', {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'Schools',
    });
    Schools.associate = function (models) {
        Schools.hasMany(models.Classes,{
            foreignKey: 'schoolId',
        }),
        Schools.hasMany(models.Users,{
            foreignKey: 'schoolId',
        })
    };

    return Schools;
  };
  