const redEx = /red/;

//gradient of the Tic Tac Toe Frame
const tictactoeFrame = document.querySelector("#tictactoeFrame");
var ctx = tictactoeFrame.getContext("2d");
    grd = ctx.createLinearGradient(0, 0, 170, 170);
    grd.addColorStop(0, "darkred");
    grd.addColorStop(1, "darkblue");
    ctx.fillStyle = grd;
    ctx.fillRect(0,0, 920, 968);

//fill boxes if clicked on
function fill1() {
  //check who's turn it is
  var player = document.getElementById('turn');
      playerTurn = player.innerText;
      box1 = document.querySelector('#box1');
      whomTurn = redEx.test(playerTurn);
      //prevents user from clickingagain
      box1.removeAttribute("onclick");
 
    if (whomTurn === true) {
      box1.style.backgroundColor = "red";
      player.innerHTML = "blue's"; player.style.color = "blue";
    } else {
      box1.style.backgroundColor = "blue";
      player.innerHTML = "red's"; player.style.color = "red";
    }
}

function fill2() {
  //check who's turn it is
  var player = document.getElementById('turn');
      playerTurn = player.innerText;
      box2 = document.querySelector('#box2');
      whomTurn = redEx.test(playerTurn);
      //prevents user from clickingagain
      box2.removeAttribute("onclick");
 
    if (whomTurn === true) {
      box2.style.backgroundColor = "red";
      player.innerHTML = "blue's"; player.style.color = "blue";
    } else {
      box2.style.backgroundColor = "blue";
      player.innerHTML = "red's"; player.style.color = "red";
    }
}

function fill3() {
  //check who's turn it is
  var player = document.getElementById('turn');
      playerTurn = player.innerText;
      box3 = document.querySelector('#box3');
      whomTurn = redEx.test(playerTurn);
      //prevents user from clickingagain
      box3.removeAttribute("onclick");
 
    if (whomTurn === true) {
      box3.style.backgroundColor = "red";
      player.innerHTML = "blue's"; player.style.color = "blue";
    } else {
      box3.style.backgroundColor = "blue";
      player.innerHTML = "red's"; player.style.color = "red";
    }
}

function fill4() {
  //check who's turn it is
  var player = document.getElementById('turn');
      playerTurn = player.innerText;
      box4 = document.querySelector('#box4');
      whomTurn = redEx.test(playerTurn);
      //prevents user from clickingagain
      box4.removeAttribute("onclick");
 
    if (whomTurn === true) {
      box4.style.backgroundColor = "red";
      player.innerHTML = "blue's"; player.style.color = "blue";
    } else {
      box4.style.backgroundColor = "blue";
      player.innerHTML = "red's"; player.style.color = "red";
    }
}

function fill5() {
  //check who's turn it is
  var player = document.getElementById('turn');
      playerTurn = player.innerText;
      box5 = document.querySelector('#box5');
      whomTurn = redEx.test(playerTurn);
      //prevents user from clickingagain
      box5.removeAttribute("onclick");
 
    if (whomTurn === true) {
      box5.style.backgroundColor = "red";
      player.innerHTML = "blue's"; player.style.color = "blue";
    } else {
      box5.style.backgroundColor = "blue";
      player.innerHTML = "red's"; player.style.color = "red";
    }
}

function fill6() {
  //check who's turn it is
  var player = document.getElementById('turn');
      playerTurn = player.innerText;
      box6 = document.querySelector('#box6');
      whomTurn = redEx.test(playerTurn);
      //prevents user from clickingagain
      box6.removeAttribute("onclick");
 
    if (whomTurn === true) {
      box6.style.backgroundColor = "red";
      player.innerHTML = "blue's"; player.style.color = "blue";
    } else {
      box6.style.backgroundColor = "blue";
      player.innerHTML = "red's"; player.style.color = "red";
    }
}

function fill7() {
  //check who's turn it is
  var player = document.getElementById('turn');
      playerTurn = player.innerText;
      box7 = document.querySelector('#box7');
      whomTurn = redEx.test(playerTurn);
      //prevents user from clickingagain
      box7.removeAttribute("onclick");
 
    if (whomTurn === true) {
      box7.style.backgroundColor = "red";
      player.innerHTML = "blue's"; player.style.color = "blue";
    } else {
      box7.style.backgroundColor = "blue";
      player.innerHTML = "red's"; player.style.color = "red";
    }
}

function fill8() {
  //check who's turn it is
  var player = document.getElementById('turn');
      playerTurn = player.innerText;
      box8 = document.querySelector('#box8');
      whomTurn = redEx.test(playerTurn);
      //prevents user from clickingagain
      box8.removeAttribute("onclick");
 
    if (whomTurn === true) {
      box8.style.backgroundColor = "red";
      player.innerHTML = "blue's"; player.style.color = "blue";
    } else {
      box8.style.backgroundColor = "blue";
      player.innerHTML = "red's"; player.style.color = "red";
    }
}

function fill9() {
  //check who's turn it is
  var player = document.getElementById('turn');
      playerTurn = player.innerText;
      box9 = document.querySelector('#box9');
      whomTurn = redEx.test(playerTurn);
      //prevents user from clickingagain
      box9.removeAttribute("onclick");
 
    if (whomTurn === true) {
      box9.style.backgroundColor = "red";
      player.innerHTML = "blue's"; player.style.color = "blue";
    } else {
      box9.style.backgroundColor = "blue";
      player.innerHTML = "red's"; player.style.color = "red";
    }
}
