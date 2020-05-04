// returns myArr as an array of html documents

const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
let targetUrl = "https://2e.aonprd.com/Classes.aspx"

let myArr = [];
fetch(proxyUrl+targetUrl).then(blob => blob.text()).then(function (html) {
	const parser = new DOMParser();
	let doc = parser.parseFromString(html, 'text/html');
    myArr.push(doc);
});

// --------------------------------------------------

// returns ancestries as a dict of ancestry names pointing to links

let ances = Array.from(document.getElementsByTagName("h2")).filter(heading => heading.className === "title").map(race => race.getElementsByTagName("a")[race.getElementsByTagName("a").length-1]);

let ancestries = {};

for (const ance of ances) {
    ancestries[ance.innerText] = ance.getAttribute("href");
};

// --------------------------------------------------

// returns backgrounds as a dict of background names pointing to links

let backs = Array.from(document.getElementsByTagName("h1")).filter(heading => heading.className === "title").map(x => x.getElementsByTagName("a")[1]).filter(x => !!x);

let backgrounds = {};

for (const back of backs) {
    backgrounds[back.innerText] = back.getAttribute("href");
};

// --------------------------------------------------

// returns classes as a dict of class names pointing to links

let clases = Array.from(document.getElementsByTagName("h1")[1].getElementsByTagName("a")).filter(link => link.href.includes("?ID"));

let classes = {};

for (const clas of clases) {
    classes[clas.innerText] = clas.getAttribute("href");
};

// --------------------------------------------------