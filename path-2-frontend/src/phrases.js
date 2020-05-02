
// returns a ances as a dict of ancestry names pointing to links
let ancestries = Array.from(document.getElementsByTagName("h2")).filter(heading => heading.className === "title").map(race => race.getElementsByTagName("a")[race.getElementsByTagName("a").length-1])

let ances = {}

for (const ance of ancestries) {
    ances[ance.innerText] = ance.getAttribute("href");
}