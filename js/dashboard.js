document.addEventListener("DOMContentLoaded", function () {
    if (!verificarLogado()) {
        window.location.href = "login.html";
    }
    onCadastrarClick();
    carregarTabela();
});

function onListarClick() {
    document.getElementById("btn-listar").className = "btn-aba-selecionado";
    document.getElementById("btn-cadastrar").className = "btn-aba";
    document.getElementById("container-lista").style.display = "flex";
    document.getElementById("container-cadastro").style.display = "none";
}

function onCadastrarClick() {
    document.getElementById("btn-cadastrar").className = "btn-aba-selecionado";
    document.getElementById("btn-listar").className = "btn-aba";
    document.getElementById("container-lista").style.display = "none";
    document.getElementById("container-cadastro").style.display = "flex";
}

function cadastrarVeiculo(event) {
    event.preventDefault();

    const veiculo = {
        marca: document.getElementById("input-marca").value,
        modelo: document.getElementById("input-modelo").value,
        ano: document.getElementById("input-ano").value,
        placa: document.getElementById("input-placa").value,
        cor: document.getElementById("input-cor").value,
        combustivel: document.getElementById("input-combustivel").value,
        km: document.getElementById("input-km").value,
        renavam: document.getElementById("input-renavam").value,
        chassi: document.getElementById("input-chassi").value
    };

    let veiculos = JSON.parse(localStorage.getItem("veiculos")) || [];
    veiculos.push(veiculo);
    localStorage.setItem("veiculos", JSON.stringify(veiculos));

    setElementText("mensagem", "Veículo " + veiculo.modelo + " cadastrado!");
    setElementDisplay("overlay", "flex");
    document.getElementById("container-cadastro").reset();
    carregarTabela();
}

function carregarTabela() {
    let veiculos = JSON.parse(localStorage.getItem("veiculos")) || [];
    let body = document.getElementById("tabela-veiculos-body");

    if (veiculos.length === 0) {
        body.innerHTML = "<tr><td colspan='10'> Nenhum Veículo Encontrado. </td></tr>";
    } else {
        body.innerHTML = veiculos.map(function(v) {
            return "<tr>" +
                "<td>" + v.marca + "</td>" +
                "<td>" + v.modelo + "</td>" +
                "<td>" + v.ano + "</td>" +
                "<td>" + v.placa + "</td>" +
                "<td>" + v.cor + "</td>" +
                "<td>" + v.combustivel + "</td>" +
                "<td>" + v.km + "</td>" +
                "<td>" + v.renavam + "</td>" +
                "<td>" + v.chassi + "</td>" +
                "<td></td>" + 
            "</tr>";
        }).join("");
    }
}