function cadastrar(event) {
    event.preventDefault(); 

    const nome = getElementValue("input-nome");
    const email = getElementValue("input-email");
    const senha = getElementValue("input-senha");

    const usuario = { 
        nome: nome,
        email: email,
        senha: senha
    };

    
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

   
    usuarios.push(usuario);


    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    setElementText("mensagem","Dados do " + nome + " cadastrados!");
    setElementDisplay("overlay","flex");
    resetForm();
}
function showHelpMessage() {
    setElementText("mensagem", "Preencha todos os campos do formulário");
    setElementDisplay("overlay","flex");
}
function fecharOverlay() {
    setElementDisplay("overlay","none");
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("overlay").onclick = function (e) {
        if (e.target.id === "overlay") {
            fecharOverlay();
        }
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        fecharOverlay();
    }
});


function verCadastrados() {
    
    window.location.href = "dashboard.html"
}

function setElementText(element, text){
    document.getElementById(element).textContent = text;
}

function setElementDisplay(element, display){
    document.getElementById(element).style.display = display;
}

function resetForm(){
    document.getElementById("form-login").reset(); 
}
function getElementValue(element){
    return document.getElementById(element).value;
}