const imgchooseyou = document.querySelector('#imgPokemon');
const audioPokemon = document.querySelector('#audiopokemon');
const nomePokemon = document.querySelector('#nomePokemon');
const numeroPokemon = document.querySelector('#numeroPokemon');
const botao1 = document.querySelector('#btn1');
const botao2 = document.querySelector('#btn2');
const pesoPokemon = document.querySelector('#pesoPokemon');
const alturaPokemon = document.querySelector('#alturaPokemon');
const form = document.querySelector('.form-busca');
const inputName = document.querySelector('#inputName');
const tipo1 = document.querySelector('#tipo1');
const tipo2 = document.querySelector('#tipo2');

let idPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const showPokemon = async (pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    idPokemon = dataPokemon.id;
    imgchooseyou.src = dataPokemon.sprites.front_default;
    nomePokemon.innerHTML = dataPokemon.name;
    numeroPokemon.innerHTML = dataPokemon.id;
    pesoPokemon.innerHTML = dataPokemon.weight;
    alturaPokemon.innerHTML = dataPokemon.height;
    audioPokemon.src = dataPokemon.cries.latest;
    tipo1.innerHTML = dataPokemon.types[0].type.name;
    if (dataPokemon.types.length > 1) {
        tipo2.innerHTML = dataPokemon.types[1].type.name;
    } else
        tipo2.innerHTML = '';
}

botao1.addEventListener("click", () => {
    if (idPokemon > 1) {
        idPokemon -= 1;
        showPokemon(idPokemon);
    }

})

botao2.addEventListener("click", () => {
    idPokemon += 1;
    showPokemon(idPokemon);
})

inputName.addEventListener("input", () => {
    idPokemon = toString(inputName.value);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    showPokemon(inputName.value.toLowerCase());
})

showPokemon(idPokemon);