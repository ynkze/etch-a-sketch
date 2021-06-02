//create grid inside div named container
const container = document.querySelector(".grid-container");
function createGrid(size) {
    for (let i=0;i<(size*size);i++){
        let col = document.createElement("div");
        col.classList.add("grid-item");
        container.appendChild(col);
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    }
}

createGrid(16);

//set up color and hover effect
function hoverEffect(color) {
    let grids = document.querySelectorAll(".grid-item");
    let gridsArr =  Array.from(grids);
    gridsArr.forEach(element =>
        element.addEventListener("mouseover", ()=>{
            element.style.backgroundColor = color;
        }));
}

hoverEffect("black");

//buttons declaration
const resetBtn = document.querySelector("#reset");
const newBtn = document.querySelector("#new");
const randomBtn = document.querySelector("#random");
const colorBtn = document.querySelector("#changeColor");
const eraseBtn = document.querySelector("#erase");

//reset
resetBtn.addEventListener("click", ()=>{
    container.querySelectorAll('.grid-item').forEach(element =>
        element.style.backgroundColor = "white");
    hoverEffect("black");
});

//new grid;
newBtn.addEventListener("click", ()=>{
    let gridSize=prompt("Input the number of grids you want (max 64)");
    if (gridSize>64){
        alert("Too big! Try a smaller size.");
        gridSize=16;
    }
    if (isNaN(gridSize)|| gridSize.length===0){
        gridSize=16;
        alert("Invalid number")
    }
    container.querySelectorAll('.grid-item').forEach(e => e.remove()); // remove all grids,create grid again, initialize hover effect
    createGrid(gridSize);
    hoverEffect("black");
});

//random
randomBtn.addEventListener("click", ()=>{
    let grids = document.querySelectorAll(".grid-item");
    let gridsArr =  Array.from(grids);
    gridsArr.forEach(element =>
        element.addEventListener("mouseover", ()=>{
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            element.style.backgroundColor = "#"+randomColor;
        }))
});

//change color
colorBtn.addEventListener("click", ()=>{
    let colorChoice = prompt("Input color you want (hex code or name)");
    colorChoice.toString().toLowerCase();
    hoverEffect(colorChoice);
});


//erase
eraseBtn.addEventListener("click", ()=>{
    hoverEffect("white");
});