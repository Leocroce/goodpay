import controlerUserLogin from "./moduloInterface.js";

// Elementos de Avisos para uso do Bootstrap: Modal, Toast, Alert
var myModal = new bootstrap.Modal(document.getElementById('myModal'))

// Trazendo os botões da DOM em HTML
const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (e) => {
    let nome = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let alertModal = controlerUserLogin.loginInfo(nome, senha);
    
    document.getElementById("titleModal").innerHTML = alertModal.title;
    document.getElementById("bodyModal").innerHTML = alertModal.bodyModal;
    document.getElementById("btnModalClose").innerHTML = alertModal.b1;
    document.getElementById("btnModalSave").innerHTML = alertModal.b2;

    myModal.show();
});

