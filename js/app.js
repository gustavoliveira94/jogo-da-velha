var button = [document.getElementById("house1"),
document.getElementById("house2"),
document.getElementById("house3"),
document.getElementById("house4"),
document.getElementById("house5"),
document.getElementById("house6"),
document.getElementById("house7"),
document.getElementById("house8"),
document.getElementById("house9")];

var letter = "O";

// FUNÇÃO PARA CAPTURAR AS LETRAS

function letters() {
    if (letter === "O") {
        return letter = "X";
    }
    else {
        return letter = "O";
    }
}

// FUNÇÃO PARA VALIDAR E PREENCHER COM UMA LETRA

function played1() {
    if (button[0].value === "X" || button[0].value === "O") {
        return alert("Já foi preenchido");
    }
    button[0].value = letters();
}

function played2() {
    if (button[1].value === "X" || button[1].value === "O") {
        return alert("Já foi preenchido");
    }
    button[1].value = letters();
}

function played3() {
    if (button[2].value === "X" || button[2].value === "O") {
        return alert("Já foi preenchido");
    }
    button[2].value = letters();
}

function played4() {
    if (button[3].value === "X" || button[3].value === "O") {
        return alert("Já foi preenchido");
    }
    button[3].value = letters();
}

function played5() {
    if (button[4].value === "X" || button[4].value === "O") {
        return alert("Já foi preenchido");
    }
    button[4].value = letters();
}

function played6() {
    if (button[5].value === "X" || button[5].value === "O") {
        return alert("Já foi preenchido");
    }
    button[5].value = letters();
}

function played7() {
    if (button[6].value === "X" || button[6].value === "O") {
        return alert("Já foi preenchido");
    }
    button[6].value = letters();
}

function played8() {
    if (button[7].value === "X" || button[7].value === "O") {
        return alert("Já foi preenchido");
    }
    button[7].value = letters();
}

function played9() {
    if (button[8].value === "X" || button[8].value === "O") {
        return alert("Já foi preenchido");
    }
    button[8].value = letters();
}

// FUNÇÃO PARA VERIFICAR SE ALGUM PLAYER GANHOU

function champion() {
    if (button[0].value === "X" && button[1].value === "X" && button[2].value === "X" ||
        button[0].value === "O" && button[1].value === "O" && button[2].value === "O") {
        alert("Você ganhou!");
    }
    else if (button[0].value === "X" && button[3].value === "X" && button[6].value === "X" ||
        button[0].value === "O" && button[3].value === "O" && button[6].value === "O") {
        alert("Você ganhou!");
    }
    else if (button[0].value === "X" && button[4].value === "X" && button[8].value === "X" ||
        button[0].value === "O" && button[4].value === "O" && button[8].value === "O") {
        alert("Você ganhou!");
    }
    else if (button[2].value === "X" && button[5].value === "X" && button[8].value === "X" ||
        button[2].value === "O" && button[5].value === "O" && button[8].value === "O") {
        alert("Você ganhou!");
    }
    else if (button[1].value === "X" && button[4].value === "X" && button[7].value === "X" ||
        button[1].value === "O" && button[4].value === "O" && button[7].value === "O") {
        alert("Você ganhou!");
    }
    else if (button[3].value === "X" && button[4].value === "X" && button[5].value === "X" ||
        button[3].value === "O" && button[4].value === "O" && button[5].value === "O") {
        alert("Você ganhou!");
    }
    else if (button[2].value === "X" && button[4].value === "X" && button[6].value === "X" ||
        button[2].value === "O" && button[4].value === "O" && button[6].value === "O") {
        alert("Você ganhou!");
    }
    else if (button[6].value === "X" && button[7].value === "X" && button[8].value === "X" ||
        button[6].value === "O" && button[7].value === "O" && button[8].value === "O") {
        alert("Você ganhou!");
    }
}