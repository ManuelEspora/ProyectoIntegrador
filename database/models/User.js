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
    tablaName : "users",
    timestamps:true,
    createdAt: false,
    updatedAt: false
   };

   const Users = sequelize.define(alias, cols, config);
   
   Users.associate = (models)=>{

    Users.hasMany(models.Posts,{
        as:'userPosts',
        foreingKey:'users_id'
    });
 
    Users.hasMany(models.Comments,{
        as:'userComments',
        foreingKey:'users_id'
    });  
 } 
    
   return Users;
  
}
