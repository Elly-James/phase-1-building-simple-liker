// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}








// Add .hidden to the error modal initially
const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

// Function to toggle heart state
function toggleHeart(heart) {
    if (heart.textContent === EMPTY_HEART) {
        mimicServerCall()
            .then(() => {
                heart.textContent = FULL_HEART;
                heart.classList.add('activated-heart');
            })
            .catch((error) => {
                errorModal.classList.remove('hidden');
                const errorMessage = document.getElementById('modal-message');
                errorMessage.textContent = error;
                setTimeout(() => errorModal.classList.add('hidden'), 3000);
            });
    } else {
        heart.textContent = EMPTY_HEART;
        heart.classList.remove('activated-heart');
    }
}

// Add event listeners to all hearts
const hearts = document.querySelectorAll('.like-glyph');
hearts.forEach((heart) => {
    heart.addEventListener('click', () => toggleHeart(heart));
});

// Mock server call function
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isRandomFailure = Math.random() < 0.2;
            if (isRandomFailure) {
                reject("Random server error. Try again.");
            } else {
                resolve("Pretend remote server notified of action!");
            }
        }, 300);
    });
}