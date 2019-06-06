let pointgame = document.querySelector('.point-game');
let list = document.querySelector('.list');
let play = document.querySelector('.btn');
let gamer = document.querySelector('.name').value.trim();

document.addEventListener("DOMContentLoaded", createListobj);

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

function listgame(obj) {
    let arr = Object.keys(obj).map((k) => obj[k]);
    console.log("result", arr);

    arr.map( (name) => {
        let li = document.createElement('li');
        list.appendChild(li);
        li.innerHTML += name;
    });
}

// function toggle ul list
list.classList.add('collapsed');

function mainNavToggle() {
    list.classList.toggle('collapsed');
}

pointgame.addEventListener('click', mainNavToggle);
