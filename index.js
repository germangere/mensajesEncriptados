const input = document.querySelector('textarea');
const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const resultadoH = document.querySelector('#resultado h3');
const resultadoP = document.querySelector('#resultado p');
const done = document.querySelector('.done');
const copiar = document.getElementById('copiar');
const limpiar = document.querySelector('.limpiar span');
let copyText;

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
  if (input.value === '') {
    resultadoH.innerText = 'Error';
    resultadoP.innerText = 'Debes ingresar un texto a procesar';
    return;
  }
  const texto = input.value.toLowerCase();
  const data = encriptar(texto);
  copyText = data;
  resultadoH.innerText = 'Resultado:';
  resultadoP.innerText = data;
  done.style.display = 'none';
  copiar.style.display = 'block';
  limpiar.style.visibility = 'visible';
}

btnDesencriptar.onclick = (e) => {
  e.preventDefault();
  if (input.value === '') {
    resultadoH.innerText = 'Error';
    resultadoP.innerText = 'Debes ingresar un texto a procesar';
    return;
  }
  const texto = input.value.toLowerCase();
  const data = desencriptar(texto);
  copyText = data;
  resultadoH.innerText = 'Resultado:';
  resultadoP.innerText = data;
  done.style.display = 'none';
  copiar.style.display = 'block';
  limpiar.style.visibility = 'visible';
}

copiar.onclick = () => {
  navigator.clipboard.writeText(copyText)
    .then(() => {
      copiar.style.display = 'none';
      done.style.display = 'block';
    }), () => {
      alert('No se pudo copiar el texto')
    }
}

limpiar.onclick = () => {
  limpiar.style.visibility = 'hidden';
  resultadoH.innerText = 'Ningún mensaje encontrado';
  resultadoP.innerText = 'Ingresa el texto a procesar';
  input.value = '';
  copiar.style.display = 'none';
  done.style.display = 'none';
}