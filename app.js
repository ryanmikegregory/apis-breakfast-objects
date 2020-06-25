/*
You are responsible for making breakfast for a group of 4 picky eaters.
If you can't feed them, you will have to go out to eat. Ideally, you want to
eat at home (it's less expensive), but you'd rather go out to eat than listen to them whine.

Here are the demands from the picky eaters:

They all want to eat the same thing.
They each want 2 eggs and 3 slices of bacon OR 3 chocolate chip pancakes.
A few notes:

A bag of pancake mix can make 10 pancakes.
A single pancake must have at least 15 chocolate chips to be chocolatey enough for the picky eaters.
Your function breakfastChecker should be able to determine if a single object with a list of
supplies has enough ingredients (contents) to make breakfast. You do not need to worry about
multiple objects (you will make breakfast from only ingredients in the refrigerator OR pantry).

Be sure to change the values in the objects to test your function in multiple conditions.

Hint: Just check eggs and bacon first. Take small steps!

Stretch
The picky eaters might invite some picky friends, but you won't know until seconds before
you have to make a decision. Allow the function to accept a second parameter - the total number
of picky eaters - to allow you to make the calculation at the last second.
*/

let pantryContents = {
  pancakeMixBags: 1,
  chocolateChips: 2000,
};

let refrigeratorContents = {
  eggs: 4,
  baconStrips: 8,
  chocolateChips: 200,
  cheeseSlices: 6,
  tomatoes: 1,
  onions: 1,
};

const numOfPancakesPerBag = 10;
const numOfPancakesPeopleEat = 3;
const numOfChocChipsPerPancake = 15;
const numOfBaconPeopleEat = 3;
const numOfEggsPeopleEat = 2;

// You shouldn't need to change anything above this line initially
// You may change it to test different scenarios, but it should work as is

function breakfastChecker(contents, numOfPeople) {
  const numberOfEggsNeeded = numOfEggsPeopleEat * numOfPeople;
  const numOfBaconNeeded = numOfBaconPeopleEat * numOfPeople;

  if (
    contents.eggs >= numberOfEggsNeeded &&
    contents.baconStrips >= numOfBaconNeeded
  )
    return true;

  const numOfPancakesNeeded = numOfPancakesPeopleEat * numOfPeople;
  const numOfChocChipsNeeded = numOfChocChipsPerPancake * numOfPancakesNeeded;

  if (
    contents.pancakeMixBags * numOfPancakesPerBag >= numOfPancakesNeeded &&
    contents.chocolateChips >= numOfChocChipsNeeded
  )
    return true;

  return false;
}

// Your function should return 'yes' or 'no'
console.log(
  'Does the pantry have enough food for breakfast?',
  breakfastChecker(pantryContents, 4)
);
console.log(
  'Does the refrigerator have enough food for breakfast?',
  breakfastChecker(refrigeratorContents, 1)
);
