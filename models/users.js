module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        user: {
            type: DataTypes.STRING,
        },
    })
    Users.associate = function(models) {
        Users.belongsTo(models.ChoresAndUsers, {
            foreingKey: {
                allowNull: false,
            }
        })
    }
    return Users
};