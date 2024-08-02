const imgchooseyou = document.querySelector('#imgPokemon');
const audioPokemon = document.querySelector('#audiopokemon');
const nomePokemon = document.querySelector('#nomePokemon');
const numeroPokemon = document.querySelector('#numeroPokemon');
const botao1 = document.querySelector('#btn1');
const botao2 = document.querySelector('#btn2');
const pesoPokemon = document.querySelector('#pesoPokemon');
const alturaPokemon = document.querySelector('#alturaPokemon');
const tipoPokemon = document.querySelector('#tipoPokemon')
const habilidadePokemon = document.querySelector('#habilidadePokemon')


const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const showPokemon = async (pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    imgchooseyou.src = dataPokemon.sprites.front_default;
    nomePokemon.innerHTML = dataPokemon.name;
    numeroPokemon.innerHTML = dataPokemon.id;
    pesoPokemon.innerHTML = dataPokemon.weight;
    alturaPokemon.innerHTML = dataPokemon.height;
    tipoPokemon.innerHTML = dataPokemon.types[0].type.name;
    audioPokemon.src = dataPokemon.cries.latest;
}

botao1.addEventListener("click", () => {
    showPokemon('2');
})

botao2.addEventListener("click", () => {
    showPokemon('25');
})

showPokemon('2')