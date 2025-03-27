// Captura os elementos HTML
const botao = document.getElementById('toggleButton');
const paragrafo = document.getElementById('paragrafo');

// Adiciona um evento de clique no botão
botao.addEventListener('click', function() {
    if (paragrafo.style.display === 'none' || paragrafo.style.display === '') {
        paragrafo.style.display = 'block'; // Mostra o parágrafo
        botao.textContent = 'Esconder Parágrafo';
    } else {
        paragrafo.style.display = 'none'; // Esconde o parágrafo
        botao.textContent = 'Mostrar Parágrafo';
    }
});
