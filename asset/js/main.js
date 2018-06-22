
var adj= {
  "en": [
    "pretty", "ugly","quick",
    "beauty", "smart","bad", "good", "strange",
    "funny", "slow", "big", "small",
    "old", "new","humble", "powerful", "fast",
    "clever", "cool", "cold", "warm"
  ],
  "vi": [
    "nhanh", "cham", "xinh","xau","dep","tot", "la","moi", "cu",
    "khiemton", "manhme", "huhong", "nong", "lanh", "matme"
  ]
}
var noun = {
  "en" : [
    "banana","apple", "dog", "cat", "boat", "man", "girl", "boy", "woman", "tank",
    "chicken", "ship", "flower", "bunny", "matrix", "godzilla", "bat",
    "book", "gun", "house", "island", "cloud", "robo", "machine",
    "paper", "pen", "phone", "string", "helmet", "ear", "dolphin", "plastic",
    "rock", "hammer", "heart"
  ],
  "vi": [
    "chuoi", "tao", "cho", "meo", "tau", "trai", "gai", "xetang","ga","hoa",
    "tho", "doi", "sach","sung", "nha", "dao", "may", "nguoimay", "giay", "but",
    "mu", "tai", "ca", "bua"
  ]
}
function encodeText(input) {
  return input.replace(/\s+/g," ")
                                .replace(/a/gi,"@")
                                .replace(/i/gi,"!")
                                .replace(/t/gi,"+")
                                .replace(/c/gi,"(")
                                .replace(/d/gi,")")
                                .replace(/e/gi,"3")
                                .replace(/z/gi,"2")
                                .replace(/f/gi,"=")
                                .replace(/ /gi,"_");
}
function encode() {
  var input = document.getElementById('encodetext');
  var output = document.getElementById('decodetext');

  var password = "PWD" + encodeText(input.value) + '00';

  output.value = password;
  input.value = '';
  document.getElementById('notif').style.display="none";
}

function decode() {
  var input = document.getElementById('decodetext');
  var output = document.getElementById('encodetext');

  var decoded = input.value.slice(3); // remove PWD
  decoded = decoded.slice(0, decoded.length - 2) // remove random number
  decoded = decoded.replace(/@/gi,"a")
                      .replace(/!/gi,"i")
                      .replace(/\+/gi,"t")
                      .replace(/\(/gi,"c")
                      .replace(/\)/gi,"d")
                      .replace(/3/gi,"e")
                      .replace(/2/gi,"z")
                      .replace(/=/gi,"f")
                      .replace(/_/gi," ")
  output.value = decoded;
  input.value = '';
  document.getElementById('notif').style.display="none";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generate() {
  var lang = document.querySelector('.language:checked').value
  var word, a, b;
  if (lang === 'en') {
    a = capitalize(adj.en[getRandomInt(adj.en.length)]);
    b = capitalize(noun.en[getRandomInt(noun.en.length)]);
  } else {
    b = capitalize(adj.vi[getRandomInt(adj.vi.length)]);
    a = capitalize(noun.vi[getRandomInt(noun.vi.length)]);
  }
  word = encodeText(a + b) + getRandomInt(99);
  document.getElementById('generatedText').innerText = word;
  document.getElementById('encodetext').value = word;
  document.getElementById('encodetext').select();
  document.execCommand('cut');
  document.getElementById('encodetext').blur();
  document.getElementById('notif').style.display="block";
}

function closeModal() {
    document.getElementById('pwdmodal').classList.remove('is-active');
}
