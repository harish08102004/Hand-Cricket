
var button = document.getElementById('play-button');
button.addEventListener('click',() => {
  const Player = prompt("Please enter your name:"); 
  console.log(Player)
  sessionStorage.setItem("Player",Player);
  window.location = 'toss.html';
  const outputElement = document.getElementById('toss-time');
  outputElement.innerHTML = (`Hello, ${Player} toss the coin to choose!`);

});







