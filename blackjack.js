// Code goes here

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack',
  'Ten', 'Nine', 'Eight', 'Seven', 'Six',
  'Five', 'Four', 'Three', 'Two', 'One'
];

let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');
let amount = document.getElementById('blackjack')

hitButton.style.display = 'none';
stayButton.style.display = 'none';

let gameStart = false,a
  gameOver = false,
  playWon = false,
  dealerCards = [],
  playerCards = [],
  dealerScore = 0,
  playerScore = 0,
  deck = [];

newGameButton.addEventListener('click', function() {
    let num = Number(amount.value)
  if(amount.value != Number(amount.value)) {
    return alert('Invalid Amount')
  }
  if(num > score || num <= '0'){
    return alert('Missing amount to Gamble')
  }

  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];
  newGameButton.style.display = 'none';
  amount.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
})

function createDeck() {
  let deck = []
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      let card = {
        suit: suits[suitIdx],
        value: values[valueIdx]
      }
      deck.push(card);
    }
  }
  return deck;
}

function shuffleDeck(deck){
  for(let i=0; i<deck.length; i++)
  {
    let swapIdx = Math.trunc(Math.random() *deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp; 
  }
}

hitButton.addEventListener('click', function(){
  playerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus();
});

stayButton.addEventListener('click', function(){
  gameOver = true;
  checkForEndOfGame();
  showStatus();
});

function checkForEndOfGame(){
  updateScores();
  
  if(gameOver){
    while(dealerScore<playerScore &&
          playerScore < 21 &&
          dealerScore < 21){
            dealerCards.push(getNextCard());
            updateScores();
    }
  }
    
    if(playerScore===21){
      playerWon=true;
      gameOver = true;
    } 
    
    else if(playerScore>21){
      playerWon = false;
      gameOver = true;
    }
    
    else if(dealerScore>21){
      playerWon = true;
      gameOver = true;
    }
    else if(gameOver){
      if(playerScore>dealerScore){
        playerWon = true;
      }
      else{
        playerWon = false;
      }
    }
}

function getCardString(card) {
  return card.value + " of " + card.suit;
}
function getCardNumericValue(card){
  switch(card.value){
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case 'Six':
      return 6;
    case 'Seven':
      return 7;
    case 'Eight':
      return 8;
    case 'Nine':
      return 9;
    default:
      return 10; 
  }
}
function showStatus()
{
  if(!gameStarted)
  {
    textArea.innerText = 'Welcome to Blackjack!';
    return; 
  }
  
  let dealerCardString = '';
  for(let i=0; i<dealerCards.length; i++)
  {
    dealerCardString += getCardString(dealerCards[i]) + '\n';
  }
  let playerCardString='';
  for(let i=0; i<playerCards.length; i++)
  {
    playerCardString += getCardString(playerCards[i]) + '\n';
  }
  
  updateScores();
  
  textArea.innerText = 'Dealer has:\n' +
                        dealerCardString + 
                        '(score: ' + dealerScore + ')\n\n' +
                        
                        'Player has:\n' +
                        playerCardString + 
                        '(score: ' + playerScore + ')\n\n';
                        
  if(gameOver){
    let num = Number(amount.value)
    if(playerWon)
    {
        textArea.innerText += "YOU WIN!";
        score = score + num
        document.getElementById('score').innerHTML = score
    }
    else{
      textArea.innerText += "DEALER WINS";
      score = score - num
      document.getElementById('score').innerHTML = score
    }

    amount.style.display = 'block';
    newGameButton.style.display = 'inline';
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
    
  }
}

function getScore(cardArray){
  let score2 = 0;
  let hasAce = false;
  for(let i=0; i<cardArray.length; i++){
    let card = cardArray[i];
    score2 += getCardNumericValue(card);
    if(card.value == 'Ace'){
      hasAce = true;
    }
    
    if(hasAce && score2+10<=21){
      return score2+10;
    }
  }
   return score2; 
}

function updateScores(){
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards); 
}


function getNextCard() {
  return deck.shift();
}
