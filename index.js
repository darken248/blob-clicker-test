let score = 0;
let key = 'Deen is bad at Fortnite and we all know that because he has the fattest ass aroudn town but he will be the next Kim Kirdashian'
let delay = 50;
let lastClick = 0;

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
    let scoreId = document.getElementById('score').innerHTML
    score = Number(scoreId)
    score = score + amount
    document.getElementById('score').innerHTML = score
  }
  
//Save Score
function save() {
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
    let decrypt = document.getElementById('load').value
    //Decrypt
    let bytes = CryptoJS.AES.decrypt(decrypt, key);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    let ImportScore = Number(originalText)
    //Change Score to Imported Score
    return document.getElementById('score').innerText = ImportScore
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
    let scoreid = document.getElementById('score')
    scoreid.innertext = decrypted;
  };
  reader.readAsText(input.files[0]);
};