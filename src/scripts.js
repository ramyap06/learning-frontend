const box = document.querySelectorAll('.box');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const reset_btn = document.querySelector('.reset');
const win_msg = document.querySelectorAll('.win-msg');

console.log(win_msg.length);

let counter = 1;
let gameOver = true;
let winner = 0;

const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

console.log('Welcome to Tic-Tac-Toe!');
console.log('Player 1 Start');
player1.style.background = 'blue';
player1.style.color = 'white';

for (let i = 0; i < 9; i++) {
    box[i].addEventListener('click', (e) => boxClicked(e, i));
}
reset_btn.addEventListener('click', reset);

function boxClicked(e, i) {
    if (board[i] === 0 && winner === 0) {
        if (counter % 2 === 1) {
            console.log('Player 1 Turn');
            box[i].style.backgroundImage = "url('blue-circle.png')";
            box[i].style.backgroundSize = "contain";
            box[i].style.backgroundRepeat = "no-repeat";
            box[i].style.backgroundPosition = "center";

            player2.style.background = 'red';
            player2.style.color = 'white';
            player1.style.background = 'black';
            player1.style.color = 'blanchedalmond';
            
            board[i] = 1;
        } else {
            console.log('Player 2 Turn');
            box[i].style.backgroundImage = "url('red-x.png')";
            box[i].style.backgroundSize = "contain";
            box[i].style.backgroundRepeat = "no-repeat";
            box[i].style.backgroundPosition = "center";
            
            player1.style.background = 'blue';
            player1.style.color = 'white';
            player2.style.background = 'black';
            player2.style.color = 'blanchedalmond';

            board[i] = 2;
        }
        winner = playerWin();
        if (winner !== 0) {
            if (winner === 1) {
                console.log('Congrats Player 1!');
                win_msg[0].style.background = 'purple';
                win_msg[0].style.color = 'white';
            } else {
                console.log('Congrats Player 2!');
                win_msg[2].style.background = 'purple';
                win_msg[2].style.color = 'white';
            }
            reset_btn.style.background = 'palevioletred';
            reset_btn.style.color = 'maroon';
        }

        for (let i = 0; i < 9; i++) {
            if (board[i] === 0) {
                gameOver = false;
            }
        }
        if (gameOver) {
            win_msg[1].style.background = 'purple';
            win_msg[1].style.color = 'white';
            reset_btn.style.background = 'palevioletred';
            reset_btn.style.color = 'maroon';
        } else {
            gameOver = true;
        }

        counter++;
        console.log(counter);
        console.log(board);
        return counter;
    }
}

function playerWin() {
    if ((board[0] === 1 && board[1] === 1 && board[2] === 1) ||
        (board[3] === 1 && board[4] === 1 && board[5] === 1) ||
        (board[6] === 1 && board[7] === 1 && board[8] === 1) ||
        (board[0] === 1 && board[3] === 1 && board[6] === 1) ||
        (board[1] === 1 && board[4] === 1 && board[7] === 1) ||
        (board[2] === 1 && board[5] === 1 && board[8] === 1) ||
        (board[0] === 1 && board[4] === 1 && board[8] === 1) ||
        (board[2] === 1 && board[4] === 1 && board[6] === 1)) {
            return 1;
    }

    if ((board[0] === 2 && board[1] === 2 && board[2] === 2) ||
        (board[3] === 2 && board[4] === 2 && board[5] === 2) ||
        (board[6] === 2 && board[7] === 2 && board[8] === 2) ||
        (board[0] === 2 && board[3] === 2 && board[6] === 2) ||
        (board[1] === 2 && board[4] === 2 && board[7] === 2) ||
        (board[2] === 2 && board[5] === 2 && board[8] === 2) ||
        (board[0] === 2 && board[4] === 2 && board[8] === 2) ||
        (board[2] === 2 && board[4] === 2 && board[6] === 2)) {
            return 2;
    }
    return 0;
}

function reset() {
    if (reset_btn.style.background !== 'white') {
        for (let i = 0; i < board.length; i++) {
            board[i] = 0;
            box[i].style.backgroundImage = "";
        }
        win_msg[0].style.background = 'white';
        win_msg[0].style.color = 'white';
        win_msg[1].style.background = 'white';
        win_msg[1].style.color = 'white';
        counter = 1;
        player1.style.background = 'blue';
        player1.style.color = 'white';
        player2.style.background = 'black';
        player2.style.color = 'blanchedalmond';

        reset_btn.style.background = 'white';
        reset_btn.style.color = 'white';
    }
}