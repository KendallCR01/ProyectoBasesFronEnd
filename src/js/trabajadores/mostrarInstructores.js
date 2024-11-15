import { getInstructores } from "./traerSoloInstructores.js";

import { obtenerImagenPorNombre } from "../traerImagines.js";




export const viewInstructores = async () => {

    const trabajadores = await getInstructores();
    // Selecciona el área principal donde se mostrará la sección de instructores
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = ''; // Limpia el contenido anterior

    // Crea el contenedor principal para la sección de instructores
    const divVistaInstructores = document.createElement('div');
    divVistaInstructores.classList.add('viewInstructores');

    // Define los datos de cada culturista famoso como instructores
   
    // Itera sobre los instructores (culturistas) para crear un cuadro para cada uno
    trabajadores.forEach(instructor => {
        // Crea un cuadro para cada instructor
        const divInstructor = document.createElement('div');
        divInstructor.classList.add('instructor');
        divInstructor.id = `instructor-${instructor.cod_instructor}`;

        // Imagen del instructor
        const img = document.createElement('img');
        img.src = obtenerImagenPorNombre(instructor.nombre); // Ruta de la foto
        img.alt = `${instructor.nombre}`; // Texto alternativo
        img.classList.add('fotoInstructor'); // Clase para la foto

        console.log(instructor.foto_url);

        // Nombre del instructor
        const nombre = document.createElement('h3');
        nombre.textContent = instructor.nombre + ' ' + instructor.apellido1;

        // Edad del instructor
        const email = document.createElement('p');
        email.textContent = `Email: ${instructor.e_mail}`;

        // Agrega la imagen, nombre y edad al cuadro del instructor
        divInstructor.appendChild(img);
        divInstructor.appendChild(nombre);
        divInstructor.appendChild(email);

        // Agrega el cuadro del instructor al contenedor principal de instructores
        divVistaInstructores.appendChild(divInstructor);
    });

    // Agrega el contenedor principal de instructores al área principal
    divPrincipal.appendChild(divVistaInstructores);
};
