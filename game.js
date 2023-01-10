var rulesButton = document.getElementById('rules-button');
rulesButton.addEventListener('click',() => {
  window.location = 'rules.html';
});
var Name = document.getElementById('name');
Name.innerText = sessionStorage.getItem("Player");

var turn = "true"

var target = document.getElementById('target');
sessionStorage.setItem('target',target)

var playerscore=0;
var playerwickets=0;
var computerscore=0;
var computerwicket=0;
var num0=document.getElementById("num0")
var num1=document.getElementById("num1")
var num2=document.getElementById("num2")
var num3=document.getElementById("num3")
var num4=document.getElementById("num4")
var num5=document.getElementById("num5")
var num6=document.getElementById("num6")
var playerScore = document.getElementById("players-score")
var computerScore = document.getElementById("computers-score")
var playernumber = document.getElementById("player-number")
var computernumber = document.getElementById("computer-number")
var randomNumber=Math.round(Math.random()*6);

var switchButton = document.getElementById('innings-button')
switchButton.style.display = 'none';

startGame();
function startGame(){
if(sessionStorage.getItem('batting')=='true'){

 num0.onclick=()=>{
  playernumber.innerText=0
  console.log('0')
    randomNumber=Math.round(Math.random()*6);
    computernumber.innerText=randomNumber;
    console.log(randomNumber)
  if(randomNumber==0){
    playerwickets++;
    playerScore.innerText="Score:" + playerscore +"/"+ playerwickets
  } else{ sessionStorage.setItem("num0",num0);
  if(playerwickets<=2){
    playerscore+=0
  playerScore.innerText="Score:" + playerscore +"/"+ playerwickets
  }
  else{
    playerScore.innerText="Score:" + playerscore +"/"+ 3
    playerScore.style.display='none'
    target.innerText=`The score is ${playerscore}/3. Target is ${playerscore+1}`
    switchButton.style.display = 'none';
    sessionStorage.setItem('batting',false);
    startGame();
    return;
  }
  }
  }
 
 num1.onclick=()=>{
  playernumber.innerText=1
  console.log('1')
    randomNumber=Math.round(Math.random()*6);
    computernumber.innerText=randomNumber;
    console.log(randomNumber)
  if(randomNumber==1){
    playerwickets++;
    playerScore.innerText="Score:" + playerscore +"/"+ playerwickets
  } else{ sessionStorage.setItem("num1",num1);

  if(playerwickets<=2){
    playerscore+=1
  playerScore.innerText="Score:" + playerscore +"/"+ playerwickets
  }
  else{
    playerScore.innerText="Score:" + playerscore +"/"+ 3
    playerScore.style.display='none'
    target.innerText=`The score is ${playerscore}/3. Target is ${playerscore+1}`
    switchButton.style.display = 'block'
    sessionStorage.setItem('batting',false)
    startGame();
    return;
  }
 }
 }

 num2.onclick=()=>{
  playernumber.innerText=2
  console.log('2')
    randomNumber=Math.round(Math.random()*6);
    computernumber.innerText=randomNumber;
    console.log(randomNumber)
  if(randomNumber==2){
    playerwickets++;
    playerScore.innerText="Score:" + playerscore +"/"+ playerwickets
  } else{ sessionStorage.setItem("num2",num2);
  playerscore+=2

  if(playerwickets<=2){
  
  playerScore.innerText="Score:" + playerscore +"/"+ playerwickets
  }
  else{
    playerScore.innerText="Score:" + playerscore +"/"+ 3
    playerScore.style.display='none'
    target.innerText=`The score is ${playerscore}/3. Target is ${playerscore+1}`
    switchButton.style.display = 'block'
    sessionStorage.setItem('batting',false)
    startGame();
    return;
  }
 }
 }

 num3.onclick=()=>{
  playernumber.innerText=3
  console.log('3')
    randomNumber=Math.round(Math.random()*6);
    computernumber.innerText=randomNumber;
    console.log(randomNumber)
  if(randomNumber==3){
    playerwickets++;
    playerScore.innerText="Score:" + playerscore +"/"+ playerwickets
  }else{
     console.log(playerscore +"/"+ playerwickets)
  sessionStorage.setItem("num3",num3);
  if(playerwickets<=2){
    playerscore+=3
  playerScore.innerText="Score:" + playerscore +"/"+ playerwickets
  }
  else{
    playerScore.innerText="Score:" + playerscore +"/"+ 3
    playerScore.style.display='none'
    target.innerText=`The score is ${playerscore}/3. Target is ${playerscore+1}`
    switchButton.style.display = 'block'
    sessionStorage.setItem('batting',false)
    startGame();
    return;
  }
  }
  }

 num4.onclick=()=>{
  playernumber.innerText=4
  console.log('4')
    randomNumber=Math.round(Math.random()*6);
    computernumber.innerText=randomNumber;
    console.log(randomNumber)
  if(randomNumber==4){
    playerwickets++;
    playerScore.innerText="Score:" + playerscore +"/"+ playerwickets
  }else{
     console.log(playerscore +"/"+ playerwickets)
  sessionStorage.setItem("num4",num4);
  if(playerwickets<=2){
    playerscore+=4
  playerScore.innerText="Score:" + playerscore +"/"+ playerwickets
  }
  else{
    playerScore.innerText="Score:" + playerscore +"/"+ 3
    playerScore.style.display='none'
    target.innerText=`The score is ${playerscore}/3. Target is ${playerscore+1}`
    switchButton.style.display = 'block'
    sessionStorage.setItem('batting',false)
    startGame();
    return;
  }
  }
  }

 num5.onclick=()=>{
  playernumber.innerText=5
  console.log('5')
    randomNumber=Math.round(Math.random()*6);
    computernumber.innerText=randomNumber;
    console.log(randomNumber)
  if(randomNumber==5){
    playerwickets++;
    playerScore.innerText="Score:" + playerscore +"/"+ playerwickets
  }else{
     console.log(playerscore +"/"+ playerwickets)
  sessionStorage.setItem("num5",num5);
  if(playerwickets<=2){
    playerscore=+5
  playerScore.innerText="Score:" + playerscore +"/"+ playerwickets
  }
  else{
    playerScore.innerText="Score:" + playerscore +"/"+ 3
    playerScore.style.display='none'
    target.innerText=`The score is ${playerscore}/3. Target is ${playerscore+1}`
    switchButton.style.display = 'block'
    sessionStorage.setItem('batting',false)
    startGame();
    return;
  }
 }
 }

 num6.onclick=()=>{
  playernumber.innerText=6
  console.log('6')
    randomNumber=Math.round(Math.random()*6);
    computernumber.innerText=randomNumber;
    console.log(randomNumber)
  if(randomNumber==6){
    playerwickets++;
    playerScore.innerText="Score:" + playerscore +"/"+ playerwickets
  }else{
    console.log(playerscore +"/"+ playerwickets)
  sessionStorage.setItem("num6",num6);
  if(playerwickets<=2){
    playerscore+=6
  playerScore.innerText="Score:" + playerscore +"/"+ playerwickets
  }
  else{
    playerScore.innerText="Score:" + playerscore +"/"+ 3
    playerScore.style.display='none'
    target.innerText=`The score is ${playerscore}/3. Target is ${playerscore+1}`
    switchButton.style.display = 'block'
    sessionStorage.setItem('batting',false)
    startGame();
    return;
  }
 }
 }
 }
else{
  console.log("bowling")
  num0.onclick=()=>{
    playernumber.innerText=0
  console.log('0')
  randomNumber=Math.round(Math.random()*6);
  computernumber.innerText=randomNumber
  console.log(randomNumber)
  if(randomNumber==0){
    computerwicket++;
    computerScore.innerText="Score:" + computerscore +"/"+ computerwicket
  }else{
    console.log(computerscore +"/"+ computerwicket)
  sessionStorage.setItem('num0',num0);
  if(computerwicket<=2){
    computerscore+=randomNumber;
    computerScore.innerText="Score:" + computerscore +"/"+ computerwicket
    }
    else{
      computerScore.innerText="Score:" + computerscore +"/"+ 3
      computerScore.style.display='none'
      target.innerText=`The score is ${computerscore}/3. Target is ${computerscore+1}`
      switchButton.style.display = 'block'
      sessionStorage.setItem('batting',true)
      startGame();
      return;
    } 
  }
 }

 num1.onclick=()=>{
  playernumber.innerText=1
  console.log('1')
    randomNumber=Math.round(Math.random()*6);
    computernumber.innerText=randomNumber;
    console.log(randomNumber)
  if(randomNumber==1){
    computerwicket++;
    computerScore.innerText="Score:" + computerscore +"/"+ computerwicket ;
  }else{
     console.log(computerscore +"/"+ computerwicket)
  sessionStorage.setItem("num1",num1);
  if(computerwicket<=2){
    computerscore+=randomNumber;
    computerScore.innerText="Score:" + computerscore +"/"+ computerwicket;
    }
    else{
      computerScore.innerText="Score:" + computerscore +"/"+ 3;
      computerScore.style.display='none';
      target.innerText=`The score is ${computerscore}/3. Target is ${computerscore+1}`;
      switchButton.style.display = 'block'
      sessionStorage.setItem('batting',true)
      startGame();
      return;
    } 
  }
}

num2.onclick=()=>{
  playernumber.innerText=2
  console.log('2')
    randomNumber=Math.round(Math.random()*6);
    computernumber.innerText=randomNumber
    console.log(randomNumber)
  if(randomNumber==2){
    computerwicket++;
    computerScore.innerText="Score:" + computerscore +"/"+ computerwicket;
    console.log(computerscore +"/"+ computerwicket)
  }else{
    sessionStorage.setItem("num2",num2);
  if(computerwicket<=2){
    computerscore+=randomNumber;
    computerScore.innerText="Score:" + computerscore +"/"+ computerwicket
    }
    else{
      computerScore.innerText="Score:" + computerscore +"/"+ 3
      computerScore.style.display='none'
      target.innerText=`The score is ${computerscore}/3. Target is ${computerscore+1}`
      switchButton.style.display = 'block'
      sessionStorage.setItem('batting',true)
      startGame();
      return;
    } 
  }
}

num3.onclick=()=>{
  playernumber.innerText=3
  console.log('3')
    randomNumber=Math.round(Math.random()*6);
    computernumber.innerText=randomNumber
    console.log(randomNumber)
  if(randomNumber==3){
    computerwicket++;
    computerScore.innerText="Score:" + computerscore +"/"+ computerwicket;
  }else{
     console.log(computerscore +"/"+ computerwicket)
  sessionStorage.setItem("num3",num3);
  if(computerwicket<=2){
    computerscore+=randomNumber;
    computerScore.innerText="Score:" + computerscore +"/"+ computerwicket
    }
    else{
      computerScore.innerText="Score:" + computerscore +"/"+ 3
      computerScore.style.display='none'
      target.innerText=`The score is ${computerscore}/3. Target is ${computerscore+1}`
      switchButton.style.display = 'block'
      sessionStorage.setItem('batting',true)
      startGame();
      return;
    }
  } 
}

num4.onclick=()=>{
  playernumber.innerText=4
  console.log('4')
    randomNumber=Math.round(Math.random()*6);
    computernumber.innerText=randomNumber
    console.log(randomNumber)
  if(randomNumber==4){
    computerwicket++;
    computerScore.innerText="Score:" + computerscore +"/"+ computerwicket
      console.log(computerscore +"/"+ computerwicket)
  }else{
     console.log(computerscore +"/"+ computerwicket)
  sessionStorage.setItem("num4",num4);
  if(computerwicket<=2){
    computerscore+=randomNumber;
    computerScore.innerText="Score:" + computerscore +"/"+ computerwicket
    }
    else{
      computerScore.innerText="Score:" + computerscore +"/"+ 3
      computerScore.style.display='none'
      target.innerText=`The score is ${computerscore}/3. Target is ${computerscore+1}`
      switchButton.style.display = 'block'
      sessionStorage.setItem('batting',true)
      if((playerscore>computerscore)||(computerscore>playerscore)){
        window.location = 'inningsbreak.html';
      }
      startGame();
      return;
    } 
  }
}

num5.onclick=()=>{
  playernumber.innerText=5
  console.log('5')
    randomNumber=Math.round(Math.random()*6);
    computernumber.innerText=randomNumber
    console.log(randomNumber)
  if(randomNumber==5){
    computerwicket++;
    computerScore.innerText="Score:" + computerscore +"/"+ computerwicket
      console.log(computerscore +"/"+ computerwicket)
  }else{
     console.log(computerscore +"/"+ computerwicket)
  sessionStorage.setItem("num5",num5);
  if(computerwicket<=2){
    computerscore+=randomNumber;
    computerScore.innerText="Score:" + computerscore +"/"+ computerwicket
    }
    else{
      computerScore.innerText="Score:" + computerscore +"/"+ 3
      computerScore.style.display='none'
      target.innerText=`The score is ${computerscore}/${3}. Target is ${computerscore+1}`
      switchButton.style.display = 'block'
      sessionStorage.setItem('batting',true)
      if((playerscore>computerscore)||(computerscore>playerscore)){
        window.location = 'inningsbreak.html';
      }
      startGame();
      return;
    } 
  }
}

num6.onclick=()=>{
  playernumber.innerText=6
  console.log('6')
    randomNumber=Math.round(Math.random()*6);
    computernumber.innerText=randomNumber
    console.log(randomNumber)
  if(randomNumber==6){
    computerwicket++;
    computerScore.innerText="Score:" + computerscore +"/"+ computerwicket
      console.log(computerscore +"/"+ computerwicket)
  }else{
     console.log(computerscore +"/"+ computerwicket)
  sessionStorage.setItem("num6",num6);
  if(computerwicket<=2){
  computerscore+=randomNumber;
  computerScore.innerText="Score:" + computerscore +"/"+ computerwicket
  }
  else{
    computerScore.innerText="Score:" + computerscore +"/"+ 3
    computerScore.style.display='none'
    target.innerText=`The score is ${computerscore}/${3}. Target is ${computerscore+1}`
    switchButton.style.display = 'block'
    sessionStorage.setItem('batting',true) 
    if(switchButton.style.display = 'block'){
      if((playerscore>computerscore)||(computerscore>playerscore)){
        window.location = 'inningsbreak.html';
      }
      }
      startGame();
      return;
  } 
}
}
}

}
sessionStorage.setItem('computerscore',computerscore)
sessionStorage.setItem('playerscore',playerscore)



