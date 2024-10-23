function criaCartao(categoria, pergunta, resposta, imgResposta, fake){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
        <img src="assets/img/wizard.png">
    </div>
    <div class="cartao__conteudo__resposta ${fake}">
        <p>${resposta}</p>
        <img src="assets/img/${imgResposta}">
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao(){
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel);
    }
    cartao.addEventListener('click', viraCartao)
    

    container.appendChild(cartao)
}