let arrayCharacters;
function getCharacters() {
    fetch("https://rickandmortyapi.com/api/character/?page=19", {
        method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
        arrayCharacters = data.results;
        appendData(arrayCharacters);
    })
    .catch((error) => {
        console.error("Erro", error);
    });
}
function appendData(characters) {
    let place = document.querySelector("#data-output");
    let output = "";

    for (let character of characters) {
        output += `
            <tr>
                <td><img src="${character.image}" alt="${character.name}" width="50" height="50"></td>
                <td>${character.name}</td>
                <td>${character.status}</td>
                <td>${character.species}${character.type ? ` - ${character.type}` : ''}</td>
                <td>${character.origin.name}</td>
                <td>${character.location.name}</td>
            </tr>
        `;
    }
    place.innerHTML = output;
}
getCharacters();