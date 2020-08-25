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
        },
        classId:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'Schools',
    });
    Schools.associate = function (models) {
        Schools.hasMany(models.Classes,{
            foreignKey: 'classId',
        }),
        Schools.hasMany(models.Users,{
            foreignKey: 'userId',
        })
    };

    return Schools;
  };
  