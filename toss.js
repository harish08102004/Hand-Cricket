const tossButton = document.getElementById('press-button');
const resultElement = document.getElementById('results');
var gamescreen = document.getElementById('key-to-game-screen');
gamescreen.style.display = "none"

tossButton.addEventListener('click', () => {
  const toss = Math.round(Math.random());
  gamescreen.style.display = 'block';

  if (toss === 0) {
    resultElement.textContent = "You're going to bat first'";
    sessionStorage.setItem('batting',true)
  } else {
    resultElement.textContent = "You're going to bowl first'";
    sessionStorage.setItem('batting',false)
  }
});

gamescreen.addEventListener('click',() => {
  window.location = 'game.html';

});





