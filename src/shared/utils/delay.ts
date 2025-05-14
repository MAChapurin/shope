/**
 *Creates a promise that resolves after the specified number of milliseconds.
 * 
 * @param {number} ms - The number of milliseconds to delay.
 * @returns {Promise<void>} - A promise that resolves after a specified delay.
 */
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));