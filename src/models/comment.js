'use strict';

module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    text: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      }
    },
    author: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
  }, { tableName: 'comments', underscored: true });

  Comment.associate = (models) => {
    Comment.belongsTo(models.Book, {
      foreignKey: 'book_id', 
      allowNull: false 
    })
  };

  return Comment;
};

// comment1.getBook().then(book => console.log(book))