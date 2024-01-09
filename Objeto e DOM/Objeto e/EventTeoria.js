const boton1 = document.querySelector('#boton1');
const boton2 = document.querySelector('#boton2');
const usuario = document.querySelector('#usuario');
const input1 = document.querySelector('#input1')
const botonInput = document.querySelector('#botonInput')

/*En JavaScript, el objeto event se utiliza en el contexto de eventos del navegador. Cuando ocurre un evento, como hacer clic en un elemento HTML,
enviar un formulario o desplazarse por una página, se genera un objeto event que contiene información sobre ese evento específico.

El objeto event en JavaScript tiene propiedades y métodos que permiten acceder a información relevante sobre el evento. Algunas propiedades comunes incluyen:

event.target: hace referencia al elemento HTML en el que se originó el evento.
event.type: indica el tipo de evento que ocurrió, como "click", "submit", "scroll", etc.
event.preventDefault(): método que se utiliza para prevenir el comportamiento predeterminado del evento, como evitar que un enlace se abra o que un formulario se envíe.
event.keyCode o event.key: propiedades que contienen información sobre la tecla presionada durante un evento de teclado. */

var r1; //declaramos la variable fuer aparta que tenga alcance local

input1.addEventListener('change', function (e) { //usamos r1 opara guardae el valor del target(el valor es lo que escribimos)
    r1 = (e.target.value);                       //El evento change se activa cuando el valor de un elemento lo cambiamos y cuando quitas el enfoque sobre el elemento

})
botonInput.addEventListener('click', function () {
    usuario.textContent = r1 //Hacemos que el contenido del titulo sea r1(lo que hemos introducio en el input) gracias al evento click cuando le damos al boton se activa
})