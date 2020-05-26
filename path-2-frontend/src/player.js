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

    addPlayer() {
        let formData = this
           
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

};