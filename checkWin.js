function checkWin() {
//get every box's present color 
  let box1Color = document.querySelector("#box1").style.backgroundColor;
  box2Color = document.querySelector("#box2").style.backgroundColor;
  box3Color = document.querySelector("#box3").style.backgroundColor;
  box4Color = document.querySelector("#box4").style.backgroundColor;
  box5Color = document.querySelector("#box5").style.backgroundColor;
  box6Color = document.querySelector("#box6").style.backgroundColor;
  box7Color = document.querySelector("#box7").style.backgroundColor;
  box8Color = document.querySelector("#box8").style.backgroundColor;
  box9Color = document.querySelector("#box9").style.backgroundColor;

//get the turn box
  let turn = document.querySelector("#turnparent");

//check first row
  firstRowRed = box1Color == "red" && box2Color == "red" && box3Color == "red";
  firstRowBlue = box1Color == "blue" && box2Color == "blue" && box3Color == "blue";

//check second row
  secondRowRed = box4Color == "red" && box5Color == "red" && box6Color == "red";
  secondRowBlue = box4Color == "blue" && box5Color == "blue" && box6Color == "blue";

//check third row
  thirdRowRed = box7Color == "red" && box8Color == "red" && box9Color == "red";
thirdRowBlue = box7Color == "blue" && box8Color == "blue" && box9Color == "blue";

//check first coulumn
  firstCoulumnRed = box1Color == "red" && box4Color == "red" && box7Color == "red";
  firstCoulumnBlue = box1Color == "blue" && box4Color == "blue" && box7Color == "blue";

//check second coulumn
  secondCoulumnRed = box2Color == "red" && box5Color == "red" && box8Color == "red";
  secondCoulumnBlue = box2Color == "blue" && box5Color == "blue" && box8Color == "blue";

//check third coulumn
  thirdCoulumnRed = box3Color == "red" && box6Color == "red" && box9Color == "red";
  thirdCoulumnBlue = box3Color == "blue" && box6Color == "blue" && box9Color == "blue";

//check slope up
  slopeUpRed = box7Color == "red" && box5Color == "red" && box3Color == "red";
  slopeUpBlue = box7Color == "blue" && box5Color == "blue" && box3Color == "blue";

//check slope down
  slopeDownRed = box1Color == "red" && box5Color == "red" && box9Color == "red";
  slopeDownBlue = box1Color == "blue" && box5Color == "blue" && box9Color == "blue";

//all possible win conditions, alert the winner and call out clearboard()
  try {
    if (firstRowRed === true) 
      throw "RED";
    if (firstRowBlue === true)
      throw "BLUE";
    if (secondRowRed === true)
      throw "RED";
    if (secondRowBlue === true)
      throw "BLUE";
    if (thirdRowRed === true)
      throw "RED";
    if (thirdRowBlue === true)
      throw "BLUE";
    if (firstCoulumnRed === true)
      throw "RED";
    if (firstCoulumnBlue === true)
      throw "BLUE";
    if (secondCoulumnRed === true)
      throw "RED";
    if (secondCoulumnBlue === true)
      throw "BLUE";
    if (thirdCoulumnRed === true)
      throw "RED"; 
    if (thirdCoulumnBlue === true)
      throw "BLUE";
    if (slopeUpRed === true)
      throw "BLUE";
    if (slopeUpBlue === true)
      throw "BLUE";
    if (slopeDownRed === true)
      throw "RED";
    if (slopeDownBlue === true)
      throw "BLUE";
  } catch(winner) {
      setTimeout(function(){
        alert(winner + " WINS!");
        turn.style.visibility = "Hidden"
        },500);
  }
}
