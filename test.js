let fortunes = ['You are one step closer', 'Keep like this', 'You will become a great programmer', 'You done the right thing', 'All your hard work will soon pay off'];

let button = document.getElementById('button-start');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune]
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "You have start!";
  button.style.cursor = 'default';
}

button.removeEventListener('click', showFortune);

button.addEventListener('click', showFortune);