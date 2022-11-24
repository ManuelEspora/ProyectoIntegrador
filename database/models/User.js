module.exports = function (sequelize, dataTypes) {
    let alias = "Users";
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

   let Users = sequelize.define(alias, cols, config);
   
   Users.associate = (models)=>{
    Users.hasMany(models.Posts,{
        as:'posts',
        foreingKey:'users_id'
    });
 
    Users.hasMany(models.Comments,{
        as:'comments',
        foreingKey:'users_id'
    });  
 } 
    
   return Users;
  
}
