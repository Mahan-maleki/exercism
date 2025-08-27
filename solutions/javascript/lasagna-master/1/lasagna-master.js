/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

// Main Program

export function cookingStatus(timer) {
  if (timer === undefined) {
    return 'You forgot to set the timer.';
  } else {
    if (timer == 0) {
      return 'Lasagna is done.';
    } else if (timer !== 0) {
      return 'Not done, please wait.';
    }
  }
}

export function preparationTime(layers, timePerMinutes) {
  timePerMinutes = timePerMinutes ?? 2

  return layers.length * timePerMinutes
}

export function quantities(layers) {
  let noodlesWeight = 0;
  let sauceWeight = 0;

  for (let i = 0; i < layers.length ;i++) {
    if (layers[i] == "noodles") {
      noodlesWeight += 50
    } else if (layers[i] == "sauce") {
      sauceWeight += 0.2
    }
  }

  const NEEDED_INGREDIENTS = {
    noodles: noodlesWeight,
    sauce: sauceWeight,
  }

  return NEEDED_INGREDIENTS;
}

export function addSecretIngredient(friendList, myList) {
  let lastIngredient = friendList[friendList.length - 1];

  myList.push(lastIngredient)
}

export function scaleRecipe(recipe, peopleNum) {
  let scaled = {};
  for (const key in recipe) {
    scaled[key] = recipe[key] * (peopleNum / 2);
  }
  
  return scaled;
}