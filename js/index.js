var banners = ["./img/download.png", "./img/book2.png"]

var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) %2;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}

setInterval(trocaBanner, 3000);

const audioP = document.querySelector('#audioplayer');

const InputRange = document.querySelector('#input-range');

const buttonPlay = document.querySelector('#Play');

InputRange.addEventListener("input", () =>{
    audioP.volume = InputRange.value;});

buttonPlay.addEventListener("click", () => {
    audioP.play();
})
