const box = document.querySelectorAll('.box');
console.log(box.length);

box[0].style.backgroundImage = "url('blue-circle.png')";
box[0].style.backgroundSize = "contain";
box[0].style.backgroundRepeat = "no-repeat";
box[0].style.backgroundPosition = "center";

box[1].style.backgroundImage = "url('red-x.png')";
box[1].style.backgroundSize = "contain";
box[1].style.backgroundRepeat = "no-repeat";
box[1].style.backgroundPosition = "center";

function winPresent(board) {
    if (board[1] === 1 && board[2] === 1 && board[3] === 1) {
        return true;
    }
    if (board[4] === 1 && board[5] === 1 && board[6] === 1) {
        return true;
    }
    if (board[7] === 1 && board[8] === 1 && board[9] === 1) {
        return true;
    }
    if (board[1] === 1 && board[4] === 1 && board[7] === 1) {
        return true;
    }
    if (board[2] === 1 && board[5] === 1 && board[8] === 1) {
        return true;
    }
    if (board[3] === 1 && board[6] === 1 && board[9] === 1) {
        return true;
    }
    if (board[1] === 1 && board[5] === 1 && board[9] === 1) {
        return true;
    }
    if (board[3] === 1 && board[5] === 1 && board[7] === 1) {
        return true;
    }
    return false;
}