  
const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/players`
const main = document.querySelector("main");

document.addEventListener("DOMContentLoaded", function() {
    gettoDaze();
});

function gettoDaze() {
    fetch(PLAYERS_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        for (let player of json) {
            playerCard(player);
        };
    });
};

function playerCard(player) {
    let div = document.createElement("div");
        div.classList.add("card");
        div.setAttribute("data-id", player.id);
    let p = document.createElement("p");
        p.textContent = player.name;
    let ul = document.createElement("ul");
    for (let character of player.characters) {
        let li = document.createElement("li");
            li.textContent = `${character.name} ~ ${character.x_ancestry} ${character.x_class}`;
        ul.appendChild(li);    
    };
    div.appendChild(p);  
    div.appendChild(ul);
    main.appendChild(div);
};