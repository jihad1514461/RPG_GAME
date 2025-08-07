// Database configuration for RPG Game
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'rpg_game',
  port: 3306,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true,
  reconnectDelay: 2000,
  maxReconnectAttempts: 10
};

module.exports = dbConfig;