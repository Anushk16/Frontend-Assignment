// Get the containers
const leftContainer = document.querySelector('.left-container');
const rightContainer = document.querySelector('.right-container');

// Get the reset button
const resetBtn = document.getElementById('resetBtn');

// Add event listeners to the items for drag and drop
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

// Add event listeners to the containers for drag and drop
leftContainer.addEventListener('dragover', dragOver);
leftContainer.addEventListener('dragenter', dragEnter);
leftContainer.addEventListener('dragleave', dragLeave);
leftContainer.addEventListener('drop', drop);

rightContainer.addEventListener('dragover', dragOver);
rightContainer.addEventListener('dragenter', dragEnter);
rightContainer.addEventListener('dragleave', dragLeave);
rightContainer.addEventListener('drop', drop);

// Add event listener to the reset button
resetBtn.addEventListener('click', reset);

// Drag functions
function dragStart() {
  this.classList.add('dragging');
}

function dragEnd() {
  this.classList.remove('dragging');
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('dragging-over');
}

function dragLeave() {
  this.classList.remove('dragging-over');
}

function drop() {
  this.classList.remove('dragging-over');
  const item = document.querySelector('.dragging');
  
  if (this === rightContainer) {
    rightContainer.appendChild(item);
    displayMessage('Item dropped successfully!');
  }
}

// Reset function
function reset() {
  rightContainer.innerHTML = '<h3 style="text-align:center;">Second Container</h3> <hr>';
  leftContainer.innerHTML = `
  <h3 style="text-align:center;">First Container</h3>
  <hr>
  <div class="item" draggable="true">
      <img src="1.jpg" alt="image suppused to be here">
  </div>

  <div class="item" draggable="true">
      <p style="font-weight: bolder;">DRAG ME</p>
  </div>

  <div id="item1" class="item" draggable="true">
      <p style="font-weight: bolder;">ITEM 1!</p>
  </div>

  <div class="item" draggable="true">
      <img src="2.jpg" alt="image suppused to be here">
  </div>

  <div id="item1" class="item" draggable="true">
      <p style="font-weight: bolder;">ITEM2!</p>
  </div>
  `;
  items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
  });
}

// Display success message
function displayMessage(message) {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  rightContainer.appendChild(messageElement);
}
