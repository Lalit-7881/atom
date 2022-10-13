//restart the game
var restart = document.querySelector("#b");

//grab alll the square
var squares = document.querySelectorAll('td');


//clear all the squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListners('click',clearBoard);

//check the square marker


 class changeMarker {
  constructor() {
    if (this.textContent === '') {
      this.textContent = 'X';
    } else if (this.textContent === 'X') {
      this.textContent = 'O';
    } else {
      this.textContent = '';
    }
  }
}
 for (var i = 0; i < squares.length; i++) {
   squares[i].addEventListner('click',changeMarker)
 }
