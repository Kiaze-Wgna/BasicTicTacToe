var tttgrid=[[0,0,0],[0,0,0],[0,0,0]]
var x=true
const title=document.getElementById("title")
// grid:
// 0 -> empty
// 1 -> x
// 2 -> o
document.querySelectorAll('.select-button').forEach(button => {
    button.addEventListener('click', (event) => {
        var col = event.currentTarget.id % 3
        var row = (event.currentTarget.id - col) / 3
        console.log([row,col])
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
    });
});