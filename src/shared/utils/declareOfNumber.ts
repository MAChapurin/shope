/**
 * Declines depending on the number
 * @param {number} number
 * @param {string[]} titles Strings for decline
 * @param {boolean} [full=false] If true - returns number + string
 * @return {string}
 */

const cases = [2, 0, 1, 1, 1, 2]
export function declareOfNumber(number: number, titles: [string, string, string], full: boolean = false) {
  const result = titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
  return full ? `${number} ${result}` : result
}