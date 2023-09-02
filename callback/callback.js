

const options = ['Foot', 'Volley', 'Hand'];

// named function passed as a callback
const func = (value) => {
  console.log(value, 'ball');
}

options.forEach(func);

options.forEach((value) => {
  console.log(value, 'ball');
});


// map, readuce, filter, find, findInder - take a function ( named, anonymous ) as an argument