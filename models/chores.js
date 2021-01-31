module.exports = function (sequelize, DataTypes) {
    var Chores = sequelize.define("Chores", {
        
        chore: {
            type: DataTypes.STRING,
        },
        points: {
            type: DataTypes.INTEGER,
            defaultValue: 10
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        userId: {
            type: DataTypes.INTEGER,
        },
        
    })
     Chores.associate = function(models) {
        Chores.belongsToMany(models.Users, {
            through: "choresAndUsers"
        })
    } 
    return Chores
};