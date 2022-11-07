module.exports = function (sequelize, dataTypes) {
    let alias = "users";
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
    timestamps:true,
    createdAt: false,
    updatedAt: false
   };

   const Users = sequelize.define(alias, cols, config);
   
   Users.associate = (models)=>{

    Users.hasMany(models.Posts,{
        as:'posts',
        foreingKey:'posts_id'
    });
 
    User.hasMany(models.Comment,{
        as:'comments',
        foreingKey:'user_id'
    });
    //cambiar
 }
    
   return Users;
  
}
