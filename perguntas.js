const personagens = [
    'Drácula', 
    'Frankenstein', 
    'Fantasma', 
    'Morcego', 
    'Múmia', 
    'Espantalho', 
    'Lobsomen', 
    'Coruja', 
    'Bruxa', 
    'Zumbi'
];

const imagens = [
    'dracula.png', 
    'frankenstein.png', 
    'ghost.png', 
    'bat.png', 
    'mummy.png', 
    'scarecrow.png', 
    'werewolf.png', 
    'wisdom.png', 
    'witch.png', 
    'zombie.png'
];

// Combina personagens e imagens em um array de pares
let cartas = [];

for (let i = 0; i < personagens.length; i++) {
    cartas.push({ personagem: personagens[i], imagem: imagens[i] });
}

// Duplicar cada carta para formar pares
cartas = [...cartas, ...cartas];

// Função para embaralhar o array (algoritmo de Fisher-Yates)
function embaralharCartas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Embaralha o array de cartas
const cartasEmbaralhadas = embaralharCartas(cartas);

// Chama a função criaCartao para cada carta embaralhada
let contador = 1;
cartasEmbaralhadas.forEach(carta => {
    criaCartao(carta.personagem, carta.imagem, contador++);
});