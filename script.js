const body = document.querySelector("body");
body.style.display = 'flex';
body.style.justifyContent = 'center';

const container = document.querySelector(".container");
container.style.cssText = "display: flex; flex-direction: column; height: 960px; width: 960px;"

function drawBoxes() {
    //  create 16 rows 
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.className = "row";
        row.setAttribute('style', 
        "display: flex; flex: 1 1 0")

        // for each row create 16 boxes
        for (let j = 0; j < 16; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.cssText = "box-sizing: box-content; border: 1px solid black; flex: 1 1 0";
            
            // code to make boxes turn blue upon hover
            box.addEventListener('mouseover', e => box.style['background-color'] = 'skyblue');

            row.appendChild(box);
        }

        container.appendChild(row);
    }
}


drawBoxes();
