var tttgrid=[[0,0,0],[0,0,0],[0,0,0]]
var x=true
var unlocked=true
const title=document.getElementById("title")
const reset=document.getElementById("resetButton")
// grid:
// 0 -> empty
// 1 -> x
// 2 -> o
function gameover(){
    for (let row of tttgrid) {
        for (let cell of row) {
            if (cell == 0) {
                return false;
            }
        }
    }
    return true;
}

function checkVictory(){
    // Check each row
    for (let row of tttgrid){
        if ((row[0] != 0) && (row[0] == row[1]) && (row[1] == row[2])){
            return row[0];
        }
    }
    // Check each column
    for (let col = 0; col < 3; col++){
        if ((tttgrid[0][col] != 0) && (tttgrid[0][col] == tttgrid[1][col]) && (tttgrid[1][col] == tttgrid[2][col])){
            return tttgrid[0][col];
        }
    }
    // Check each diagonal
    if ((tttgrid[0][0] != 0) && (tttgrid[0][0] == tttgrid[1][1]) && (tttgrid[1][1] == tttgrid[2][2])){
        return tttgrid[0][0];
    }
    if ((tttgrid[0][2] != 0) && (tttgrid[0][2] == tttgrid[1][1]) && (tttgrid[1][1] == tttgrid[2][0])){
        return tttgrid[0][2];
    }
    return 0;
}

function initializeGame(){
    document.querySelectorAll('.select-button').forEach(button => {
        button.classList.remove('x_active')
        button.classList.remove('o_active')
        button.innerHTML="<span></span>"
        button.style.color="#eeefef"
    });
    title.innerHTML="<span>Choose your next move (X Turn)</span>"
    tttgrid=[[0,0,0],[0,0,0],[0,0,0]]
    x=true
    unlocked=true
}

reset.addEventListener('click', initializeGame)

document.querySelectorAll('.select-button').forEach(button => {
    button.addEventListener('click', (event) => {
        if (unlocked) {
            var col = event.currentTarget.id % 3
            var row = (event.currentTarget.id - col) / 3
            if (tttgrid[row][col] == 0){
                if (x) {
                    x=false
                    title.innerHTML="<span>Choose your next move (O Turn)</span>"
                    tttgrid[row][col] = 1
                    event.currentTarget.classList.add('x_active')
                    event.currentTarget.innerHTML="<span>X</span>"  
                    event.currentTarget.style.color="black"
                } else {
                    x=true
                    title.innerHTML="<span>Choose your next move (X Turn)</span>"
                    tttgrid[row][col] = 2
                    event.currentTarget.classList.add('o_active')
                    event.currentTarget.innerHTML="<span>O</span>"
                    event.currentTarget.style.color="black"
                }
            }
            var victory = checkVictory()
            if (victory == 1) {
                title.innerHTML="<span>Game Over: X wins!</span>"
                unlocked=false
            }
            if (victory == 2) {
                title.innerHTML="<span>Game Over: O wins!</span>"
                unlocked=false
            }
            var dead = gameover()
            if ((dead) && (victory == 0)) {
                title.innerHTML="<span>Game Over: Tie!</span>"
                unlocked=false
            }
        }
    });
});