let textValue = '';

function addNumber(addNumber){
    textValue += addNumber;
    updateText();
}

function addOperator(Operador){
    textValue += Operador;
    updateText();
}

function addDecimal(){
    textValue += '.';
    updateText();
}

function clearText() {
    textValue = '';
    updateText();
}

function delTex(){
    textValue = textValue.substring(0,textValue.length - 1)
    updateText();
}

function updateText() {
    document.querySelector('#display').value = textValue;
}

function calculate() {
    textValue = eval(textValue);
    updateText();
}