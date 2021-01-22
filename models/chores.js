module.exports = function (sequelize, DataTypes) {
    var Chores = sequelize.define("Chores", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        chore: {
            type: DataTypes.STRING,
        },
        points: {
            type: DataTypes.INTEGER,
        }
    })
    Chores.associate = function(models) {
        Chores.belongsTo(models.ChoresAndUsers, {
            foreingKey: {
                allowNull: false,
            }
        })
    }
    return Chores
};