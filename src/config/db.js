// config/db.js
const { Sequelize } = require('sequelize');

// Directly configure the PostgreSQL connection
const sequelize = new Sequelize('workplace', 'postgres', 'Yuva@2812', {
  host: 'localhost',  // your host (e.g., localhost)
  dialect: 'postgres',
  port: 5432,         // default PostgreSQL port
  logging: false,     // Disable logging for production, or use console.log for debugging
});

// Test the database connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connected');
  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
