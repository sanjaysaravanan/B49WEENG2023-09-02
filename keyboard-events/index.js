

// const divElement = document.querySelector('div');

// divElement.addEventListener('keypress', (e) => {
//   console.log('keypress event', e);
// })

// we need to add it to input element
const inputElement = document.querySelector('input');

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '%', '+', '-', '*', '/'];

inputElement.addEventListener('keypress', (e) => {
  const oldValue = e.target.value;
  console.log('keypress event', e);
  // allow only numbers
  if (numbers.includes(e.key)) {
    console.log('Allowed Values');
  } else {
    alert('Only numbers are allowed');
    e.preventDefault();
  }
})


// inputElement.addEventListener('keydown', (e) => {

//   if (e.key === ' ') {
//     alert('Spaces are allowed');
//   }

// })