class Player {

    constructor(player) {
        this.player = player;
    };

    playerCard() {
        let div = document.createElement("div");
            div.classList.add("player");
            div.classList.add(`${this.player.id}`);
            
        let p = document.createElement("p");
            p.textContent = this.player.name;
            div.appendChild(p);
    
        let ul = document.createElement("ul");
            div.appendChild(ul);
    
        for (let character of this.player.characters) {
            let char = new Character(character);
            char.characterCard(ul);
        };
    
        main.appendChild(div);
    };

};