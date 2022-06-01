/*-------------------------------- Constants --------------------------------*/
//The 8 possible winning combos
const winningCombos = [
    //1st way
    [0, 3, 6],

    //2nd way
    [1, 4, 7],

    //3rd way
    [2, 5, 8],

    //4th way
    [0, 1, 2],

     //5th way
    [3, 4, 5],

     //6th way
    [6, 7, 8],

     //7th way
    [0, 4, 8],

     //8th way
    [2, 4, 6]
]


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
//Event listener for the handleClick() function
squareEls.forEach(square => {
    square.addEventListener('click', handleClick)
}) 

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

/**Function that when called on in the event 
 * listener allows player to click on square**/
function handleClick(evt) {
   let sqIdx = evt.target.id.substring(2)
   
   if (board[sqIdx] !== null && winner !== null) {
       return
   }

   board[sqIdx] = turn

   turn = turn * (-1)

   //getWinner()

   render()
}

//Function that will decide winner of the game
function getWinner() {
    winningCombos.forEach
}