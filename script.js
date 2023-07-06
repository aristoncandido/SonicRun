let personagem = document.querySelector("#personagem");
let sprite = document.querySelector("#sprite");
let game = document.querySelector('#game');
let inimigo = document.querySelector('#shadow');
let score = document.querySelector('h1');

let pontuar = 0;
let x = 10;
let y = 10;
let vel = 10;
let movimentoDireita = false;
let movimentoEsquerda = false;

document.addEventListener('keydown', function (e) {
  var tec = e.keyCode;

  if (tec == 32) {
    pular();
  } else if (tec == 39) {
    movimentoDireita = true;
    movimentoEsquerda = false;
  } else if (tec == 37) {
    movimentoEsquerda = true;
    movimentoDireita = false;
  }
});

document.addEventListener('keyup', function (e) {
  var tec = e.keyCode;

  if (tec == 39) {
    movimentoDireita = false;
  } else if (tec == 37) {
    movimentoEsquerda = false;
  }
});

setInterval(function () {
  if (movimentoDireita) {
    Direita();
  } else if (movimentoEsquerda) {
    Esquerda();
  }

  checkCollision(sprite, inimigo);
}, 50);

function pular() {
  if (!personagem.classList.contains('animar')) {
    personagem.classList.add('animar');
  }

  sprite.src = './Imgs/sonicball.gif';

  setTimeout(function () {
    personagem.classList.remove('animar');
    sprite.src = './Imgs/sonic-sonic-the-hedgehog.gif';

    if (checkCollision(sprite, inimigo)) {
      colidir();
    }

    ponto();
  }, 300);




}

function colidir() {
  location.href = 'GameOver.html';
}

function Direita() {
  x += 10;
  personagem.style.left = x + "px";

  if (checkCollision(sprite, inimigo)) {
    colidir();
  }

  ponto();
}

function Esquerda() {
  x -= 10;
  personagem.style.left = x + "px";

  if (checkCollision(sprite, inimigo)) {
    colidir();
  }

  ponto();
}

function ponto() {
  pontuar++;
  score.innerHTML = "SCORE:" + pontuar;
}

function checkCollision(obj1, obj2) {
  var rect1 = obj1.getBoundingClientRect();
  var rect2 = obj2.getBoundingClientRect();

  if (rect1.left < rect2.left + rect2.width &&
      rect1.left + rect1.width > rect2.left &&
      rect1.top < rect2.top + rect2.height &&
      rect1.height + rect1.top > rect2.top) {
    colidir();
    return true;
  }

  return false;
}
