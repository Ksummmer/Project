'use strict';

var aaa;

function Calculate() {
    var result;

    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);

    switch (aaa) {
        case '+': 
        result = number1 + number2;
        break;
        case '-': 
        result = number1 - number2;
        break;
        case '*': 
        result = number1 * number2;
        break;
        case '/': 
        result = number1 / number2;
        break;
    }

    document.getElementById("result").innerHTML = result;

}