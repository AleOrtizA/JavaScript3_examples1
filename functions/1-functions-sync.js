'use strict';

const campbellsTomatoSoup = {
  contents: 'tomato soup',
  weightInOz: 12
};

const heinzBeansSoup = {
  contents: 'beans soup',
  weightInOz: 10
};

function openCan(foodCan) {
  return foodCan.contents;
}

function warmUp(food) {
  return 'hot ' + food;
}

function eat(food) {
  console.log('Eating: ' + food);
}

function eatLunch(cannedFood) {
  const contents = openCan(cannedFood);
  console.log('Opened can: ' + contents);
  const hotFood = warmUp(contents);
  console.log('Warmed up: ' + hotFood);
  eat(hotFood);
}

function main() {
  const dayName = 'Wednesday';
  const soupOfDay = (dayName === 'Wednesday')
    ? heinzBeansSoup
    : campbellsTomatoSoup;
  console.log('It\'s lunch time!');
  eatLunch(soupOfDay);
  console.log('Finished lunch');
}

main();
