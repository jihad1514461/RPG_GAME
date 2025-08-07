// Database connection pool for RPG Game
const mysql = require('mysql2');
const dbConfig = require('./config');

// Create connection pool
const pool = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  port: dbConfig.port,
  connectionLimit: dbConfig.connectionLimit,
  queueLimit: dbConfig.queueLimit,
  acquireTimeout: dbConfig.acquireTimeout,
  timeout: dbConfig.timeout,
  reconnect: dbConfig.reconnect,
  reconnectDelay: dbConfig.reconnectDelay,
  maxReconnectAttempts: dbConfig.maxReconnectAttempts,
  // Enable automatic reconnect
  reconnectOnError: (err) => {
    return true;
  }
});

// Get a connection from the pool
const getConnection = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
};

// Execute a query using a connection from the pool
const executeQuery = (query, params = []) => {
  return new Promise((resolve, reject) => {
    pool.execute(query, params, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Execute a query that returns multiple results
const executeQueryMultiple = (query, params = []) => {
  return new Promise((resolve, reject) => {
    pool.query(query, params, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Close the connection pool
const closePool = () => {
  return new Promise((resolve) => {
    pool.end(() => {
      resolve();
    });
  });
};

module.exports = {
  pool,
  getConnection,
  executeQuery,
  executeQueryMultiple,
  closePool
};