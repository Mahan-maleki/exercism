// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, cardType) {
  // 🚨 Use .forEach

  let i = 0;
  
  stack.forEach((card) => {
    if (card == cardType) {
      i++
    }
  })

  return i;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  let evenNum = 0;
  let oddNum = 0;
  
  for (const num of stack) {
    if (type) {
      if (num % 2 == 0) {
        evenNum++
      }
    } else {
      if (num % 2 !== 0) {
        oddNum++
      }
    }
  }

  if (type) {
    return evenNum
  } else {
    return oddNum
  }
}
