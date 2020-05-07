  
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

// returns navArr as an array of html documents

let heroUrl = 'https://cors-anywhere.herokuapp.com/'
const ancestriesUrl = "https://2e.aonprd.com/Ancestries.aspx"
const backgroundsUrl = "https://2e.aonprd.com/Backgrounds.aspx"
const classesUrl = "https://2e.aonprd.com/Classes.aspx"

let dommer = (proxyUrl, targetUrl, myFunc1, myFunc2, list) => {
    fetch(proxyUrl+targetUrl).then(blob => blob.text()).then(function (html) {
        const parser = new DOMParser();
        let doc = parser.parseFromString(html, 'text/html');
        myFunc1(list, myFunc2(doc));
    });
}

let listFiller = (list, source) => {
  for (const part of source) {
      list[part.innerText] = part.getAttribute("href");
  };
}

let anceFunc = (myDom) => Array.from(myDom.getElementsByTagName("h2")).filter(heading => heading.className === "title").map(race => race.getElementsByTagName("a")[race.getElementsByTagName("a").length-1]);
let backFunc = (myDom) => Array.from(myDom.getElementsByTagName("h1")).filter(heading => heading.className === "title").map(x => x.getElementsByTagName("a")[1]).filter(x => !!x);
let clasFunc = (myDom) => Array.from(myDom.getElementsByTagName("h1")[1].getElementsByTagName("a")).filter(link => link.href.includes("?ID"));

let ancestries = {};
let backgrounds = {};
let classes = {};

dommer(heroUrl, ancestriesUrl, listFiller, anceFunc, ancestries);
dommer(heroUrl, backgroundsUrl, listFiller, backFunc, backgrounds);
dommer(heroUrl, classesUrl, listFiller, clasFunc, classes);

// --------------------------------------------------

let newPlayer = document.getElementById("new-player");

let spitter = () => addPlayer(newPlayer.value)

function addPlayer(name) {
    let formData = {
        name: name
    };
       
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    fetch("http://localhost:3000/players", configObj)
    .then(function(response) {
        fetch(PLAYERS_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            playerCard(json[json.length-1])
        });
    })

};