// Example JavaScript code for gaming website interactivity

// Get a reference to the game cards
const gameCards = document.querySelectorAll('.game-card');

// Add event listeners to game cards for click events
gameCards.forEach((card) => {
  card.addEventListener('click', () => {
    // Toggle the active class when a game card is clicked
    card.classList.toggle('active');
  });
});

// Example function for displaying a popup/modal
function displayPopup() {
  // Get the popup element
  const popup = document.getElementById('popup');

  // Display the popup by adding the 'show' class
  popup.classList.add('show');
}

// Example function for closing a popup/modal
function closePopup() {
  // Get the popup element
  const popup = document.getElementById('popup');

  // Close the popup by removing the 'show' class
  popup.classList.remove('show');
}

// Add event listeners to trigger the popup display and close
const popupTrigger = document.getElementById('popup-trigger');
const popupCloseBtn = document.getElementById('popup-close');

popupTrigger.addEventListener('click', displayPopup);
popupCloseBtn.addEventListener('click', closePopup);
