module.exports = function (sequelize, dataTypes) {
    let alias = "Posts";
    let cols = {

        id:  {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        createdAt : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        descripcion: {
            type: dataTypes.STRING
        },
        users_id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },

    }
    
    let config = {
        tableName : "posts",
        timestamps:true,
        createdAt: false,
        updatedAt: false
       };
    
    const Posts = sequelize.define(alias, cols, config);

     Posts.associate = function(models){
        Posts.belongsTo(models.Users,{
            as:'postUsers',
            foreingKey:'users_id'
        });
        
        Posts.hasMany(models.Comments, {
            as:'postComments',
            foreingKey: 'posts_id'
        }) 
    } 

   return Posts;
}