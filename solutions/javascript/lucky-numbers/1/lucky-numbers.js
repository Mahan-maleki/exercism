// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const ARRAY1_VALUE = Number(array1.join(""));
  const ARRAY2_VALUE = Number(array2.join(""));

  return ARRAY1_VALUE + ARRAY2_VALUE
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
   let stringValue = String(value);
   let reversed = stringValue.split("").reverse().join("");

  return stringValue === reversed
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === null || input === undefined || input === "") {
    return 'Required field';
  } else {
    const num = Number(input);

    if (!num) {
      return "Must be a number besides 0";
    } else {
      return '';
    }
  }
}
