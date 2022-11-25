module.exports = function (sequelize, dataTypes) {
    let alias = "Comments";
    let cols = {
        id:  {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        text: {
            type: dataTypes.STRING
        },
        created_at : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        users_id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        posts_id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },

    }

    let config = {
        tableName : "comments",
        timestamps:true,
        underscored: true,
       };


    let Comments = sequelize.define(alias, cols, config);

    Comments.associate = (models)=>{
        Comments.belongsTo(models.Users,{
            as:'users',
            foreingKey:'users_id'
        });
       Comments.belongsTo(models.Posts,{
            as:'posts',
            foreingKey:'users_id'
        })
    } 

    return Comments;

    }
