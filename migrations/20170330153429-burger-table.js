'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface
      .createTable('burgers', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: Sequelize.STRING,
        devoured: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        date: {
          type: Sequelize.DATE
        }
      });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.dropTable('burgers');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
