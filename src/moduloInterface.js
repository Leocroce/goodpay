import userLogin from "./moduloDados.js";

class ControlerUserLogin {
    constructor(status) {
        this.status = status;
    }
    checkLogin() {
        this.status = true;
    }
    
    loginInfo(user, senha) {
        var infoCheck = userLogin.find((userLogin) => userLogin.username === user);
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        if(!infoCheck) {
            document.getElementById("modalCorpo").innerHTML = `Usuário`
            document.getElementById("modalTitulo").innerHTML = `Usuário não existe.`     
            myModal.show();
        } else {
            if(infoCheck.senha === senha) {
                this.checkLogin();
                document.getElementById("modalCorpo").innerHTML = `Usuário logado com sucesso.`
                document.getElementById("modalTitulo").innerHTML = `${user}`         
                myModal.show();
            } else {
            document.getElementById("modalCorpo").innerHTML = `Senha inválida.`
            document.getElementById("modalTitulo").innerHTML = `${user}`     
            myModal.show();
            }
        }
    }

    
}
    const controlerUserLogin = new ControlerUserLogin();

export default controlerUserLogin;

