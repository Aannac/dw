// Variável para armazenar o contador
let contador = 0;

// Função para atualizar o contador na tela
function atualizarContador() {
    document.getElementById('contador').textContent = contador;
}

// Evento de clique na tela (document) para incrementar o contador
document.addEventListener('click', function() {
    contador++;
    atualizarContador();
});

// Evento para zerar o contador ao clicar no botão
document.getElementById('resetButton').addEventListener('click', function() {
    contador = -1;
    atualizarContador();
});
