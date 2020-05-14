class Character {
    constructor(character) {
        this.character = character;
    }
 
    characterCard() {

        console.log("working")

        let button = document.createElement("button");
            button.textContent = "delete";
            button.setAttribute("onclick", `destroyCharacter(${this.character.id})`);
    
        let li = document.createElement("li");
            li.textContent = `${this.character.name} ~ ${this.character.x_ancestry} ${this.character.x_class}`;
            li.classList.add("character");
            li.classList.add(`${this.character.id}`);
            li.appendChild(button);
    
        let ul = document.getElementsByClassName(`player ${this.character.player_id}`)[0].getElementsByTagName("ul")[0];
            ul.appendChild(li);
    
    };
}