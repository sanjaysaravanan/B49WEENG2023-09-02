let currPage = 1;

const createCharacter = function (character) {
  const imgElement = document.createElement('img');

  imgElement.setAttribute('src', character.imageUrl);
  imgElement.setAttribute('alt', character.name);
  imgElement.setAttribute('title', character.name);

  imgElement.style.margin = '8px';

  document.body.appendChild(imgElement);
}
const preBtn = document.createElement('button');

preBtn.innerText = 'Prev';


preBtn.addEventListener('click', () => {

  if (currPage > 1) {
    currPage -= 1;

    loadImages();
  }

})


const nxtBtn = document.createElement('button');

nxtBtn.innerText = 'Next';

nxtBtn.style.float = 'right';

nxtBtn.addEventListener('click', () => {

  currPage += 1;

  loadImages();

})

const divElement = document.createElement('div');

divElement.append(preBtn, nxtBtn);

const loadImages = () => {

  document.body.innerHTML = '';

  let innerXhr = new XMLHttpRequest();

  innerXhr.open('GET', `https://api.disneyapi.dev/character?page=${currPage}&pageSize=50`);

  innerXhr.send();

  innerXhr.onload = function () {
    const { data } = JSON.parse(innerXhr.responseText);
    data.forEach((charater) => {
      createCharacter(charater);
    });

    document.body.append(divElement);
  }

  if (currPage <= 1) {
    preBtn.disabled = true;
  }
}

loadImages();




