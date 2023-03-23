//consumir api
const API_BASE ="https://rickandmortyapi.com/api";
const API_PERSONAJES = "https://rickandmortyapi.com/api/character";
const llamadaApi = fetch(API_PERSONAJES)
llamadaApi
.then((data) => {
    return data.json();
})
.then((data) => {
    const $container = document.getElementById("container-charac")
    const characters = data.results;
    for (let i = 0; i < characters.length; i++) {
        $container.innerHTML += `
        <div class="item-grid">
                <img src="${characters[i].image}" alt="Imagen de Personaje">
                <h3>${characters[i].name}</h3>
                <p>${characters[i].gender}</p>
                <p>${characters[i].species}</p>
                <p>${characters[i].location}</p>
                <p>${characters[i].status}</p>
            </div>
        `;
    }
})