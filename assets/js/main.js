(function () {
    let navbar = document.querySelector('#navbar');
    let hamburger = document.querySelector('#hamburger');
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
})()
// FIJADO: querySelector selecciona el elemento directo para poder usar classList
let links = document.querySelector('.links');
let menu = document.getElementById('hamburger');
let container = document.querySelector('#navbar div');

let queryMobile = window.matchMedia('(max-width: 576px)');

function moveLinks(query) {
    if (query.matches) {
        // Celular: Mueve el 'ul' al final del div, quedando justo debajo del botón ☰
        container.insertAdjacentElement("afterend", links);

        // También puedes usar: container.appendChild(links); (hace exactamente lo mismo)
    } else {
        // Escritorio: Mueve el 'ul' de regreso antes del botón ☰ para restaurar el diseño
        menu.insertAdjacentElement("beforebegin", links);
    }
}

// Ejecutamos al cargar la página
moveLinks(queryMobile);

// Escuchamos los cambios de tamaño de pantalla
queryMobile.addEventListener('change', moveLinks);
