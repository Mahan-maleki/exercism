// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  const STRAWBERRY = 'Pure Strawberry Joy';
  const ENERGIZER = 'Energizer';
  const GREEN = 'Green Garden';
  const TROPICAL = 'Tropical Island';
  const ALL_OR_NOTHING = 'All or Nothing';

  switch (name) {
    case STRAWBERRY:
      return 0.5;
      break
    case ENERGIZER:
      return 1.5;
      break
    case GREEN:
      return 1.5;
      break
    case TROPICAL:
      return 3;
      break
    case ALL_OR_NOTHING:
      return 5;
      break
    default:
      return 2.5;
      break
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesNum = 0;
  let limesNum = 0;

  for (let i = 0; i < limes.length; i++) {
    if (wedgesNum >= wedgesNeeded) {
      break
    } else {
      if (limes[i] == "small") {
        wedgesNum += 6;
      } else if (limes[i] == "medium") {
        wedgesNum += 8;
      } else {
        wedgesNum += 10;
      }

      limesNum++
    }
  }

  return limesNum
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  for (let i = 0; i < orders.length;i++) {
    if (timeLeft > 0) {
      timeLeft -= timeToMixJuice(orders[i]);
    } else {
      return orders.slice(i)
    }
  }

  return []
}
