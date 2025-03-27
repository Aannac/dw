// Captura o botão pelo ID
const botao = document.getElementById('dynamicButton');

// Lista de textos alternativos
const textos = ["Clique aqui!", "Você clicou!", "Clique de novo!", "Continua clicando!", "Isso é divertido!", "Mais um clique!"];

// Índice para acompanhar qual texto deve ser exibido
let indice = 0;

// Adiciona um evento de clique ao botão
botao.addEventListener('click', function() {
    // Atualiza o texto do botão
    botao.textContent = textos[indice];

    // Incrementa o índice para o próximo texto
    indice++;

    // Se o índice ultrapassar o tamanho da lista, volta para o início
    if (indice >= textos.length) {
        indice = 0;
    }
});
