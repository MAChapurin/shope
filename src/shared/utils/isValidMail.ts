const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * function isValidEmail that checks if the passed email matches the standard format
 * @param {string} email - email
 * @returns true if all it is ok
 */
export function isValidEmail(email: string): boolean {
  return emailPattern.test(email);
}
