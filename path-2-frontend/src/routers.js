function deleteCharacter(character_id) {
    let char = new Character({id: character_id})
    char.destroyCharacter()
};

let clickCharacter = () => {
    let char = new Character({
        name: document.getElementById("new-character").value,
        x_ancestry: document.getElementById("new-character-ancestry").value,
        x_background: document.getElementById("new-character-background").value,
        x_class: document.getElementById("new-character-class").value,
        player: document.getElementById("new-character-player").value
    });

    char.addCharacter();
};

