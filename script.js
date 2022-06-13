const gridBox = document.querySelector(".grid");
const gridSlider = document.querySelector("#gridSlider");
const gridLabel = document.querySelector(".gridLabel");
let gridSize = Number(gridSlider.value);

gridSlider.addEventListener("input", function(){
    reset();

    const rows = document.querySelectorAll(".row");
    const newSize = Number(gridSlider.value);

    if (gridSize < newSize){
        let i, j;

        //add boxes to already existing rows.
        for (i = 0; i < gridSize; i++){
            for(j = 0; j < (newSize - gridSize); j++){
                const box = document.createElement("div");
                box.classList.add("box");
                box.addEventListener("mouseover", function(e){
                    if (e.buttons == 1) box.style.backgroundColor = color;
                });
                rows[i].appendChild(box);
            }
        }
        grid((newSize - gridSize), newSize);
    }

    if (gridSize > newSize){
        let i, j;

        for (i = 0; i < (gridSize - newSize); i++){
            gridBox.removeChild(gridBox.firstElementChild);
        }

        for (i = 0; i < rows.length; i++){
            for (j = 0; j < (gridSize - newSize); j++){
                rows[i].removeChild(rows[i].firstElementChild);
            }
        }
    }

    gridSize = newSize;
    gridLabel.textContent = `${gridSize} x ${gridSize}`;
});

function reset(){
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(div => div.style.backgroundColor = "white");
}

const resetButton = document.querySelector(".resetButton");

resetButton.addEventListener("click", () => reset());

const colorPicker = document.querySelector("#colorPicker");
const colorLabel = document.querySelector(".colorLabel");
let color = colorPicker.value;

colorPicker.addEventListener("input", function(){
    color = colorPicker.value;
    colorLabel.textContent = color;
});

function grid(rows, boxes){
    let i, j;

    for (i = 0; i < rows; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        gridBox.appendChild(row);

        for (j = 0; j < boxes; j++){
            const box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener("mouseover", function(e){
                if (e.buttons == 1) box.style.backgroundColor = color;
            });
            row.appendChild(box);
        }
    }

}

grid(gridSize, gridSize);