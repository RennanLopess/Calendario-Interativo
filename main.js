//Código para tornar calendário interativo, utilizando declaração interativa
function colorirDia() {
    //bloco de variáveis escopo de função
    let days     = document.getElementById('day').value;
    let color    = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');

    //Bloco de validações de informações
    if (!days) {
        alert("Favor, informar um número valido.");
    }
    else {
        if ((days > 0) && (days < 31)) {
            let td = calendar.getElementsByTagName('td')[parseInt(days)+1];
            td.style.backgroundColor = color;
        }
        else {
            alert("Favor, informar um número valido.");
        }
    }

    var elementos = document.querySelectorAll('td');

    var contadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorRoxo = 0;
    for (let i = 0; i < elementos.length; i++) {
        var estilo = window.getComputedStyle(elementos(i));
        var corEstilo = estilo.backgroundColor;
        if (corEstilo        === "rgb(173,216,230)" || corEstilo === "LightBlue") {
            contadorAzul++;
        } else if (corEstilo === "rgb(152, 251, 152)" || corEstilo === "PaleGreen") {
            contadorVerde++;
        } else if (corEstilo === "rgb(255, 182, 193)" || corEstilo === "LightPink") {
            contadorRosa++;
        } else if (corEstilo === "rgb(106, 90, 205)" || corEstilo === "SlateBlue") {
            contadorAzul++;
        }
    }

}