const gridBox = document.querySelector(".grid");
const gridSlider = document.querySelector("#gridSlider");
const gridLabel = document.querySelector(".gridLabel");
let gridSize = gridSlider.value;

gridSlider.addEventListener("input", function(){
    const rows = document.querySelectorAll(".row");
    //const boxes = document.querySelectorAll(".box");

    if (gridSize < gridSlider.value){
        let i, j;

        //add boxes to already existing rows.
        for (i = 0; i < gridSize; i++){
            for(j = 0; j < (gridSlider.value - gridSize); j++){
                const box = document.createElement("div");
                box.classList.add("box");
                rows[i].appendChild(box);
            }
        }
        
        grid((gridSlider.value - gridSize), gridSlider.value);
    }

    else if (gridSize > gridSlider.value){
        let i, j;

        for (i = 0; i < (gridSize - gridSlider.value); i++){
            gridBox.removeChild(gridBox.firstElementChild);
        }

        for (i = 0; i < gridSlider.value; i++){
            for (j = 0; j < (gridSize - gridSlider.value); j++){
                rows[i].removeChild(rows[i].firstElementChild);
            }
        }
    }

    gridSize = gridSlider.value;
    gridLabel.textContent = `${gridSize} x ${gridSize}`;
});

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

            box.addEventListener("click", () => box.style.backgroundColor = color);

            row.appendChild(box);
        }
    }

}

grid(gridSize, gridSize);