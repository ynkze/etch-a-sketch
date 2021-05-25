
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

//set up grid and hover effect
function changeColor(e){
    this.style.backgroundColor = "black";
}

function hoverEffect() {
    let grids = document.querySelectorAll(".grid-item");
    let gridsArr =  Array.from(grids);
    gridsArr.forEach(element =>
        element.addEventListener("mouseover", changeColor)
    );
}
hoverEffect();

//buttons declaration
const resetBtn = document.querySelector("#reset");
const newBtn = document.querySelector("#new");

resetBtn.addEventListener("click", ()=>{
    container.querySelectorAll('.grid-item').forEach(element =>
        element.style.backgroundColor = "white");
});

newBtn.addEventListener("click", ()=>{
    let gridSize=prompt("Input the number of grids you want (max 64)");
    if (gridSize>64){
        alert("Too big! Try a smaller size.");
        return;
    }
    container.querySelectorAll('.grid-item').forEach(e => e.remove());
    createGrid(gridSize);
    hoverEffect();
});
