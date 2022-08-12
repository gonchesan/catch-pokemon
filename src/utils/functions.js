export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const randomId = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

//Fetch an object from an array from an index. Because the id of the pokemons is different from array.length
export const returnData = (array, index) => {
  let dataToFind = array.find((item) => item.id === index);
  return dataToFind;
};

export const generations = {
  '1Gen': { quantity: '151', since: '0', firstId: 1, lastId: 151 },
  '2Gen': { quantity: '100', since: '151', firstId: 152, lastId: 251 },
  '3Gen': { quantity: '135', since: '251', firstId: 252, lastId: 386 },
  '4Gen': { quantity: '108', since: '386', firstId: 387, lastId: 494 },
};
