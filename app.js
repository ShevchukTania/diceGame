var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function(){
  dice = Math.floor(Math.random()*6)+1;
  document.querySelector('.dice').src = "dice-" + dice +".png";
  document.querySelector('.dice').style.display = 'block';
  roundScore = document.querySelector('#current-' + activePlayer).textContent;
  if (dice == 1) {
    roundScore = 0;
    document.querySelector('.player-'+ activePlayer + '-panel').classList.toggle('active');
    document.querySelector('#current-' + activePlayer).textContent = '0';
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-'+ activePlayer + '-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
  }
  else {
    roundScore = parseInt(roundScore) + dice;
  }
  document.querySelector('#current-' + activePlayer).textContent = roundScore;

})

document.querySelector('.btn-hold').addEventListener('click', function(){
  ernedPoints = parseInt(document.querySelector('#current-' + activePlayer).textContent);
  document.querySelector('#score-' + activePlayer).textContent = parseInt(document.querySelector('#score-' + activePlayer).textContent) + ernedPoints;
  document.querySelector('#current-' + activePlayer).textContent = '0';
  document.querySelector('.player-'+ activePlayer + '-panel').classList.toggle('active');
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector('.player-'+ activePlayer + '-panel').classList.toggle('active');
  roundScore = 0;
  document.querySelector('.dice').style.display = 'none';
})
