const boton1 = document.querySelector("#boton1");
const boton3 = document.querySelector("#boton3");
const boton2 = document.querySelector("#boton2");
const body = document.body;
const section = document.querySelector('section')


/*  la propagación se refiere al proceso mediante el cual un evento se propaga o afecta a muchos elementos del dom
     por ejemplo al añadirle una función de tipo click al elemento body, esta servirá tambinén para los elementos que tenga dentro del body
     por ejemplo si le añadimos cambiar color da igual donde clickeemos (ya sea un boton un input o nada) que ele evento se activará ya que el body
     es practicamente toda la página web */

function convertirAzul(e) {
    boton1.style.backgroundColor = "blue";
}

body.addEventListener('click', convertirAzul);


function SaberTarget(e) {
    console.log(`Has dado clock en el elemento ${e.target.nodeName}`)//o .target.id o .target.className); // asi podemos saber muchas cosas como el target del evento su clase su id
}

body.addEventListener('click', SaberTarget);

body.addEventListener('click', SaberTarget);
