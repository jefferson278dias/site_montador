// Obtém o botão
var botao = document.getElementById("123");

// Função para mostrar ou ocultar o botão com base na rolagem da página
function verificarScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botao.style.display = "block";
    } else {
        botao.style.display = "none";
    }
}

// Função para rolar a página até o topo
function rolarParaTopo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Adiciona o evento de rolagem
window.onscroll = function() { verificarScroll(); };

// Adiciona o evento de clique para rolar até o topo
botao.addEventListener("click", rolarParaTopo);
