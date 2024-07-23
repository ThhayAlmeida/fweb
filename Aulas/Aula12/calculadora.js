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

function updateText() {
    document.querySelector('#display').value = textValue;
}

function calculate() {
    textValue = eval(textValue);
    updateText();
}

