`
  <h1 id = "title" > Pagination</h1 >
  <p id="description">Description</p>
  <div class="table-responsive">
    <table id="table" class="table">
      <thead>

      </thead>
      <tbody></tbody>
    </table>
  </div>
  <div id="buttons" class="d-flex justify-content-center"></div>
`

const h1Element = document.createElement('h1');

h1Element.setAttribute('id', 'title');

h1Element.innerText = 'Pagination';

const pelement = document.createElement('p');

pelement.setAttribute('id', 'description');

pelement.innerText = 'Description';

document.body.append(h1Element, pelement);