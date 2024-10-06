let primeiroCartao = null;
let segundoCartao = null;
let bloqueiaCartao = false;
let totalCartoesVirados = 0;

function criaCartao(personagem, imagem, identificacao) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="cartao__conteudo ${personagem}">
      <h3>${identificacao}</h3>
    <div class="cartao__conteudo__pergunta">
        <img src="assets/img/helloweenMemory.png">
    </div>
    <div class="cartao__conteudo__resposta">
        <img src="assets/img/${imagem}">
        <p>${personagem}</p>
    </div>
    </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        if (bloqueiaCartao || cartao.classList.contains('matched')) return; // Impede virar mais de 2 cartões ou já correspondidos
        if (cartao === primeiroCartao) return; // Impede clicar duas vezes no mesmo cartão

        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.add('active');

        if (!primeiroCartao) {
            primeiroCartao = cartao;
        } else {
            segundoCartao = cartao;
            bloqueiaCartao = true;

            verificaCorrespondencia();
        }
    }

    function verificaCorrespondencia() {
        let personagem1 = primeiroCartao.querySelector('.cartao__conteudo').classList[1];
        let personagem2 = segundoCartao.querySelector('.cartao__conteudo').classList[1];

        if (personagem1 === personagem2) {
            // Se forem iguais, aplique a classe matched e bloqueie
            primeiroCartao.classList.add('matched');
            segundoCartao.classList.add('matched');
            totalCartoesVirados += 2; // Atualiza o total de cartas viradas corretamente

            setTimeout(() => {
                resetarCartoes(); // Reseta para próxima rodada
            }, 500);
        } else {
            // Se não forem iguais, vire os cartões de volta
            setTimeout(() => {
                primeiroCartao.classList.remove('active');
                segundoCartao.classList.remove('active');
                resetarCartoes(); // Reseta para próxima rodada
            }, 1000);
        }
    }

    function resetarCartoes() {
        primeiroCartao = null;
        segundoCartao = null;
        bloqueiaCartao = false; // Libera os cliques
    }

    cartao.addEventListener('click', viraCartao);
    container.appendChild(cartao);
}
