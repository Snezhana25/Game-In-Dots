const defaultmode = 'easyMode';

let pointgame = document.querySelector('.point-game');
let list = document.querySelector('.list');

let board = document.querySelector('.board');
let r = 5; // Add it to the board

let play = document.querySelector('.btn');
let gamer = document.querySelector('.name').value.trim();

document.addEventListener("DOMContentLoaded", createListobj);

// play.addEventListener('click', createListobj);

function louder() {

}

function createListobj() {
    let settingsGame = "http://starnavi-frontend-test-task.herokuapp.com/game-settings";

    return fetch(settingsGame)
        .then((r) => {
            return r.json()
        })
        .then((r) => {
            console.log('fetch ok', r);
            listgame(r);
            initGame(r[defaultmode].field); // Draw game board
            levelsteps(r[defaultmode].delay);

        })
        .catch((error) => {
            console.log(JSON.stringify(error));
        });

}

function listgame(obj) {
    console.log("obj", obj);
    let ul = document.createElement('ul');
    ul.setAttribute('class', 'list');
    document.querySelector('.renderList').appendChild(ul);

    Object.keys(obj).map((name, index, arr) => {
        let li = document.createElement('li');
        li.setAttribute('class', 'item');
        ul.appendChild(li);
        li.innerHTML += name;
    });

    ul.classList.add('collapsed');

    function mainNavToggle() {
        ul.classList.toggle('collapsed');
    }

    pointgame.addEventListener('click', mainNavToggle);

    let item = document.querySelectorAll('.item');
    item.forEach((elem) => {
        elem.addEventListener('click', () => {
            elem.classList.toggle('active');
        });
    });
}


function initGame(size) {
    console.log('size', size);
    for (let i = 0; i < size; i++) {
        var row = document.createElement("div");
        row.className = "row";

        for (let c = 1; c <= size; c++) {
            var cell = document.createElement("div");
            cell.className = "gridsquare";
            cell.innerText = (i * size) + c;
            row.appendChild(cell);
        }

        board.appendChild(row);
    }

    // startGame();
}

function levelsteps(delay) {
    console.log('delay',delay);
}

// function startGame() {
//     // Start the game loop (it will call itself with timeout)
//     gameLoop();
// }

// function gameLoop() {
//     // Loop over the entire board, and update every cell
//     for (let y = 0; y < r; ++y) {
//         for (let x = 0; x < r; ++x) {
//             let res = board[y][x];
//
//             if (res.snake) {
//                 res.element.className = 'snake';
//             }
//             else {
//                 res.element.className = '';
//             }
//         }
//     }
//
//     // This function calls itself, with a timeout of 1000 milliseconds
//     setTimeout(gameLoop, 1000);
// }

