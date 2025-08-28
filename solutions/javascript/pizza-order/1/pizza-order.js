/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let price = 0;
  
  if (pizza == "Margherita") {
    price += 7;
  } else if (pizza == "Caprese") {
    price += 9;
  } else if (pizza == "Formaggio") {
    price += 10;
  }

  extras.map((element) => {
    if (element == "ExtraSauce") {
      price += 1;
    } else if (element == "ExtraToppings") {
      price += 2;
    }
  })

  return price
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(orders) {
  let total = 0;

  for (const order of orders) {
    if (order.pizza === 'Margherita') {
      total += 7;
    }
    
    if (order.pizza === 'Caprese') {
      total += 9;
    }

    if (order.pizza === 'Formaggio') {
      total += 10;
    }

    if (order.extras) {
      for (const extra of order.extras) {
        if (extra === 'ExtraSauce') {
          total += 1;
        }
        if (extra === 'ExtraToppings') {
          total += 2;
        }
      }
    }
  }

  return total;
}
