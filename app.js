function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let permitirRepetidos = document.getElementById("permitirRepetidos").checked;

    if (isNaN(quantidade) || isNaN(min) || isNaN(max) || quantidade <= 0 || min > max) {
        document.getElementById("resultado").innerHTML = "Preencha todos os campos corretamente.";
        return;
    }

    if (!permitirRepetidos && (max - min + 1) < quantidade) {
        document.getElementById("resultado").innerHTML = "Não há números únicos suficientes nesse intervalo.";
        return;
    }

    let sorteados = [];
    let number;

    if (permitirRepetidos) {
        for (let i = 0; i < quantidade; i++) {
            number = aleatoryNumbers(min, max);
            sorteados.push(number);
        }
    } else {
        while (sorteados.length < quantidade) {
            number = aleatoryNumbers(min, max);
            if (!sorteados.includes(number)) {
                sorteados.push(number);
            }
        }
    }

    document.getElementById("resultado").innerHTML = `Números sorteados: ${sorteados.join(", ")}`;
    allowResetButton();
}

function aleatoryNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function allowResetButton() {
    document.getElementById("btn_reiniciar").classList.remove("container_btn_OFF");
    document.getElementById("btn_reiniciar").classList.add("container_btn");
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("min").value = "";
    document.getElementById("max").value = "";
    document.getElementById("resultado").innerHTML = "Números sorteados: nenhum até agora :[";
    document.getElementById("btn_reiniciar").classList.remove("container_btn");
    document.getElementById("btn_reiniciar").classList.add("container_btn_OFF");
}