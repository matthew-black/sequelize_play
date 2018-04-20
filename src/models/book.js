'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING
  }, { tableName: 'books', underscored: true});

  Book.associate = function(models) {
    Book.hasMany(models.Comment, { foreignKey: 'book_id' })
  };
  return Book;
};

// Comment.belongsTo(models.Book, { foreignKey: 'book_id', allowNull: false })

// book1.getComments().then(comments => console.log(comments))
