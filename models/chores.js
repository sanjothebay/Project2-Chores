module.exports = function (sequelize, DataTypes) {
    var Chores = sequelize.define("Chores", {
        
        chore: {
            type: DataTypes.STRING,
        },
        points: {
            type: DataTypes.INTEGER,
            defaultValue: 10
        }
    })
    /* Chores.associate = function(models) {
        Chores.hasMany(models.ChoresAndUsers, {
            foreingKey: {
                allowNull: false,
            }
        })
    } */
    return Chores
};