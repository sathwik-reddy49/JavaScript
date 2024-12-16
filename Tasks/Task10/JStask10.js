// Mouse Events
let mouseEve = document.getElementById('img');
mouseEve.onmouseover = function() {
    mouseEve.src = 'https://imgs.search.brave.com/IMVACvRhajY-lQpxN4XUdtERp3CPk88qan3lRrYcX2g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpqbGxOVGRp/TTJRdFlqUTBOaTAw/WkdNMUxXRmxZbVV0/TldZMFlqTXpZV0l4/T1RZeFhrRXlYa0Zx/Y0djQC5qcGc';
}

mouseEve.onmouseout = function() {
    mouseEve.src = 'https://imgs.search.brave.com/5D2q_8wSrQGQRFzUdcOTtC0Ag8g9X-RpAqXDa_l_zN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpqSTJOR1F4/TUdNdFl6UTVNaTAw/TlRCakxXSmhZemt0/TWpFMlpEa3hPVFUz/WVdaalhrRXlYa0Zx/Y0djQC5qcGc';
}

mouseEve.onclick = function() {
    alert('Image clicked!');
}

// Keyboard Events
let keyboardEve = document.querySelector('input');
keyboardEve.onkeypress = function() {
    document.body.style.backgroundColor = 'green';
}

keyboardEve.onkeydown = function() {
    document.body.style.backgroundColor = 'red';
}

keyboardEve.onkeyup = function() {
    document.body.style.backgroundColor = 'yellow';
}