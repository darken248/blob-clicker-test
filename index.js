let score = 0;
let key = '032wdfgkuywfe457ksghwajhabkdgfg98sqegeavkski356jbvhbjvnk83fge741ghsfefdfionfdi3h0g978y3esgeg467yks6214jfdgh'
let delay = 50;
let lastClick = 0;
let color = 'yellow';
let scoreclick = 0;
let scoreclick2 = 0;
let totalcolor = ['yellow'];
console.log(totalcolor)
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
  if(color != 'red') {
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
  scoreclick = scoreclick + amount
  if (color === 'yellow' && document.getElementById('score').innerText >= 10 && scoreclick >= 3) {
    color = 'blue'
    scoreclick = 0
    if(totalcolor.indexOf('blue') >= 1) {
      console.log(totalcolor)
    } else {
      totalcolor.push('blue')
      console.log(totalcolor)
    }
    document.getElementById('dialogue').src = 'img/blob/dialogue/blue.png'
    return document.getElementById('click').src = 'img/blob/blue blob.gif'
  } else if(color !== 'yellow' && scoreclick >= 3){
    scoreclick = 0
    color = 'yellow'
    document.getElementById('dialogue').src = 'img/blob/dialogue/yellow.png'
    return document.getElementById('click').src = 'img/blob/yellow blob.gif'
  }
  return 
}
//Save Score
function save(amount) {
  if(color != 'yellow') {
  scoreclick2 = scoreclick2 + amount
  if(color != 'yellow' && scoreclick2 >= 5){
    color = 'yellow'
    scoreclick2 = 0
    return document.getElementById('click').src = 'img/blob/yellow blob.gif'
  }
  }
  if (color === 'yellow') {
  scoreclick2 = scoreclick2 + amount
  if (color === 'yellow' && document.getElementById('score').innerText >= 10 && scoreclick2 >= 5) {
    scoreclick2 = 0
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
  if(color != 'yellow' && scoreclick2 >= 5) {
    color = 'yellow'
    scoreclick2 = 0
    document.getElementById('dialogue').src = 'img/blob/dialogue/yellow.png'
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
    if(imports.length > 10){
    let bytes = CryptoJS.AES.decrypt(imports, key);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    let ImportScore = Number(originalText)
    score = ImportScore
    //Change Score to Imported Score
    document.getElementById('score').innerText = score
    } else if(imports.toLowerCase() === 'orange' && document.getElementById('score').innerText >= 2500) {
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
    } else if(imports.toLowerCase() === 'red' && totalcolor.length >= 8) {
      const blob = document.getElementById('blob')
      blob.style.border = '2px solid black';
      document.getElementById('blob').src = 'img/blob/Red_blob_button.png'
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