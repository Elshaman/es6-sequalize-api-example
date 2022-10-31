'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      // "categories" table needs to be created first because "items" references "categories".
      await queryInterface.createTable('users', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER,
          },
          name: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          email:{
              type: Sequelize.STRING,
              allowNull: false,
          },
          password:{
              type: Sequelize.STRING,
              allowNull: false,
          },
          // created_at and updated_at are required
          created_at: {
              allowNull: true,
              type: Sequelize.DATE,
          },
          updated_at: {
              allowNull: true,
              type: Sequelize.DATE,
          },
      });
      await queryInterface.createTable('bootcamps', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER,
          },
          name: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          desc: {
             type: Sequelize.STRING,
              allowNull: false,
          },
          phone: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          average_cost:{
              type: Sequelize.FLOAT,
              defaultValue: 0
          },
          average_rating:{
              type: Sequelize.FLOAT,
              defaultValue: 1
          },
          created_at: {
              allowNull: true,
              type: Sequelize.DATE,
          },
          updated_at: {
              allowNull: true,
              type: Sequelize.DATE,
          },
      });

      await queryInterface.createTable('courses', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER,
          },
          title: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          desc: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          weeks:{
              type: Sequelize.INTEGER,
              allowNull: false,
          },
          enroll_cost:{
              type: Sequelize.FLOAT,
              defaultValue: 0
          },
          minimum_skill:{
              type: Sequelize.STRING,
              allowNull: false
          },
          created_at: {
              allowNull: true,
              type: Sequelize.DATE,
          },
          updated_at: {
              allowNull: true,
              type: Sequelize.DATE,
          },
      });

      await queryInterface.createTable('reviews' , {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER,
          },
          text: {
              allowNull: false,
              type: Sequelize.STRING
          },
          rating: {
              type: Sequelize.INTEGER,
              allowNull: false,
          },
          
      });



  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('reviews')
      await queryInterface.dropTable('courses')
      await queryInterface.dropTable('bootcamps');
      await queryInterface.dropTable('users');
  }
};
