const botonAlert = document.querySelector('#botonAlert');
const usuario = document.querySelector('#usuario');
const input1 = document.querySelector('#input1')
const botonInput = document.querySelector('#botonInput')


//Las funciones independientes son aquellas que se definen fuera del addeventlister y las anónimas las que se declaran dentro

//Es recomendable usar funciones independientes(sobretodo si son más complejas)
// LAS FUNCIONES INDEPNEDINTES PUEDEN SER ELIMINADAS YA QUE ESTAN YA HAN SIDO DECLARADAS PREVIAMNETE
// MIENTRAS QUE LAS ANÓNIMAS NO SE PUDEN ELIMINAR NI MANIPULAR YA QUE ESTAS SON ESPONTÁNEAS, Y NO SE GUDRDAN
var r1; //declaramos la variable fuer aparta que tenga alcance local


function alerta() {
    alert('Has seleccionado el botón de alerta');
}


botonAlert.addEventListener('click', alerta);
botonAlert.removeEventListener('click', alerta) //al estar definida y guardad tienen alcance global y se puede eliminar

botonAlert.addEventListener('click', function () {
    alert('Has seleccionado el botón de alerta');
}
);
botonAlert.removeEventListener('click', function () {
    alert('Has seleccionado el botón de alerta'); //al no estar definida y guarda tiene un alcance local y no se puede eliminar porque no existe digamos
}
);

input1.addEventListener('change', function (e) { //usamos r1 opara guardae el valor del target(el valor es lo que escribimos)
    r1 = (e.target.value);                       //El evento change se activa cuando el valor de un elemento lo cambiamos y cuando quitas el enfoque sobre el elemento

})
botonInput.addEventListener('click', function () {
    usuario.textContent = r1 //Hacemos que el contenido del titulo sea r1(lo que hemos introducio en el input) gracias al evento click cuando le damos al boton se activa
})