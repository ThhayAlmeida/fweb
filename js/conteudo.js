//Função para fazer a pesquisa//

function validaBusca() {
    if (document.querySelector('#inputlupa').value == '') {
        alert("Não podia ter deixado em branco a busca!");
        return false;
    }
}

//Está chamando a função para validar a busca//
document.querySelector('#form-busca').onsubmit = validaBusca;