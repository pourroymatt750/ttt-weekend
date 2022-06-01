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
const squareEls = document.querySelector('.sqr')


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