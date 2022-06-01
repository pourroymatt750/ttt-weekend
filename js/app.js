/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
//State of squares on the board
let board

//Track whose turn it is
let turn

//See if anyone has won yet, or if a tie occurred
let winner


/*------------------------ Cached Element References ------------------------*/
//Squares on the board 
const squareEls = document.querySelectorAll('.sqr')


//Displays the game's status on the page
const messageEls = document.querySelector('#message')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
//Initializes the state of the game 
function init() {
    board = [
        null, null, null,
        null, null, null,
        null, null, null
    ]
    turn = 1
    winner = null
    render()
}

//Calls the init() function
init()

//State of game rendered to user
function render() {
    /**Loops through the board and changes the 
     * square content based on if the sqaure is 
     * chosen or not**/
    board.forEach((square,idx)=> {
       if (square === 1) {
           squareEls[idx].textContent = 'X'
       } else if (square === -1) {
           squareEls[idx].textContent = 'O'
       } 
   });

   /**Shows a message based on the current state 
    * of the game**/
   if (winner = null) {
       messageEls.textContent = `It is player ${turn}'s turn!`
   } else if (winner === 'T') {
       messageEls.textContent = "Tie!"
   } else {
       messageEls.textContent = `Congrats ${turn}, you won!`
   }

}