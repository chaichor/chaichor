function Sumar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2) ){
        alert("Por favor, ingresa numeros validos en ambos campos.");
        return;
    }

    let suma = num1 + num2;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La suma es: " + suma;
    resultadoElement.classList.add("mostrar");

    if (suma > 10) {
        resultadoElement.className = "alert alert-success mostrar";
    } else {
        resultadoElement.className = "alert alert-danger mostrar";
    }
}
document.getElementById("calcularBtn").addEventListener("click", Sumar);


function Restar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2) ){
        alert("Por favor, ingresa numeros validos en ambos campos.");
        return;
    }

    let resta = num1 - num2;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La resta es: " + resta;
    resultadoElement.classList.add("mostrar");

    if (resta > 10) {
        resultadoElement.className = "alert alert-success mostrar";
    } else {
        resultadoElement.className = "alert alert-danger mostrar";
    }
}
document.getElementById("btnRestar").addEventListener("click", Restar);



function Multiplicar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2) ){
        alert("Por favor, ingresa numeros validos en ambos campos.");
        return;
    }

    let Multiplicacion = num1 * num2;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La Multiplicacion es: " + Multiplicacion;
    resultadoElement.classList.add("mostrar");

    if (Multiplicacion > 10) {
        resultadoElement.className = "alert alert-success mostrar";
    } else {
        resultadoElement.className = "alert alert-danger mostrar";
    }
}
document.getElementById("btnMultiplicar").addEventListener("click", Multiplicar);

function Dividir() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2) ){
        alert("Por favor, ingresa numeros validos en ambos campos.");
        return;
    }

    let Division = num1 / num2;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La Division es: " + Division;
    resultadoElement.classList.add("mostrar");

    if (Division > 10) {
        resultadoElement.className = "alert alert-success mostrar";
    } else {
        resultadoElement.className = "alert alert-danger mostrar";
    }
}
document.getElementById("btnDividir").addEventListener("click", Dividir);