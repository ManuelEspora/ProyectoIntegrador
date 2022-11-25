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
        img_url: {
            type: dataTypes.STRING
        },

    }
    
    let config = {
        tableName : "posts",
        timestamps:true,
        underscored: true
       };
    
    let Posts = sequelize.define(alias, cols, config);

    Posts.associate = function(models){
        Posts.belongsTo(models.Users,{
            as:'users',
            foreingKey:'users_id'
        });
        
        Posts.hasMany(models.Comments, {
            as:'comments',
            foreingKey: 'posts_id'
        })
    }

   return Posts;
}
