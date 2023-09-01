/*
Etch a sketch program

set variable gridSize = 16

function createGrid(gridSize)
    set variables currentHeight and currentWidth equal to 0
    loop equal to number of gridSize times add to current height
        loop through the gridsize equal to width minus one times, add to current width
            set variable to createDiv(currentHeight, CurrentWidth)
            make the div not have a new line
        set variable to createDiv(currentHeight, CurrentWidth)
        Div should create new line on next element
        

function createDiv(currentHeight, currentWidth):
    divElement  = create div element
    and set id of the div to "height-" + currentHeight + "-width-" + currentWidth
    append divElement to grid
    add event when mouse is hovered over div to change the background color from white to black
    return divElement

add button to top of screen that will send the user a popup asking for the number of squares per side of the new grid


button = select create-grid button from dom
add a click event to button that prompts user for to input one number for the new grid size
    IF input number is an integer between 1 and 100
        return an error and prompt user again for input
    ELSE
        run function to remove current grid
        run function to create new grid and pass it the input number

function removeGrid
    remove all divs that are a child of #grid-container


*/


let gridsize = 16;
const gridContainer = document.querySelector('#grid-container');

function createGrid(gridsize) {
    let currentHeight = 0;
    let currentWidth = 0;
    for (currentHeight = 0; currentHeight <= gridsize - 1; currentHeight++) {
        createRowContainer(currentHeight);
        for (currentWidth = 0; currentWidth <= gridsize -1; currentWidth++) {
            createDiv(currentHeight, currentWidth);
            // div not have new line
        }
    }
}

function createDiv(currentHeight, currentWidth) {
    divElement = document.createElement('div');
    const idString = "height-" + currentHeight + "-width-" + currentWidth;
    divElement.setAttribute('id', idString);
    // divElement.addEventListener('mouseover', (e) => )  //add change color function
    const rowContainer = document.querySelector(`#row-${currentHeight}`);
    rowContainer.appendChild(divElement);
    return divElement;
}

function createRowContainer(currentHeight) {
    rowElement = document.createElement('div');
    const currentHeightStr = "row-" + currentHeight;
    rowElement.setAttribute('id', currentHeightStr);
    rowElement.setAttribute('class', 'row-container');
    gridContainer.appendChild(rowElement);
}

createGrid(gridsize);