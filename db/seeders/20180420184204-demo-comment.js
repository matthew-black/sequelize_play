'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [
      {
        text: 'This book blows chunks, brah.',
        author: "Matt",
        book_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'This book is the best ever, brah.',
        author: "Rory",
        book_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'I cry about Myrtle every day.',
        author: "Matt",
        book_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'I love how F. Scott essentially implicates himself in propping up "The American Dream."',
        author: "Rory",
        book_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
