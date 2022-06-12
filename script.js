const gridBox = document.querySelector(".grid");
const colorPicker = document.querySelector(".colorPicker");
let color;

colorPicker.addEventListener("input", function(){
    color = colorPicker.value;
});

function changeColor(box){
    box.style.backgroundColor = color;
}

function grid(size){
    let i;
    let j;

    for (i = 0; i < size; i++){
        const row = document.createElement("div");

        row.classList.add("row");

        gridBox.appendChild(row);

        for (j = 0; j < size; j++){
            const box = document.createElement("div");

            box.classList.add("box");

            box.addEventListener("click", () => changeColor(box));

            row.appendChild(box);
        }
    }

}




grid(16);