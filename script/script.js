var score = 0;
let handclick = 0;
var username = 'Not logged in'
let key = '032wdfgkuywfe457ksghwajhabkdgfg98sqegeavkski356jbvhbjvnk83fge741ghsfefdfionfdi3h0g978y3esgeg467yks6214jfdgh'
let delay = 50;
let lastClick = 0;
let color = 'yellow';
var click = {};
click.blue = 0;
click.pink = 0
click.time = 0;
let totalcolor = ['yellow'];
console.log(totalcolor)
var prestige = 0;
var num = 1;
setInterval(function() {
  if(score < 1) {
    score = 0
    document.getElementById('score').innerHTML = score
  }
  if(color != 'kirbogospin') {
    const dialogue = document.getElementById('dialogue')
    const dialogue2 = document.getElementById('dialogue2')
    dialogue2.style.border = '2px solid transparent';
    dialogue2.style.backgroundColor = 'transparent';
    dialogue.style.border = '2px solid black';
    document.getElementById('dialogue2').innerHTML = ''
  }
  if(username === 'Not logged in') {
    document.getElementById('username').innerText = username
  } else {
    document.getElementById('login').innerHTML = 'Click here to Logout'
    document.getElementById('username').innerText = 'Logged in as ' + username
    document.getElementById('score').innerHTML = score
  }
}, 100)
setInterval(() => {
  if(username !== 'Not logged in'){
    $.ajax({
      url: '/save',
      score: score,
      type: 'POST',
      data: {'score': score, 'username': username, 'handclick': handclick },
    })
  }
}, 5000);
function addToScore(amount) {
  if (lastClick >= (Date.now() - delay))
      return;
  lastClick = Date.now();
  score = score + amount
  handclick = handclick + amount
  document.getElementById('score').innerHTML = score
}
function levelup() {
  if(username !== 'Not logged in'){
    let next = 1000000 * (num * 5)
    if(prestige >= 10) {
      return alert('You reached the maximum prestige level currently')
    }
    if(score < next) {
      alert(`You do not meet the current requirement of ${next} score`)
    } else {
      let ask = confirm('Are you sure you want to level up Prestige, Your score will be reseted if yes')
      if(ask) {
        $.ajax({
          url: '/prestige',
          type: 'POST',
          data: {'prestige': prestige, 'username': username },
        })
        window.location.href = '/login';
      } else {
        return
      }
    }
  } else {
    alert('Login to Prestige')
  }
}
function bewareIndex() {
  if (score !== 0) {
    if (confirm(`Are you sure? This will reset your progress if you don't save first.`)) {
      location.href = "/"
    }
  } else {location.href = "/"}
} 
function purp() {
  if (color === 'yellow') {
    color = 'purple'
    if(totalcolor.indexOf('purple') >= 1) {
      console.log(totalcolor)
    } else {
      totalcolor.push('purple')
      console.log(totalcolor)
    }
    document.getElementById('dialogue').src = 'img/blob/dialogue/purple.png'
    return document.getElementById('click').src = 'img/blob/purple blob.gif'
  } else if(color != 'yellow') {
    color = 'yellow'
    document.getElementById('dialogue').src = 'img/blob/dialogue/yellow.png'
    return document.getElementById('click').src = 'img/blob/yellow blob.gif'
  }
}
function dababy() {
  if(color === 'yellow'){
    color = 'dababy'
    if(totalcolor.indexOf('dababy') >= 1) {
      console.log(totalcolor)
    } else {
      totalcolor.push('dababy')
      console.log(totalcolor)
    }
    document.getElementById('dialogue').src = 'img/blob/dialogue/dababy.png'
    return document.getElementById('click').src = 'img/dababy.jpg'
  } else if(color != 'yellow'){
    color = 'yellow'
    document.getElementById('dialogue').src = 'img/blob/dialogue/yellow.png'
    return document.getElementById('click').src = 'img/blob/yellow blob.gif'
  }
}
function red() {
  if(color != 'red' && totalcolor.length >= 10 && score >= 35000) {
  color = 'red'
  document.getElementById('dialogue').src = 'img/blob/dialogue/red.png'
  document.getElementById('click').src = 'img/blob/red blob.gif'
  } else {
    color = 'yellow'
    document.getElementById('dialogue').src = 'img/blob/dialogue/yellow.png'
    document.getElementById('click').src = 'img/blob/yellow blob.gif'
  }
}
function blue(amount) {
  click.blue = click.blue + amount
  if (color === 'yellow' && document.getElementById('score').innerText >= 10 && click.blue >= 3) {
    color = 'blue'
    click.blue = 0
    if(totalcolor.indexOf('blue') >= 1) {
      console.log(totalcolor)
    } else {
      totalcolor.push('blue')
      console.log(totalcolor)
    }
    document.getElementById('dialogue').src = 'img/blob/dialogue/blue.png'
    return document.getElementById('click').src = 'img/blob/blue blob.gif'
  } else if(color !== 'yellow' && click.blue >= 3){
    click.blue = 0
    color = 'yellow'
    document.getElementById('dialogue').src = 'img/blob/dialogue/yellow.png'
    return document.getElementById('click').src = 'img/blob/yellow blob.gif'
  }
  return 
}
//Save Score
function save(amount) {
  if(username !== 'Not logged in'){
  /*if (color === 'yellow') {
    click.pink = click.pink + amount
    console.log(click.pink)
  if (color === 'yellow' && score >= 10 && click.pink >= 5) {
    click.pink = 0
    if (confirm('Do you like me? - Yellow Blob')) {
      color = 'pink'
      if(totalcolor.indexOf('pink') >= 1) {
        console.log(totalcolor)
      } else {
        totalcolor.push('pink')
        console.log(totalcolor)
      }
      document.getElementById('dialogue').src = 'img/blob/dialogue/pink.png'
      return document.getElementById('click').src = 'img/blob/pink blob.gif'
    } else {
      color = 'green'
      if(totalcolor.indexOf('green') >= 1) {
        console.log(totalcolor)
      } else {
        totalcolor.push('green')
        console.log(totalcolor)
      }
      document.getElementById('dialogue').src = 'img/blob/dialogue/green.png'
      return document.getElementById('click').src = 'img/blob/green blob.gif'
    }
  }
  }
  if(color != 'yellow' && click.pink >= 5) {
    color = 'yellow'
    click.pink = 0
    document.getElementById('dialogue').src = 'img/blob/dialogue/yellow.png'
    return document.getElementById('click').src = 'img/blob/yellow blob.gif'
  }
  */
  let encrypted = CryptoJS.AES.encrypt(score.toString(), key)
  $.ajax({
    url: '/save',
    score: score,
    type: 'POST',
    data: {'score': score, 'username': username },
  });
  return alert(`Sucessfully Saved, Save Line: ${encrypted} `);
  } else {
    alert('Login to save')
  }
}
/*Load Score
function load() {
     //Import Encrypted Line
    let imports = prompt('Paste your string here');
    //Decrypt
    if(imports.length > 15){
    let bytes = CryptoJS.AES.decrypt(imports, key);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    let ImportScore = Number(originalText)
    score = ImportScore
    //Change Score to Imported Score
    document.getElementById('score').innerText = score
    } else if(imports.toLowerCase() === 'orange' && score >= 2500) {
      color = 'orange'
      if(totalcolor.indexOf('orange') >= 1) {
        console.log(totalcolor)
      } else {
        totalcolor.push('orange')
        console.log(totalcolor)
      }
      document.getElementById('dialogue').src = 'img/blob/dialogue/orange.png'
      document.getElementById('click').src = 'img/blob/orange blob.gif'
    } else if(imports.toLowerCase() === 'yellow') {
      color = 'yellow'
      document.getElementById('dialogue').src = 'img/blob/dialogue/yellow.png'
      document.getElementById('click').src = 'img/blob/yellow blob.gif'
    } else if(imports.toLowerCase() === 'erasevfx') {
      color = 'erasevfx'
      if(totalcolor.indexOf('erasevfx') >= 1) {
        console.log(totalcolor)
      } else {
        totalcolor.push('erasevfx')
        console.log(totalcolor)
      }
      document.getElementById('dialogue').src = 'img/blob/dialogue/erase.png'
      document.getElementById('click').src = 'img/erase logo.png'
    } else if(imports.toLowerCase() === 'red' && totalcolor.length >= 10 && score >= 85000) {
      const blob = document.getElementById('blob')
      blob.style.border = '2px solid black'
      document.getElementById('blob').src = 'img/blob/Red_blob_button.png'
    } else if(imports.toLowerCase() === 'ilovekirbo') {
      color = 'ilovekirbo'
      if(totalcolor.indexOf('ilovekirbo') >= 1) {
        console.log(totalcolor)
      } else {
        totalcolor.push('ilovekirbo')
        console.log(totalcolor)
      }
      document.getElementById('dialogue').src = 'img/blob/dialogue/cullen blob.png'
      document.getElementById('click').src = 'img/cullen blob.png'
    } else if(imports.toLowerCase() === 'kirbogospin') {
      color = 'kirbogospin'
      if(totalcolor.indexOf('kirbogospin') >= 1) {
        console.log(totalcolor)
      } else {
        totalcolor.push('kirbogospin')
        console.log(totalcolor)
      }
      const dialogue = document.getElementById('dialogue')
      const dialogue2 = document.getElementById('dialogue2')
      dialogue2.style.border = '2px solid black';
      dialogue.style.border = '2px solid white';
      dialogue2.style.backgroundColor = 'rgb(63,143,42)';
      document.getElementById('dialogue').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'
      document.getElementById('dialogue2').innerHTML = '<br>' + `Do you know where you're going when you die?`
      document.getElementById('click').src = 'img/kirbo-spin.gif'
    }
}
*/
function savetxt() {
  if(username !== 'Not logged in'){
  //Encrypt
  let encrypted = CryptoJS.AES.encrypt(score.toString(), key).toString();
  //Send Encrypted Line
  var blob = new Blob([encrypted]);
  saveAs(blob, "blobclicker.txt");
  } else {
    alert('Login to save')
  }
}
/*OpenFile
let openFile = function(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function(){
    var dataURL = reader.result;
    let bytes = CryptoJS.AES.decrypt(dataURL, key);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    let decrypted = Number(originalText)
    score = decrypted
    return document.getElementById('score').innerText = score
  };
  reader.readAsText(input.files[0]);
};
*/
function coinflip() {
  let coin = document.getElementById('coinflip').value
  if(typeof coin === null) return
  let amount = Number(coin)
  if(amount <= 0) return
  /*
  if(coin.toLowerCase() === 'orange' && score >= 2500) {
    color = 'orange'
    if(totalcolor.indexOf('orange') >= 1) {
      console.log(totalcolor)
    } else {
      totalcolor.push('orange')
      console.log(totalcolor)
    }
    document.getElementById('dialogue').src = 'img/blob/dialogue/orange.png'
    document.getElementById('click').src = 'img/blob/orange blob.gif'
  } else if(coin.toLowerCase() === 'yellow') {
    color = 'yellow'
    document.getElementById('dialogue').src = 'img/blob/dialogue/yellow.png'
    document.getElementById('click').src = 'img/blob/yellow blob.gif'
  } else if(coin.toLowerCase() === 'erasevfx') {
    color = 'erasevfx'
    if(totalcolor.indexOf('erasevfx') >= 1) {
      console.log(totalcolor)
    } else {
      totalcolor.push('erasevfx')
      console.log(totalcolor)
    }
    document.getElementById('dialogue').src = 'img/blob/dialogue/erase.png'
    document.getElementById('click').src = 'img/erase logo.png'
  } else if(coin.toLowerCase() === 'red' && totalcolor.length >= 10 && score >= 85000) {
    const blob = document.getElementById('blob')
    blob.style.border = '2px solid black'
    document.getElementById('blob').src = 'img/blob/Red_blob_button.png'
  } else if(coin.toLowerCase() === 'ilovekirbo') {
    color = 'ilovekirbo'
    if(totalcolor.indexOf('ilovekirbo') >= 1) {
      console.log(totalcolor)
    } else {
      totalcolor.push('ilovekirbo')
      console.log(totalcolor)
    }
    document.getElementById('dialogue').src = 'img/blob/dialogue/cullen blob.png'
    document.getElementById('click').src = 'img/cullen blob.png'
  } else if(coin.toLowerCase() === 'kirbogospin') {
    color = 'kirbogospin'
    if(totalcolor.indexOf('kirbogospin') >= 1) {
      console.log(totalcolor)
    } else {
      totalcolor.push('kirbogospin')
      console.log(totalcolor)
    }
    const dialogue = document.getElementById('dialogue')
    const dialogue2 = document.getElementById('dialogue2')
    dialogue2.style.border = '2px solid black';
    dialogue.style.border = '2px solid white';
    dialogue2.style.backgroundColor = 'rgb(63,143,42)';
    document.getElementById('dialogue').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'
    document.getElementById('dialogue2').innerHTML = '<br>' + `Do you know where you're going when you die?`
    document.getElementById('click').src = 'img/kirbo-spin.gif'
  } else {
  */
  if(score < amount) {
  console.log(score)
  return alert('Your amount is greater than your score')
  }
  let imports = prompt('Heads or Tails');
  let side = '';
  let opposite = '';
  if(imports.toLowerCase() === 'heads' || imports.toLowerCase() === 'head' || imports.toLowerCase() === 'h'){
    side = 'Heads'
    opposite = 'Tails'
  } else if(imports.toLowerCase() === 'tails' || imports.toLowerCase() === 'tail' || imports.toLowerCase() === 't'){
    side = 'tails'
    opposite = 'heads'
  } else {
    return alert('Incorrect Value')
  }
  if(score >= amount) {
    //0 or 1
    let random = Math.floor(Math.random() * 2)
    if(random === 0) {
      //lose = 0
      if(amount < 0){
        score = score - 0
      } else if(score > 0){
        score = score - amount
      }
      if(username !== 'Not logged in'){
        $.ajax({
          url: '/save',
          score: score,
          type: 'POST',
          data: {'score': score, 'username': username, 'handclick': handclick },
        })
      }
      document.getElementById('score').innerText = score
      alert(`It was ${opposite}, you chose ${side} and you lost ${amount}`)
    } else {
      //win = 1
      if(amount < 0){
        score = score + 0
      } else if(score > 0){
        score = score + amount
      }
      if(username !== 'Not logged in'){
        $.ajax({
          url: '/save',
          score: score,
          type: 'POST',
          data: {'score': score, 'username': username, 'handclick': handclick },
        })
      }
      document.getElementById('score').innerText = score
      alert(`It was ${side}, you won ${amount}`)
    }
  }/*
  }*/
}
