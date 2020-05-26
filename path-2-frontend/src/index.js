  
const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/players`
const main = document.querySelector("main");

// let ancestries = {};
// let backgrounds = {};
// let classes = {};

let ancestries = ["Dwarf", "Elf", "Gnome", "Goblin", "Halfling", "Human"];
let backgrounds = ["Acolyte", "Acrobat", "Animal Whisperer", "Artisan", "Artist", "Barkeep", "Barrister", "Bounty Hunter", "Charlatan", "Criminal", "Detective", "Emissary", "Entertainer", "Farmhand", "Field Medic", "Fortune Teller", "Gambler", "Gladiator", "Guard", "Herbalist", "Hermit", "Hunter", "Laborer", "Martial Disciple", "Merchant", "Miner", "Noble", "Nomad", "Prisoner", "Raised by Belief", "Sailor", "Scholar", "Scout", "Street Urchin", "Tinker", "Warrior"];
let classes = ["Alchemist", "Barbarian", "Bard", "Champion", "Cleric", "Druid", "Fighter", "Monk", "Ranger", "Rogue", "Sorcerer", "Wizard"]
let players = [];

document.addEventListener("DOMContentLoaded", function() {
    
    gettoDaze(players);

    setTimeout(function(){ 
        populateSelection(players.map(player => player.name), document.getElementById("new-character-player"));
        populateSelection(ancestries, document.getElementById("new-character-ancestry"));
        populateSelection(backgrounds, document.getElementById("new-character-background"));
        populateSelection(classes, document.getElementById("new-character-class"));
    }, 1000);

    // setTimeout(function(){ 
    //     populateSelection(players.map(player => player.name), document.getElementById("new-character-player"));
    //     populateSelection(Object.keys(ancestries), document.getElementById("new-character-ancestry"));
    //     populateSelection(Object.keys(backgrounds), document.getElementById("new-character-background"));
    //     console.log(classes);
    //     populateSelection(Object.keys(classes), document.getElementById("new-character-class"));
    // }, 10000);



});



function gettoDaze(myArr) {
    fetch(PLAYERS_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        for (let player of json) {
            let play = new Player(player)
            play.playerCard();
            myArr.push(play.player);
        };
    });
};

function populateSelection(myArr, myNode) {
    console.log("bea")

    for (const choice of myArr) {
        let option = document.createElement("option");
            option.value = choice;
            option.textContent = choice;
        myNode.appendChild(option);
    };
};

// function destroyCharacter(character_id) {
//     console.log(character_id);
 
//     let formData = {

//     };
       
//     let configObj = {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify(formData)
//     };

//     fetch(`http://localhost:3000/characters/${character_id}`, configObj)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(json) {
//         let sacrifice = document.getElementsByClassName(`character ${json}`)[0];
//         sacrifice.remove();
//     });

// };

// function playerCard(player) {
//     let div = document.createElement("div");
//         div.classList.add("player");
//         div.classList.add(`${player.id}`);
        
//     let p = document.createElement("p");
//         p.textContent = player.name;
//         div.appendChild(p);

//     let ul = document.createElement("ul");
//         div.appendChild(ul);

//     for (let character of player.characters) {
//         let char = new Character(character);
//         char.characterCard(ul);
//     };

//     main.appendChild(div);
// };

// returns ancestries, backgrounds, and classes as dict of option links

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

// dommer(heroUrl, ancestriesUrl, listFiller, anceFunc, ancestries);
// dommer(heroUrl, backgroundsUrl, listFiller, backFunc, backgrounds);
// dommer(heroUrl, classesUrl, listFiller, clasFunc, classes);

// --------------------------------------------------

let newPlayer = document.getElementById("new-player");

let clickPlayer = () => {
    return (newPlayer ? addPlayer(newPlayer.value) : alert("cannot be nameless"));
};

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
        return response.json();
    })
    .then(function(json) {
        if (json.id) {
            let play = new Player(json)
            play.playerCard();
            players.push(play.player);

            let option = document.createElement("option");
                option.value = json.name;
                option.textContent = json.name;
    
            let playerSelect = document.getElementById("new-character-player");
                playerSelect.appendChild(option);

        } else {
            alert(json.some);
        };
    });

};

//

// let newCharacter = document.getElementById("new-character");

// let clickCharacter = () => {
//     addCharacter(newCharacter.value);
// };

const wild = []

function addCharacter(name) {
    let formData = {
        name: name,
        x_ancestry: document.getElementById("new-character-ancestry").value,
        x_background: document.getElementById("new-character-background").value,
        x_class: document.getElementById("new-character-class").value,
        player: document.getElementById("new-character-player").value
    };
       
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    fetch("http://localhost:3000/characters", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        wild.push(json);
        let list = document.getElementsByClassName(`player ${json.player_id}`)[0].getElementsByTagName("ul")[0];
        let char = new Character(json);
        char.characterCard(list);
        // if (json.id) {
        //     playerCard(json);
        //     players.push(json);
        // } else {
        //     alert(json.some);
        // };
    });

};

// function characterCard(character) {

//     let button = document.createElement("button");
//         button.textContent = "delete";
//         button.setAttribute("onclick", `destroyCharacter(${character.id})`);

//     let li = document.createElement("li");
//         li.textContent = `${character.name} ~ ${character.x_ancestry} ${character.x_class}`;
//         li.classList.add("character");
//         li.classList.add(`${character.id}`);
//         li.appendChild(button);

//     let ul = document.getElementsByClassName(`player ${character.player_id}`)[0].getElementsByTagName("ul")[0];
//         ul.appendChild(li);

// };