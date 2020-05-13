const cantrip = "prestidigitation"

level += 5

function characterCard(character) {

    let button = document.createElement("button");
        button.textContent = "delete";
        button.setAttribute("onclick", `destroyCharacter(${character.id})`);

    let li = document.createElement("li");
        li.textContent = `${character.name} ~ ${character.x_ancestry} ${character.x_class}`;
        li.classList.add("character");
        li.classList.add(`${character.id}`);
        li.appendChild(button);

    let ul = document.getElementsByClassName(`player ${character.player_id}`)[0].getElementsByTagName("ul")[0];
        ul.appendChild(li);

};