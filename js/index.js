//Variavel da troca de imagem//
var banners = ["./img/download.png", "./img/book2.png"]

var bannerAtual = 0;

//Função para fazer a troca da imagem//
function trocaBanner() {
    bannerAtual = (bannerAtual + 1) %2;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}

//Tempo para trocar a imagem, está em milisegundos//
setInterval(trocaBanner, 3000);

//Variavel da musica//
const audioP = document.querySelector('#audioplayer');

//Variavel para ajustar o volume da musica//
const InputRange = document.querySelector('#input-range');

const buttonPlay = document.querySelector('#Play');

//Variavel para dar play na musica//
InputRange.addEventListener("input", () =>{
    audioP.volume = InputRange.value;});

//botão para clicar e tocar a musica//
buttonPlay.addEventListener("click", () => {
    audioP.play();
})
