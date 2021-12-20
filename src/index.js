import controlerUserLogin from "./moduloInterface.js";

// Elementos de Avisos para uso do Bootstrap: Modal, Toast, Alert
var myModal = new bootstrap.Modal(document.getElementById('myModal'))

// Trazendo os botões da DOM em HTML
const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (e) => {
    let nome = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(!nome || nome === null || nome === "" || !senha || senha === null || senha === "") {
        document.getElementById("modalCorpo").innerHTML = `Campos Vazios, não há como executar o login.`
        document.getElementById("modalTitulo").innerHTML = `Campos Vazios` 
        myModal.show();
    } else {
        controlerUserLogin.loginInfo(nome, senha);
    }
});

