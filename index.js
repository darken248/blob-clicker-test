let score = 0;
let key = '032wdfgkuywfe457ksghwajhabkdgfg98sqegeavkski356jbvhbjvnk83fge741ghsfefdfionfdi3h0g978y3esgeg467yks6214jfdgh'
let delay = 50;
let lastClick = 0;
let color = 'yellow';
let scoreclick = 0;
let scoreclick2 = 0;

function bewareIndex() {
  let scoreId = document.getElementById('score').innerHTML
  score = Number(scoreId)
  if (score !== 0) {
    if (confirm(`Are you sure? This will reset your progress if you don't save first.`)) {
      location.href = "/index.html"
    }
  } else {location.href = "/index.html"}
}
function addToScore(amount) {
    if (lastClick >= (Date.now() - delay))
        return;
    lastClick = Date.now();
    let scoreid = document.getElementById('score').innerText
    score = Number(scoreid)
    score = score + amount
    document.getElementById('score').innerHTML = score
}
  
function purp() {
  if (color === 'yellow') {
    color = 'purple'
    document.getElementById('dialogue').src = 'img/blob/dialogue/purple.png'
    setTimeout(function() { document.getElementById('dialogue').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'; }, 10000);
    return document.getElementById('click').src = 'img/blob/purple blob.gif'
  } else if(color !== 'yellow'){
    color = 'yellow'
    document.getElementById('dialogue').src = 'img/blob/dialogue/yellow.png'
    setTimeout(function() { document.getElementById('dialogue').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'; }, 10000);
    return document.getElementById('click').src = 'img/blob/yellow blob.gif'
  }
}
function dababy() {
  if(color === 'yellow'){
    color = 'dababy'
    document.getElementById('dialogue').src = 'img/blob/dialogue/dababy.png'
    setTimeout(function() { document.getElementById('dialogue').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'; }, 10000);
    return document.getElementById('click').src = 'img/dababy.jpg'
  } else if(color != 'yellow'){
    color = 'yellow'
    document.getElementById('dialogue').src = 'img/blob/dialogue/yellow.png'
    setTimeout(function() { document.getElementById('dialogue').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'; }, 10000);
    return document.getElementById('click').src = 'img/blob/yellow blob.gif'
  }
}
function blue(amount) {
  scoreclick = scoreclick + amount
  if (color === 'yellow' && document.getElementById('score').innerText >= 10 && scoreclick >= 3) {
    color = 'blue'
    scoreclick = 0
    document.getElementById('dialogue').src = 'img/blob/dialogue/blue.png'
    setTimeout(function() { document.getElementById('dialogue').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'; }, 10000);
    return document.getElementById('click').src = 'img/blob/blue blob.gif'
  } else if(color !== 'yellow' && scoreclick >= 3){
    scoreclick = 0
    color = 'yellow'
    document.getElementById('dialogue').src = 'img/blob/dialogue/yellow.png'
    setTimeout(function() { document.getElementById('dialogue').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'; }, 10000);
    return document.getElementById('click').src = 'img/blob/yellow blob.gif'
  }
  return 
}
//Save Score
function save(amount) {
  if (color === 'yellow') {
  scoreclick2 = scoreclick2 + amount
  if (color === 'yellow' && document.getElementById('score').innerText >= 10 && scoreclick2 >= 5) {
    scoreclick2 = 0
    if (confirm('Do you like me? - Yellow Blob')) {
      color = 'pink'
      document.getElementById('dialogue').src = 'img/blob/dialogue/pink.png'
      setTimeout(function() { document.getElementById('dialogue').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'; }, 10000);
      return document.getElementById('click').src = 'img/blob/pink blob.gif'
    } else {
      color = 'green'
      document.getElementById('dialogue').src = 'img/blob/dialogue/green.png'
      setTimeout(function() { document.getElementById('dialogue').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'; }, 10000);
      return document.getElementById('click').src = 'img/blob/green blob.gif'
    }
  }
  }
  if(color != 'yellow' && scoreclick2 >= 5) {
    color = 'yellow'
    scoreclick2 = 0
    document.getElementById('dialogue').src = 'img/blob/dialogue/yellow.png'
    setTimeout(function() { document.getElementById('dialogue').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'; }, 10000);
    return document.getElementById('click').src = 'img/blob/yellow blob.gif'
  }
    //Import Current Score
    let saveScore = document.getElementById('score').innerText
    //Encrypt
    let encrypted = CryptoJS.AES.encrypt(saveScore.toString(), key).toString();
    //Send Encrypted Line
    return alert(encrypted)
}
  
  //Load Score
function load() {
     //Import Encrypted Line
    let imports = prompt('Paste your string here');
    //Decrypt
    if(imports.length() > 10){
      console.log('1')
    let bytes = CryptoJS.AES.decrypt(imports, key);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    let ImportScore = Number(originalText)
    score = ImportScore
    //Change Score to Imported Score
    document.getElementById('score').innerText = score
    } else if(imports.toLowerCase() === 'orange' && document.getElementById('score').innerText >= 2500) {
      color = 'orange'
      document.getElementById('dialogue').src = 'img/blob dialogue/orange.png'
      setTimeout(function() { document.getElementById('dialogue').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'; }, 10000);
      document.getElementById('click').src = 'img/blob/orange blob.gif'
    } else if(imports.toLowerCase() === 'yellow') {
      color = 'yellow'
      document.getElementById('dialogue').src = 'img/blob dialogue/yellow.png'
      setTimeout(function() { document.getElementById('dialogue').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'; }, 10000);
      document.getElementById('click').src = 'img/blob/yellow blob.gif'
    } else if(imports.toLowerCase() === 'erasevfx') {
      color = 'erasevfx'
      document.getElementById('dialogue').src = 'img/blob dialogue/erase.png'
      setTimeout(function() { document.getElementById('dialogue').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'; }, 10000);
      document.getElementById('click').src = 'img/erase logo.png'
    }
}

function savetxt() {
  //Import Current Score
  let saveScore = document.getElementById('score').innerText
  //Encrypt
  let encrypted = CryptoJS.AES.encrypt(saveScore.toString(), key).toString();
  //Send Encrypted Line
  var blob = new Blob([encrypted]);
  saveAs(blob, "blobclicker.txt");
}

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