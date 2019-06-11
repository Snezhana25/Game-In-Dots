let pointgame = document.querySelector('.point-game');
let list = document.querySelector('.list');

let play = document.querySelector('.btn');
let gamer = document.querySelector('.name').value.trim();


document.addEventListener("DOMContentLoaded", initGame);

// play.addEventListener('click', createListobj);

function createListobj() {
    let settingsGame = "http://starnavi-frontend-test-task.herokuapp.com/game-settings";

    return fetch(settingsGame)
        .then((r) => {
            return r.json()
        })
        .then((r) => {
            console.log('fetch ok', r);
            listgame(r);
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
        });

}

const board = [];
const boardWidth = 10, boardHeight = 5;

function initGame() {
    const boardElement = document.querySelector('.board');

    for (var y = 0; y < boardHeight; ++y) {
        var row = [];
        for (var x = 0; x < boardWidth; ++x) {
            var cell = {};

            // Create a <div></div> and store it in the cell object
            cell.element = document.createElement('div');

            // Add it to the board
            boardElement.appendChild(cell.element);

            // Add to list of all
            row.push(cell);
        }

        // Add this row to the board
        board.push(row);
    }
}

// for(var r = 0; r <= 10; r++) {
//     var x = document.getElementById('myTable').insertRow(r);
//
//     for(var c = 0;c <= 10; c++) {
//         var y = x.insertCell(c);
//         y.innerHTML= r + c;
//     }
//
// }

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
        console.log('index',index);
        console.log('arr[index]', arr[index]);
        console.log('name', name);
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

