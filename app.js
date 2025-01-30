let amigos = [];


// Función para agregar un amigo a la lista
function agregarAmigo() {

    // Obtener el nombre del amigo ingresado por el usuario
    let ingresoAmigo = document.getElementById('amigo').value;

    // Validar que el campo de entrada no esté vacío
    if (ingresoAmigo === '') {
        alert('Debes ingresar el nombre de un amigo');
        return;


    }

    // Añadir el nombre a la lista de amigos
    amigos.push(ingresoAmigo);

    // Limpiar el campo de entrada después de añadir el nombre
    document.getElementById('amigo').value = '';

    // Actualizar la lista de amigos
    actualizarAmigo();

}
// Función para actualizar la lista de amigos
function actualizarAmigo() {

    // Obtener el elemento de la lista de amigos
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista de amigos
    listaAmigos.innerHTML = '';

    // Recorrer la lista de amigos y añadir cada uno a la lista
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];

        // Crear un elemento de lista
        let elementoLista = document.createElement('li');

        // Añadir el nombre del amigo como texto del elemento de lista
        elementoLista.innerText = amigo;

        // Añadir el elemento de lista a la lista de amigos
        listaAmigos.appendChild(elementoLista);
    }
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert('Debes ingresar al menos un amigo');
        return;
    }
    // Obtener un índice aleatorio para seleccionar un amigo
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Seleccionar un amigo aleatorio
    let amigoSorteado = amigos[indiceAleatorio];

    // Ocultar la lista de amigos
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.style.display = "none";


    // Mostrar el amigo sorteado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    // Crear un elemento de lista con el amigo sorteado
    let li = document.createElement('li');
    li.textContent = `¡El amigo sorteado es: ${amigoSorteado}!`;
    resultado.appendChild(li);
}



