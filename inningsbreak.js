var rematchButton = document.getElementById('rematch-button');
rematchButton.addEventListener('click',() => {
  window.location = 'toss.html';
});

var results = document.getElementById("results")
results.innerText = sessionStorage.getItem("playerscore")