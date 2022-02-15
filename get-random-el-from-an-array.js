/*
*
*first, generate an array with random elements
*second, pick a random element from the array
*
*/

let randomData = []

//genereting a random array
for (var i = 0; i < 50; i++) {
  randomData.push(`${(Math.random()*20+10).toFixed(2)}`)
}


//function to get a random element from an array
function pickRandomElement(array){
  let randIndex = randomInteger(0, array.length-1)
  return [array[randIndex],"-index->",randIndex]
}

//function to get random number between to numbers
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomData,"--random-element-->",pickRandomElement(randomData))
