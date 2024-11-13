
import { tableMaquinas } from "../maquinas/viewMaquinas.js";
import { tableRutinas } from "../rutinas/viewRutinas.js";
import { tableCursos } from "../cursos/viewCursos.js";
import { tableClientes } from "../clientes/viewClientes.js";
import { tableHistorialCursos } from "../historialCurso/viewHistorialCursos.js";
import { tableMembresia } from "../membresia/viewMembresia.js";


export const viewMantenimiento = () => {
    // Selecciona el área principal donde se mostrará la sección de servicios
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = ''; // Limpia el contenido anterior

    // Crea el contenedor principal para la sección de servicios
    const divVistaServicios = document.createElement('div');
    divVistaServicios.classList.add('viewServicios');

    // Define los datos de cada subopción para servicios
    const servicios = [
        { id: 'Clientes', title: 'Clientes', description: 'Sistema de Clientes.' },
        { id: 'Cursos', title: 'Cursos', description: 'Sistema de cursos.' },
        { id: 'Maquinas', title: 'Máquinas', description: 'Sistema de maquinas.' },
        { id: 'Rutinas', title: 'Rutinas', description: 'Sistema de Rutinas' },
        { id: 'Historial', title: 'Historial de Cursos', description: 'Sistema Historial de todos los cursos' },
        { id: 'Membresias', title: 'Membresias', description: 'Sistema de membresias de Cliente' },
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


        if (servicio.id === 'Clientes') {
            divServicio.addEventListener('click', (event) => {
                event.preventDefault();
                try {
                    tableClientes(); // Llama a la función para mostrar instructores
                } catch (error) {
                    console.log(error.message);
                }
            }); 
        }

        if (servicio.id === 'Maquinas') {
            divServicio.addEventListener('click', (event) => {
                event.preventDefault();
                try {
                    tableMaquinas(); // Llama a la función para mostrar instructores
                } catch (error) {
                    console.log(error.message);
                }
            }); 
        }

        if (servicio.id === 'Cursos') {
            divServicio.addEventListener('click', (event) => {
                event.preventDefault();
                try {
                    tableCursos(); // Llama a la función para mostrar instructores
                } catch (error) {
                    console.log(error.message);
                }
            }); 
        }

        if (servicio.id === 'Rutinas') {
            divServicio.addEventListener('click', (event) => {
                event.preventDefault();
                try {
                    tableRutinas(); // Llama a la función para mostrar instructores
                } catch (error) {
                    console.log(error.message);
                }
            }); 
        }

        if (servicio.id === 'Historial') {
            divServicio.addEventListener('click', (event) => {
                event.preventDefault();
                try {
                    tableHistorialCursos(); // Llama a la función para mostrar instructores
                } catch (error) {
                    console.log(error.message);
                }
            }); 
        }

        if (servicio.id === 'Membresias') {
            divServicio.addEventListener('click', (event) => {
                event.preventDefault();
                try {
                    tableMembresia(); // Llama a la función para mostrar instructores
                } catch (error) {
                    console.log(error.message);
                }
            }); 
        }

        
    });

    
        

   





    // Agrega el contenedor principal de servicios al área principal
    divPrincipal.appendChild(divVistaServicios);
};