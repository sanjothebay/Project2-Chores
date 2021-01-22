module.exports = function (sequelize, DataTypes) {
    var ChoresAndUsers = sequelize.define("ChoresAndUsers", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        userID: {
            type: DataTypes.INTEGER,
        },
        user: {
            type: DataTypes.STRING,
        },
        choreID: {
            type: DataTypes.INTEGER,
        },
        chore: {
            type: DataTypes.STRING,
        },
        completionDate: {
            type: DataTypes.DATE,
        },
        Points: {
            type: DataTypes.INTEGER,
        },
    })
    ChoresAndUsers.associate = function(models) {

        ChoresAndUsers.hasMany(models.Users, {
            foreingKey: {
                name: "userID",
                allowNull: false,
            }
        })

        ChoresAndUsers.hasMany(models.Chores, {
            foreingKey: {
                name: "choreID",
                allowNull: false,
            }
        })
    }
    return ChoresAndUsers
};