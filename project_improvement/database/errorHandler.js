// Database error handling for RPG Game
class DatabaseError extends Error {
  constructor(message, code, query, params) {
    super(message);
    this.name = 'DatabaseError';
    this.code = code;
    this.query = query;
    this.params = params;
  }
}

// Error codes mapping
const errorCodes = {
  ER_DUP_ENTRY: 'DUPLICATE_ENTRY',
  ER_NO_REFERENCED_ROW: 'MISSING_REFERENCE',
  ER_ROW_IS_REFERENCED: 'REFERENCED_ROW',
  ER_BAD_NULL_ERROR: 'NULL_VALUE',
  ER_INVALID_DEFAULT: 'INVALID_DEFAULT',
  ER_DATA_TOO_LONG: 'DATA_TOO_LONG',
  ER_TRUNCATED_WRONG_VALUE: 'INVALID_VALUE',
  ECONNREFUSED: 'CONNECTION_REFUSED',
  ECONNRESET: 'CONNECTION_RESET',
  ETIMEDOUT: 'CONNECTION_TIMEOUT',
  PROTOCOL_CONNECTION_LOST: 'CONNECTION_LOST',
  ER_ACCESS_DENIED_ERROR: 'ACCESS_DENIED'
};

// Handle database errors
const handleDatabaseError = (error, query, params) => {
  // Log the error for debugging
  console.error('Database Error:', {
    message: error.message,
    code: error.code,
    errno: error.errno,
    sqlState: error.sqlState,
    query: query,
    params: params
  });

  // Create a custom error with more context
  const customError = new DatabaseError(
    error.message,
    errorCodes[error.code] || 'UNKNOWN_ERROR',
    query,
    params
  );

  // Handle specific error types
  switch (error.code) {
    case 'ER_DUP_ENTRY':
      customError.userMessage = 'This entry already exists in the database.';
      break;
    case 'ER_NO_REFERENCED_ROW':
      customError.userMessage = 'Referenced data not found.';
      break;
    case 'ER_ROW_IS_REFERENCED':
      customError.userMessage = 'Cannot delete data that is being referenced.';
      break;
    case 'ER_BAD_NULL_ERROR':
      customError.userMessage = 'Required field is missing.';
      break;
    case 'ER_DATA_TOO_LONG':
      customError.userMessage = 'Data is too long for the field.';
      break;
    case 'ER_TRUNCATED_WRONG_VALUE':
      customError.userMessage = 'Invalid value provided.';
      break;
    case 'ECONNREFUSED':
    case 'ECONNRESET':
    case 'ETIMEDOUT':
    case 'PROTOCOL_CONNECTION_LOST':
      customError.userMessage = 'Database connection error. Please try again later.';
      break;
    case 'ER_ACCESS_DENIED_ERROR':
      customError.userMessage = 'Access denied. Please check your credentials.';
      break;
    default:
      customError.userMessage = 'An unexpected database error occurred.';
  }

  return customError;
};

// Retry mechanism for database operations
const retryOperation = async (operation, maxRetries = 3, delay = 1000) => {
  let lastError;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      
      // Don't retry on certain errors
      if (error.code === 'ER_DUP_ENTRY' || error.code === 'ER_NO_REFERENCED_ROW') {
        throw error;
      }
      
      // Wait before retrying
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
      }
    }
  }

  throw lastError;
};

module.exports = {
  DatabaseError,
  handleDatabaseError,
  retryOperation,
  errorCodes
};