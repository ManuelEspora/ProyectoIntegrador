module.exports = function (sequelize, dataTypes) {
    let alias = "comments";
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
        timestamps:true,
        underscored: true,
       };


    const Comments = sequelize.define(alias, cols, config);

    Comments.associate = (models)=>{
        Comments.belongsTo(models.Users,{
            as:'users',
            foreingKey:'users_id'
        });
        Comments.belongsTo(models.Posts,{
            as:'posts',
            foreingKey:'posts_id'
        })
    }

    return Comments;

    }
