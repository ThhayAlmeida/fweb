function validaBusca() {
    if (document.querySelector('#inputlupa').value == '') {
        alert("Não podia ter deixado em branco a busca!");
        return false;
    }
}

document.querySelector('#form-busca').onsubmit = validaBusca;