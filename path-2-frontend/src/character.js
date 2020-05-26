class Character {
    constructor(character) {
        this.character = character;
    }
 
    characterCard(list) {

        let button = document.createElement("button");
            button.textContent = "delete";
            button.setAttribute("onclick", `deleteCharacter(${this.character.id})`);
    
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