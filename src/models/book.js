'use strict';

module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    title: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      }
    }
  }, { tableName: 'books', underscored: true});

  Book.associate = (models) => {
    Book.hasMany(models.Comment, {
      foreignKey: 'book_id', 
      as: 'comments' })
    };

  return Book;
};

// book1.getComments().then(comments => console.log(comments))
