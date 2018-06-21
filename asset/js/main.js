function encode() {
  var input = document.getElementById('encodetext');
  var output = document.getElementById('decodetext');

  var password = "PWD" + input.value.replace(/\s+/g," ")
                                .replace(/a/gi,"@")
                                .replace(/i/gi,"!")
                                .replace(/t/gi,"+")
                                .replace(/c/gi,"(")
                                .replace(/d/gi,")")
                                .replace(/e/gi,"3")
                                .replace(/z/gi,"2")
                                .replace(/f/gi,"=")
                                .replace(/ /gi,"_")
                            + Math.floor(Math.random(99) * 100);

  output.value = password;
  input.value = '';
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
}

function generate() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('genpass').innerText = this.responseText;
        var elm = document.getElementById('encodetext');
        elm.value = this.responseText;
        elm.select();
        document.execCommand('cut');
        document.getElementById('pwdmodal').classList.add('is-active');
    }
  }

  xhr.open('GET', 'http://www.dinopass.com/password/strong',false)
  xhr.send();
}

function closeModal() {
    document.getElementById('pwdmodal').classList.remove('is-active');
}
