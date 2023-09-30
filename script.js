
const count = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');


let counter = 0;

function updateCounter() {
  count.textContent = counter;
}

incrementButton.addEventListener('click', () => {
    counter++;
    updateCounter();
  });
  

decrementButton.addEventListener('click', () => {
  counter--;
  updateCounter();
});


resetButton.addEventListener('click', () => {
  counter = 0;
  updateCounter();
});


updateCounter();
