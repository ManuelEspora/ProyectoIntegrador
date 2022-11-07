module.exports = function (sequelize, dataTypes) {
    let alias = "posts";
    let cols = {

        id:  {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        created_at : {
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
    
    const Posts = sequelize.define(alias, cols, config);

    Posts.associate = function(models){
        Posts.belongsTo(models.Users,{
            as:'users',
            foreingKey:'users_id'
        });
        
        Products.hasMany(models.Comments, {
            as:'comments',
            foreingKey: 'posts_id'
        })
    }

   return Posts;
}