let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Funções para seguir o príncipio DRY- "Dont Repeat Yourself".
const exibirMensagem = function (message) {
  document.querySelector('.message').textContent = message;
};

const exibirScore = function (pontos) {
  document.querySelector('.score').textContent = pontos;
};

const estiloDoNumero = function (estilo) {
  document.querySelector('.number').style.width = estilo;
};
const conteudoNumero = function (content) {
  document.querySelector('.number').textContent = content;
};

// Botão de checar
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //Quando não tem input
  if (!guess) {
    exibirMensagem('Sem número! ⛔');

    //Quando o jogador acerta o número
  } else if (guess === secretNumber) {
    exibirMensagem('Número correto! 🎉');
    conteudoNumero(secretNumber);
    estiloDoNumero('30rem');

    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Quando o jogador erra o número
  } else if (guess !== secretNumber) {
    if (score > 1) {
      exibirMensagem(guess > secretNumber ? 'Muito alto!📈' : 'Muito baixo!📉');
      score--;
      exibirScore(score);
    } else {
      exibirMensagem('Você perdeu 💥');
      exibirScore(0);
    }
  }
});

// Para jogar de novo
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  exibirMensagem('Começando a advinhar...');
  exibirScore(score);
  conteudoNumero('?');
  estiloDoNumero('15rem');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
