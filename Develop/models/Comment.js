const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const User = require('./User');
const Post = require('./Post');

class Comment extends Model {}

Comment.init(
  
  {

     id :{
      type :DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true
    
    },
    commentContent: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dateCreated: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
   
      references: {
        // This is a reference to another model
        model: User,
   
        // This is the column name of the referenced model
        key: 'id',
   
      }
    },

    post_id: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      references: {
        // This is a reference to another model
        model: Post,
   
        // This is the column name of the referenced model
        key: 'id',
      }
    },


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;