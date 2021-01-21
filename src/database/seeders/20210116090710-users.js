'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('Users', [
      {
        firstname: 'John',
        lastname: 'Wick',
        password: bcrypt.hashSync('123456789', 10),
        email: 'johnwick@gmail.com',
        gender: 'male',
      },
      {
        firstname: 'Steve',
        lastname: 'Roger',
        password: bcrypt.hashSync('123456789', 10),
        email: 'steveroger@gmail.com',
        gender: 'male',
      },
      {
        firstname: 'Daisy',
        lastname: 'johnson',
        password: bcrypt.hashSync('123456789', 10),
        email: 'daisyjohnson@gmail.com',
        gender: 'female',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {});
  },
};
