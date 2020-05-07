const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/players`
const main = document.querySelector("main");

// -----

// returns navArr as an array of html documents

let heroUrl = 'https://cors-anywhere.herokuapp.com/'
const ancestriesUrl = "https://2e.aonprd.com/Ancestries.aspx"
const backgroundsUrl = "https://2e.aonprd.com/Backgrounds.aspx"
const classesUrl = "https://2e.aonprd.com/Classes.aspx"

let navArr = [];

let dommer = (myArr, proxyUrl, targetUrl) => {
    fetch(proxyUrl+targetUrl).then(blob => blob.text()).then(function (html) {
        const parser = new DOMParser();
        let doc = parser.parseFromString(html, 'text/html');
        myArr.push(doc);
        
    });
}

dommer(navArr, heroUrl, ancestriesUrl);
dommer(navArr, heroUrl, backgroundsUrl);
dommer(navArr, heroUrl, classesUrl);

// --------------------------------------------------

// returns ancestries as a dict of ancestry names pointing to links

let ancestries = {};

let ances = Array.from(navArr[0].getElementsByTagName("h2")).filter(heading => heading.className === "title").map(race => race.getElementsByTagName("a")[race.getElementsByTagName("a").length-1]);

for (const ance of ances) {
    ancestries[ance.innerText] = ance.getAttribute("href");
};

// --------------------------------------------------

// returns backgrounds as a dict of background names pointing to links

let backs = Array.from(navArr[1].getElementsByTagName("h1")).filter(heading => heading.className === "title").map(x => x.getElementsByTagName("a")[1]).filter(x => !!x);

let backgrounds = {};

for (const back of backs) {
    backgrounds[back.innerText] = back.getAttribute("href");
};

// --------------------------------------------------

// returns classes as a dict of class names pointing to links

let clases = Array.from(navArr[2].getElementsByTagName("h1")[1].getElementsByTagName("a")).filter(link => link.href.includes("?ID"));

let classes = {};

for (const clas of clases) {
    classes[clas.innerText] = clas.getAttribute("href");
};

// --------------------------------------------------

// sends create request to backend

function addPokemon() {
    console.log("Suc");
    let formData = {
        trainer_id: this.getAttribute("data-trainer-id")
    };
       
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    
    let trainerCard = this.parentElement;

    fetch("http://localhost:3000/pokemons", configObj)
    .then(function(response) {
        addPokeLine(trainerCard.getAttribute("data-id"));
    })

};