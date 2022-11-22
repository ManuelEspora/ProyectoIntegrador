module.exports = function (sequelize, dataTypes) {
    let alias = "User";
    let cols = {
    
        id:  {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        password_: {
            type: dataTypes.STRING
        },
        name : {
            type: dataTypes.STRING
        },
        birth_date : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        dni: {
            type: dataTypes.STRING
        },
        avatar:{
            type: dataTypes.STRING
        },
        created_at : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
    }

   let config = {
    tableName : "users",
    timestamps:true,
    underscored: true,
   };

   let User = sequelize.define(alias, cols, config);
   
   User.associate = (models)=>{

    User.hasMany(models.Post,{
        as:'posts',
        foreingKey:'users_id'
    });
 
    User.hasMany(models.Comment,{
        as:'comments',
        foreingKey:'users_id'
    });  
 } 
    
   return User;
  
}
