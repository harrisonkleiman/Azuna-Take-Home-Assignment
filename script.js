const counterContainer = document.getElementById("counter-container");
const increaseButton = document.getElementById("increase-button");
const decreaseButton = document.getElementById("decrease-button");

// Counter starts at 1
let counterValue = 1;

// Updates the counter text and button states based on the counter's value
const updateCounter = () => {
  counterContainer.textContent = counterValue;
  decreaseButton.disabled = counterValue <= 1;
  increaseButton.disabled = counterValue >= 5;
};

// Increases the counter and limits the maximum value to 5
increaseButton.addEventListener("click", () => {
    if (counterValue < 5) {
      counterValue++;
      updateCounter();
    }
  });

// Decreases the counter and limits the minimum value to 1
decreaseButton.addEventListener("click", () => {
  if (counterValue > 1) {
    counterValue--;
    updateCounter();
  }
});

updateCounter();