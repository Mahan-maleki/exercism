// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const num3 = Math.floor(Math.random() * 10);
  const num4 = Math.floor(Math.random() * 10);

  return `NCC-${num1 == 0 ? 1:num1}${num2}${num3}${num4}`
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  let randomDate = Math.random() * (42000.0 - 41000.0) + 41000.0;
  return randomDate
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let letters = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];
  let randomNum = Math.floor(Math.random() * 10);

  return letters[randomNum]
}
