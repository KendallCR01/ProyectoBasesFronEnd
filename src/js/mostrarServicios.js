import { viewInstructores } from "../js/trabajadores/mostrarInstructores.js";
import { viewMaquinas } from "../js/maquinas/mostrarMaquinas.js";
import { viewCursos } from "../js/cursos/mostrarCursos.js";
import { viewInscripcion } from "../js/mostrarForm.js";

export const viewServicios = () => {
    // Selecciona el área principal donde se mostrará la sección de servicios
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = ''; // Limpia el contenido anterior

    // Crea el contenedor principal para la sección de servicios
    const divVistaServicios = document.createElement('div');
    divVistaServicios.classList.add('viewServicios');

    // Define los datos de cada subopción para servicios
    const servicios = [
        { id: 'inscripcion', title: 'Inscripción', description: 'Formulario para inscripción en cursos.' },
        { id: 'cursos', title: 'Cursos', description: 'Detalles de los cursos del gimnasio.' },
        { id: 'maquinas', title: 'Máquinas', description: 'Lista de máquinas y sus descripciones.' },
        { id: 'instructores', title: 'Instructores', description: 'Información sobre los instructores y su experiencia.' }
    ];

    // Itera sobre los servicios para crear un cuadro para cada uno
    servicios.forEach(servicio => {
        // Crea un cuadro para cada servicio
        const divServicio = document.createElement('div');
        divServicio.classList.add('servicio');
        divServicio.id = servicio.id;

        // Título del servicio
        const title = document.createElement('h2');
        title.textContent = servicio.title;

        // Descripción del servicio
        const description = document.createElement('p');
        description.textContent = servicio.description;

        // Agrega el título y descripción al cuadro del servicio
        divServicio.appendChild(title);
        divServicio.appendChild(description);

        // Agrega el cuadro del servicio al contenedor principal de servicios
        divVistaServicios.appendChild(divServicio);


        if (servicio.id === 'instructores') {
            divServicio.addEventListener('click', (event) => {
                event.preventDefault();
                try {
                    viewInstructores(); // Llama a la función para mostrar instructores
                } catch (error) {
                    console.log(error.message);
                }
            }); 
        }

        if (servicio.id === 'maquinas') {
            divServicio.addEventListener('click', (event) => {
                event.preventDefault();
                try {
                    viewMaquinas(); // Llama a la función para mostrar instructores
                } catch (error) {
                    console.log(error.message);
                }
            }); 
        }

        if (servicio.id === 'cursos') {
            divServicio.addEventListener('click', (event) => {
                event.preventDefault();
                try {
                    viewCursos(); // Llama a la función para mostrar instructores
                } catch (error) {
                    console.log(error.message);
                }
            }); 
        }
        if (servicio.id === 'inscripcion') {
            divServicio.addEventListener('click', (event) => {
                event.preventDefault();
                try {
                    viewInscripcion(); // Llama a la función para mostrar instructores
                } catch (error) {
                    console.log(error.message);
                }
            }); 
        }
        
    });

    
        

   





    // Agrega el contenedor principal de servicios al área principal
    divPrincipal.appendChild(divVistaServicios);
};