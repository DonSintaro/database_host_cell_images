module.exports = function(sequelize,DataTypes){
    const Model = sequelize.define('neutrophil', {
    
        link: {type: DataTypes.STRING, 
            allowNull: false
            }
    },{timestamps: false});




    return Model
}