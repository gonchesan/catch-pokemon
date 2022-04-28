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

// export const randomId = (remainingPokemons) => {
//   if (remainingPokemons) {
//     return Math.floor(Math.random() * remainingPokemons.length);
//   } else {
//     return Math.floor(Math.random() * 151);
//   }
// };
export const randomId = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

//Fetch an object from an array from an index. Because the id of the pokemons is different from array.length
export const returnData = (array, index) => {
  let dataToFind = array.find((item) => item.id === index);
  return dataToFind;
};
