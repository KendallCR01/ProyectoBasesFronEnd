import { login } from "../js/mostrarLogin.js";
import { viewServicios } from "../js/mostrarServicios.js";
import { viewContactos } from "../js/mostrarContactos.js";

export const viewInicio = () => {
    // Selecciona el elemento de cabecera donde irá el menú de navegación
    const divHeader = document.querySelector(".header");

    // Limpia el contenido del encabezado
    divHeader.innerHTML = '';

    // Crea el contenedor del menú de navegación
    const divNav = document.createElement('nav');
    const divUl = document.createElement('ul');

    // Crea los elementos de la lista de navegación
    const divLiInicio = document.createElement('li');
    const divLiContactos = document.createElement('li');
    const divLiServicios = document.createElement('li');
    const divLiIngreso = document.createElement('li');

    // Agrega el texto de cada opción del menú
    divLiInicio.textContent = 'INICIO';
    divLiContactos.textContent = 'CONTACTOS';
    divLiServicios.textContent = 'SERVICIOS';
    divLiIngreso.textContent = 'INGRESO';

    // Añade cada elemento de la lista al contenedor de la lista
    divUl.appendChild(divLiInicio);
    divUl.appendChild(divLiContactos);
    divUl.appendChild(divLiServicios);
    divUl.appendChild(divLiIngreso);

    // Añade la lista al menú de navegación y el menú a la cabecera
    divNav.appendChild(divUl);
    divHeader.appendChild(divNav);

    // Selecciona el área principal donde irá el contenido de la vista
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = '';

    // Crea el contenedor para la vista de inicio
    const divVista = document.createElement('div');
    divVista.classList.add('viewInicio');

    // Crea los elementos de texto con la información del gimnasio
    const title = document.createElement('h1');
    title.textContent = 'Bienvenido a GYM LA';

    const infoDireccion = document.createElement('p');
    infoDireccion.textContent = 'Dirección: Calle Principal 123, Ciudad de Fe, Los Angeles';

    const infoHorario = document.createElement('p');
    infoHorario.textContent = 'Horario: Lunes a Viernes, 6:00 am - 10:00 pm';

    // Añade los elementos de información al contenedor de la vista
    divVista.appendChild(title);
    divVista.appendChild(infoDireccion);
    divVista.appendChild(infoHorario);

    // Añade el contenedor de la vista al área principal
    divPrincipal.appendChild(divVista);


    setTimeout(() => {
        divVista.classList.add('viewInicioActive'); // Añade la clase activa
    }, 10);

    divLiIngreso.addEventListener('click', (event) => {
        event.preventDefault();
        try {
            login();
        } catch (error) {
            console.log(error.message);

        }

    })

    divLiInicio.addEventListener('click', (event) => {
        event.preventDefault();
        try {
            viewInicio(); // Recarga la vista de inicio
        } catch (error) {
            console.log(error.message);

        }

    });

    divLiServicios.addEventListener('click', (event) => {
        event.preventDefault();
        try {
            viewServicios();
        } catch (error) {
            console.log(error.message);

        } // Recarga la vista de inicio
    });

    divLiContactos.addEventListener('click', (event) => {
        event.preventDefault();
        try {
            viewContactos();
        } catch (error) {
            console.log(error.message);

        } // Recarga la vista de inicio
    });


}