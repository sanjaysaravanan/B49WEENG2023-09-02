console.log('Hi');

[1].forEach(() => {
  console.log("Sync Second Hi");
})

setTimeout(() => {
  console.log("Async Second Hi");
}, 0);

console.log('Third Hi');
console.log('Third Hi');
console.log('Third Hi');
console.log('Third Hi');
console.log('Third Hi');
console.log('Third Hi');
console.log('Third Hi');
console.log('Third Hi');
