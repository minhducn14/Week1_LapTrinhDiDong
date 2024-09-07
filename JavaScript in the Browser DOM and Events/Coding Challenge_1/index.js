// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color(#222) and number width(15rem)
// Initialize variables

let score = 0;
let secretNumber = 10
function displayMessage(message) {
    document.getElementsByClassName('message')[0].textContent = message;
}

document.getElementsByClassName('again')[0].addEventListener('click', function () {

    displayMessage('Start guessing...');
    document.getElementsByClassName('score')[0].textContent = score;
    document.getElementsByClassName('number')[0].textContent = secretNumber;
    document.getElementsByClassName('guess')[0].value = '';

    document.body.style.backgroundColor = '#222';
    document.getElementsByClassName('number')[0].style.width = '15rem';
});
