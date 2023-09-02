// what is error

// syntax error, type error, reference error

// try {
//   const a = 10;
//   console.log(x);
// } catch (error) {
//   console.log(error);
// }

const error = new Error('Custom Created Error Msg');

class CustomError extends Error {
  constructor(name, message) {
    super(message);
    this.name = name;
  }
}

const NewError = new CustomError('CustomError', 'New Error for Testing');

console.log(error);

console.log(NewError);

try {

  //start a timer
  const a = 10;
  // console.log(x);
  throw NewError;
  console.log('Line after error code inside try statement');

} catch (error) {
  console.log(error);

} finally { // used for cleaning up operations
  // close the timer here ( Clear code not prone error )
  console.log('Finally Statements');
}

console.log('Line 17');
console.log('Line 18');
console.log('Line 19');
