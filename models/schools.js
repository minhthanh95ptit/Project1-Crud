module.exports = (sequelize, DataTypes) => {
    const Classes = sequelize.define('Schools', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Schools',
    });
    Schools.associate = function (models) {
        Schools.hasMany(models.Classes,{
            foreignKey: 'id'
        }),
        Schools.hasMany(models.Users,{
            foreignKey: 'id'
        })
    };

    return Schools;
  };
  