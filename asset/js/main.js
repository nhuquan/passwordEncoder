function encode() {
  var input = document.getElementById('encodetext');
  var output = document.getElementById('decodetext');

  var password = window.btoa(input.value.replace(/\s+/g," "))

  output.value = password;
  input.value = '';
}


function decode() {
  var input = document.getElementById('decodetext');
  var output = document.getElementById('encodetext');

  var decoded = window.atob(input.value);
  output.value = decoded;
  input.value = '';
}
