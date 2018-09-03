var scores, roundScore, activePlayer, dice, ernedPoints, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
  if (gamePlaying){
    dice = Math.floor(Math.random()*6)+1;
    document.querySelector('.dice').src = "dice-" + dice +".png";
    document.querySelector('.dice').style.display = 'block';
    roundScore = document.querySelector('#current-' + activePlayer).textContent;
    if (dice == 1) {
      nextPlayer();
    }
    else {
      roundScore = parseInt(roundScore) + dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
  };
});

document.querySelector('.btn-hold').addEventListener('click', function(){
  if (gamePlaying){
    ernedPoints = parseInt(document.querySelector('#current-' + activePlayer).textContent);
    document.querySelector('#score-' + activePlayer).textContent = parseInt(document.querySelector('#score-' + activePlayer).textContent) + ernedPoints;
    if (document.querySelector('#score-' + activePlayer).textContent >=20){
      document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display='none';
      document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    };
  };
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){
  document.querySelector('#current-' + activePlayer).textContent = '0';
  document.querySelector('.player-'+ activePlayer + '-panel').classList.toggle('active');
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector('.player-'+ activePlayer + '-panel').classList.toggle('active');
  roundScore = 0;
  document.querySelector('.dice').style.display = 'none';
};

function init(){
  gamePlaying = true;
  activePlayer = 0;
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
};
