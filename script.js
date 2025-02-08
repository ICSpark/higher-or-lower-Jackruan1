// Global variables
var resultParagraph = document.getElementById("result");
var random;
var range = 100;
var nextRandom = Math.floor(Math.random() * range + 1);



// Function to generate a random number
function generateRandom() {
    random = nextRandom;
    nextRandom = Math.floor(Math.random() * range + 1);
    console.log(random);
    resultParagraph.innerHTML = random;
}

// Function for the higher button
function higher() {
  if (random > nextRandom) {
    window.alert ("womp womp")
  }
  else if (random < nextRandom) {
    window.alert ("you win!")
  }
  else {
    window.alert ("it's the same! (1 in 10,000)!")
  }
  generateRandom();
   
}

// Function for the lower button
function lower() {
   if (random > nextRandom) {
    window.alert ("you win!")
   }
   else if (random < nextRandom) {
    window.alert ("womp womp")
   }
   else {
    window.alert ("it's the same! (1 in 10,000)!")
   }
   generateRandom();

}

//Generate a number to start the game!
generateRandom();
