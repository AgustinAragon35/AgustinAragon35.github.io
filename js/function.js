
const btn_contacto = document.getElementById('btn_bloqueContacto');
const btn_tecnologias = document.getElementById('btn_bloqueTecnologias');
const btn_redesSociales = document.getElementById('btn_bloqueRedesSociales');


const bloqueContacto = document.getElementById('bloqueContacto');
const bloqueTecnologias = document.getElementById('bloqueTecnologias');
const bloqueRedesSociales = document.getElementById('bloqueRedesSociales');


btn_contacto.addEventListener('click', function () {
    bloqueContacto.classList.toggle('ocultar_bloque');
})

btn_tecnologias.addEventListener('click', function () {
    bloqueTecnologias.classList.toggle('ocultar_bloque');
})

btn_redesSociales.addEventListener('click', function () {
    bloqueRedesSociales.classList.toggle('ocultar_bloque');
})