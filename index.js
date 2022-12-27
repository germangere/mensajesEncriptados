const input = document.querySelector('textarea');
const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const resultado = document.getElementById('resultado');


function encriptar(frase) {
  let encriptado = frase.replaceAll('e', 'enter');
  encriptado = encriptado.replaceAll('i', 'imes');
  encriptado = encriptado.replaceAll('a', 'ai');
  encriptado = encriptado.replaceAll('o', 'ober');
  encriptado = encriptado.replaceAll('u', 'ufat');
  return encriptado;
}

function desencriptar(frase) {
  let encriptado = frase.replaceAll('ai', 'a');
  encriptado = encriptado.replaceAll('enter', 'e');
  encriptado = encriptado.replaceAll('imes', 'i');
  encriptado = encriptado.replaceAll('ober', 'o');
  encriptado = encriptado.replaceAll('ufat', 'u');
  return encriptado;
}

btnEncriptar.onclick = (e) => {
  e.preventDefault();
  const texto = input.value.toLowerCase();
  const data = encriptar(texto);
  resultado.innerHTML = `<h3>Resultado:</h3><p>${data}</p>`
}

btnDesencriptar.onclick = (e) => {
  e.preventDefault();
  const texto = input.value.toLowerCase();
  const data = desencriptar(texto);
  resultado.innerHTML = `<h3>Resultado:</h3><p>${data}</p>`
}