// Select color input
// Select size input

//create variables for height, width and color
var height, width, color;
// Add an event listener to listen for submit
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault()
    height = document.querySelector("#inputHeight").value;
    width = document.querySelector("#inputWidth").value;
    makeGrid(height,width)
    

})

// When size is submitted by the user, call makeGrid()

function makeGrid(x,y) {
  document.querySelector('#pixelCanvas').innerHTML = '';
 // Your code goes here!
   for(var i = 1; i<=x; i++){
       document.querySelector('#pixelCanvas').innerHTML += `<tr id='table-${i}'></tr>`
       for(var j = 1; j<=y; j++)
       document.querySelector(`#table-${i}`).innerHTML += `<td class='cell'></td>`
   }
   
   

    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
   
}


