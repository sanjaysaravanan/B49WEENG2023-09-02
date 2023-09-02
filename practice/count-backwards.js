let count = 10;

const h1Element = document.querySelector('h1');

h1Element.innerHTML = count;

const intervalId = setInterval(() => {

  count -= 1;
  h1Element.innerHTML = count;

}, 1000);


// clearInterval(  );

// setTimeout for 10secs then clear the interval
setTimeout(() => {
  clearInterval(intervalId);
  h1Element.innerHTML = 'Happy Raksha Bandan';
}, 10000)