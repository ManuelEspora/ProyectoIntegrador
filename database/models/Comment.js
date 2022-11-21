module.exports = function (sequelize, dataTypes) {
    let alias = "Comment";
    let cols = {
        id:  {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        text_: {
            type: dataTypes.STRING
        },
        created_at : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        users_id: {
            // autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        posts_id: {
            // autoIncrement: true,
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


    let Comment = sequelize.define(alias, cols, config);

     Comment.associate = (models)=>{
        Comment.belongsTo(models.User,{
            as:'users',
            foreingKey:'users_id'
        });
        Comment.belongsTo(models.Post,{
            as:'posts',
            foreingKey:'posts_id'
        })
    } 

    return Comment;

    }
