const container = document.querySelector(".container");

function drawBoxes() {
    //  create 16 rows 
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.className = "row";
        row.setAttribute('style', 
        "display: flex; justify-content: center;")

        // for each row create 16 boxes
        for (let j = 0; j < 16; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.cssText = "width: 8vh; height: 8vh; border: 1px solid black";
            
            row.appendChild(box);
        }

        container.appendChild(row);
    }
}

