module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Arbaz@123",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    insecureAuth: true
  };
// db.js (example for database setup with Sequelize)

// const { Sequelize } = require('sequelize');
// const config = require('./config'); // Import the configuration object from config.js

// const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
//   host: config.HOST,
//   dialect: config.dialect,
//   pool: config.pool
// });

// // ... Continue with the rest of the database setup, model definitions, etc.

// module.exports = sequelize;
