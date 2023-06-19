
function drawBoxes(length = 16) {
    //  create 16 rows 
    for (let i = 0; i < length; i++) {
        const row = document.createElement("div");
        row.className = "row";
        row.setAttribute('style', 
        "display: flex; flex: 1 1 0")

        // for each row create 16 boxes
        for (let j = 0; j < length; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.cssText = "box-sizing: box-content; border: 1px solid black; flex: 1 1 0";
            
            // code to make boxes turn blue upon hover
            box.addEventListener('mouseover', e => box.style['background-color'] = randomColor());

            row.appendChild(box);
        }

        container.appendChild(row);
    }
}


const getGridButton = document.querySelector(".set-grids");
getGridButton.addEventListener('click', e => {

    let noOfGrids;

    do {
        noOfGrids = prompt("How many grids do you want per side?\n Note: No. of grids must be in the range of 1-100.");
    } while (noOfGrids > 100 || noOfGrids <= 0 && noOfGrids)

    if (noOfGrids === null) {
        return;
    }

    container.replaceChildren();
    drawBoxes(noOfGrids);
})

const resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', e => {
    const newRows = Array.from(container.childNodes).map(row => {
        const newBoxes = Array.from(row.childNodes).map(node => {
            node.style.backgroundColor = 'white';
            return node;
        });
        row.replaceChildren(...newBoxes);
        return row;
    })
    container.replaceChildren(...newRows);
})

// code reuse from https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
function randomColor() {
    const randomBetween = (min, max) => Math.floor(min + Math.random() * max);
    const r = randomBetween(0, 255);
    const g = randomBetween(0,255);
    const b = randomBetween(0,255); 
    return `rgb(${r},${g},${b})`;
}

const drawspace = document.querySelector(".drawspace");
drawspace.style.display = 'flex';
drawspace.style.justifyContent = 'center';

const container = document.querySelector(".container");
container.style.cssText = "display: flex; flex-direction: column; height: 960px; width: 960px;"

drawBoxes();

 