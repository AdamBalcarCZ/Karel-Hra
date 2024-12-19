const boardSize = 10;
const gameBoard = document.getElementById("game-board");
let karelPosition = { x: 0, y: 0 };
let karelDirection = 0; 
let lastCommands = []; 

const directionArrows = ["→", "↓", "←", "↑"];

function initializeBoard() {
    gameBoard.innerHTML = "";
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.x = j;
            cell.dataset.y = i;
            gameBoard.appendChild(cell);
        }
    }
    renderKarel();
}

function renderKarel() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.classList.remove("karel");
        cell.textContent = "";
    });

    const currentCell = document.querySelector(
        `.cell[data-x="${karelPosition.x}"][data-y="${karelPosition.y}"]`
    );

    if (currentCell) {
        currentCell.classList.add("karel");
        currentCell.textContent = directionArrows[karelDirection];
    }
}
function executeCommands() {
    const commands = document.getElementById("commands").value.trim().split("\n");
    lastCommands = commands; 
    commands.forEach(command => {
        const parts = command.split(" ");
        const action = parts[0].toUpperCase();
        const param = parts[1] ? parseInt(parts[1]) : undefined;

        switch (action) {
            case "RESET":
                karelPosition = { x: 0, y: 0 };
                karelDirection = 0;
                break;
            case "KROK":
                moveKarel(param || 1);
                break;
            case "VLEVOBOK":
                rotateKarel(param || 1);
                break;
            case "POLOZ":
                placeItem(parts[1]);
                break;
            default:
                console.error(`Neznámý příkaz: ${action}`);
        }
    });
    renderKarel();
}


function repeatCommands() {
    if (lastCommands.length === 0) {
        alert("Žádné uložené příkazy nejsou k dispozici.");
        return;
    }

    lastCommands.forEach(command => {
        const parts = command.split(" ");
        const action = parts[0].toUpperCase();
        const param = parts[1];

        switch (action) {
            case "RESET":
                karelPosition = { x: 0, y: 0 };
                karelDirection = 0;
                break;
            case "KROK":
                moveKarel(parseInt(param) || 1);
                break;
            case "VLEVOBOK":
                rotateKarel(parseInt(param) || 1);
                break;
            case "POLOZ":
                placeItem(param);
                break;
            default:
                console.error(`Neznámý příkaz: ${action}`);
        }
    });
    renderKarel();
}


function moveKarel(steps) {
    for (let i = 0; i < steps; i++) {
        switch (karelDirection) {
            case 0: 
                karelPosition.x = Math.min(boardSize - 1, karelPosition.x + 1);
                break;
            case 1: 
                karelPosition.y = Math.min(boardSize - 1, karelPosition.y + 1);
                break;
            case 2: 
                karelPosition.x = Math.max(0, karelPosition.x - 1);
                break;
            case 3: 
                karelPosition.y = Math.max(0, karelPosition.y - 1);
                break;
        }
    }
}

function rotateKarel(turns) {
    karelDirection = (karelDirection + turns) % 4;
}


function placeItem(item) {
    const currentCell = document.querySelector(
        `.cell[data-x="${karelPosition.x}"][data-y="${karelPosition.y}"]`
    );

    if (currentCell) {
        currentCell.textContent = item; 

        
        const color = item.toLowerCase(); 
        if (["modrá", "červená", "zelená"].includes(color)) {
            const colorMap = {
                modrá: "blue",
                červená: "red",
                zelená: "green"
            };
            currentCell.style.backgroundColor = colorMap[color];
        } else {
            currentCell.style.backgroundColor = "yellow";
        }
    }
}


initializeBoard();
