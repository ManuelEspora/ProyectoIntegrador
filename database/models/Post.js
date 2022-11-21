module.exports = function (sequelize, dataTypes) {
    let alias = "Post";
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
        tableName : "posts",
        timestamps:true,
        underscored: true
       };
    
    let Post = sequelize.define(alias, cols, config);

    Post.associate = function(models){
        Post.belongsTo(models.User,{
            as:'users',
            foreingKey:'users_id'
        });
        
        Post.hasMany(models.Comment, {
            as:'comments',
            foreingKey: 'posts_id'
        })
    }

   return Post;
}