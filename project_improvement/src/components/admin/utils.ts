// Utility functions for admin components

export const formatAdminData = (data: any): string => {
  if (typeof data === 'object' && data !== null) {
    return JSON.stringify(data, null, 2);
  }
  return String(data);
};

export const validateAdminInput = (input: string): boolean => {
  // Simple validation - check if input is not empty
  return input.trim().length > 0;
};

export const sanitizeAdminInput = (input: string): string => {
  // Simple sanitization - remove leading/trailing whitespace
  return input.trim();
};