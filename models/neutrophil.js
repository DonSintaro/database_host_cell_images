module.exports = function(sequelize,DataTypes){
    const Model = sequelize.define('neutrophil', {
        id: {type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
            },

        link: {type: DataTypes.STRING, 
            allowNull: false
            }
    },{timestamps: false});




    return Model
}