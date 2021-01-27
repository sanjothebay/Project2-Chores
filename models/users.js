module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            // allowNull: false,
            primaryKey: true,
        },
        user: {
            type: DataTypes.STRING,
        },
    })
    Users.associate = function(models) {
        Users.hasMany(models.ChoresAndUsers, {
            foreingKey: {
                allowNull: false,
            }
        })
    }
    return Users
};