'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Users', [
        {
          name: 'User A',
          pin: 1234,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'User B',
          pin: 4321,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
