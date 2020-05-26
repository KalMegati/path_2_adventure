class Character {
    constructor(character) {
        this.character = character;
    }
 
    characterCard(list) {

        let button = document.createElement("button");
            button.textContent = "display";
            button.setAttribute("onclick", `displayCharacter(${this.character.id})`);
    
        let li = document.createElement("li");
            li.textContent = `${this.character.name} ~ ${this.character.x_ancestry} ${this.character.x_class}`;
            li.classList.add("character");
            li.classList.add(`${this.character.id}`);
            li.appendChild(button);
    
        list.appendChild(li);
    
    };

    destroyCharacter() {
        console.log(this.character.id);
     
        let formData = {};
           
        let configObj = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        };
    
        fetch(`http://localhost:3000/characters/${this.character.id}`, configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            let sacrifice = document.getElementsByClassName(`character ${json}`)[0];
            sacrifice.remove();
        });
    
    };

    showCharacter() {
           
        let configObj = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
        };

        fetch(`http://localhost:3000/characters/${this.character.id}`, configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json);
            let oldDisplay = document.getElementById("display");
            if (oldDisplay) {oldDisplay.remove()};
            let char = new Character(json);
            const newDisplay = char.characterPlate();
            document.getElementById("right").appendChild(newDisplay);
        });
    
    };

    characterPlate() {
        const newDisplay = document.createElement("div");
        newDisplay.id = "display";

        let name = document.createElement("h1");
            name.textContent = this.character.name;
            newDisplay.appendChild(name);
        
        let x_ancestry = document.createElement("p");
            x_ancestry.textContent = `Ancestry: ${this.character.x_ancestry}`;
            newDisplay.appendChild(x_ancestry);

        let x_background = document.createElement("p");
            x_background.textContent = `Background: ${this.character.x_background}`;
            newDisplay.appendChild(x_background);

        let x_class = document.createElement("p");
            x_class.textContent = `Class: ${this.character.x_class}`;
            newDisplay.appendChild(x_class);

        let player = document.createElement("p");
            player.textContent = `Player: ${this.character.player.name}`;
            newDisplay.appendChild(player);

        let button = document.createElement("button");
            button.textContent = "delete";
            button.setAttribute("onclick", `deleteCharacter(${this.character.id})`);
            newDisplay.appendChild(button);

        return newDisplay;
    }

    addCharacter() {
        let formData = this;
           
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
            let list = document.getElementsByClassName(`player ${json.player_id}`)[0].getElementsByTagName("ul")[0];
            let char = new Character(json);
            char.characterCard(list);
        });
    };

};