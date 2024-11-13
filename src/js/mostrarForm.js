// viewInscripcion.js

import { inscribirseFormulario } from "./clientes/inscribirClientes.js";
import { getCursosDisponibles } from "./cursos/traerCursosDisponibles.js";
import { getInstructores } from "./trabajadores/traerSoloInstructores.js";

export const viewInscripcion = async () => {
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = ''; // Limpia el contenido anterior

    // Contenedor principal de la vista de inscripción
    const divVistaInscripcion = document.createElement('div');
    divVistaInscripcion.classList.add('viewInscripcion');

    // Título de la vista
    const titulo = document.createElement('h2');
    titulo.textContent = 'Formulario de Inscripción';
    titulo.classList.add('tituloInscripcion');

    // Formulario de inscripción
    const form = document.createElement('form');
    form.classList.add('formulario-inscripcion');

    // Campo de contraseña (agregado al principio)
    const inputContrasena = document.createElement('input');
    inputContrasena.type = 'text';
    inputContrasena.placeholder = 'Contraseña';
    inputContrasena.required = true;
    inputContrasena.classList.add('input');

    // Campo de cédula
    const inputCedula = document.createElement('input');
    inputCedula.type = 'text';
    inputCedula.placeholder = 'Cédula';
    inputCedula.required = true;
    inputCedula.classList.add('input');

    // Campo de nombre
    const inputNombre = document.createElement('input');
    inputNombre.type = 'text';
    inputNombre.placeholder = 'Nombre Completo';
    inputNombre.required = true;
    inputNombre.classList.add('input');

    // Campo de primer apellido
    const inputApellido1 = document.createElement('input');
    inputApellido1.type = 'text';
    inputApellido1.placeholder = 'Primer Apellido';
    inputApellido1.required = true;
    inputApellido1.classList.add('input');

    // Campo de segundo apellido
    const inputApellido2 = document.createElement('input');
    inputApellido2.type = 'text';
    inputApellido2.placeholder = 'Segundo Apellido';
    inputApellido2.required = true;
    inputApellido2.classList.add('input');

    // Campo de dirección
    const inputDireccion = document.createElement('input');
    inputDireccion.type = 'text';
    inputDireccion.placeholder = 'Dirección';
    inputDireccion.required = true;
    inputDireccion.classList.add('input');

    // Campo de correo electrónico
    const inputCorreo = document.createElement('input');
    inputCorreo.type = 'email';
    inputCorreo.placeholder = 'Correo Electrónico';
    inputCorreo.required = true;
    inputCorreo.classList.add('input');

    // Campo de celular
    const inputCelular = document.createElement('input');
    inputCelular.type = 'tel';
    inputCelular.placeholder = 'Celular';
    inputCelular.required = true;
    inputCelular.classList.add('input');

    // Campo de teléfono de habitación
    const inputTelHabitacion = document.createElement('input');
    inputTelHabitacion.type = 'tel';
    inputTelHabitacion.placeholder = 'Teléfono de Habitación';
    inputTelHabitacion.required = true;
    inputTelHabitacion.classList.add('input');

    // Label y campo de fecha de inscripción
    const labelFecha = document.createElement('label');
    labelFecha.textContent = 'Fecha de Inscripción';
    labelFecha.classList.add('label');
    
    const inputFechaInscripcion = document.createElement('input');
    inputFechaInscripcion.type = 'date';
    inputFechaInscripcion.required = true;
    inputFechaInscripcion.classList.add('input');

    // Campo para horas
    const inputHoras = document.createElement('input');
    inputHoras.type = 'number';
    inputHoras.placeholder = 'Horas';
    inputHoras.required = true;
    inputHoras.classList.add('input');
    inputHoras.min = 1; // Asegura que el valor mínimo sea 1

    // Selección de curso
    const selectCurso = document.createElement('select');
    selectCurso.classList.add('select');
    selectCurso.required = true;

    const optionDefaultCurso = document.createElement('option');
    optionDefaultCurso.value = '';
    optionDefaultCurso.textContent = 'Seleccione un curso';
    optionDefaultCurso.disabled = true;
    optionDefaultCurso.selected = true;
    selectCurso.appendChild(optionDefaultCurso);

    // Obtener los cursos desde la base de datos
    const cursos = await getCursosDisponibles();

    // Si se obtienen cursos, agregarlos al select
    if (cursos.length > 0) {
        cursos.forEach(curso => {
            const option = document.createElement('option');
            option.value = curso.id_curso; // Asignamos el id_curso como el valor del option
            option.textContent = `${curso.descripcion} - ${curso.horario}`;
            selectCurso.appendChild(option);
        });
    }

    // Selección de instructor
    const selectInstructor = document.createElement('select');
    selectInstructor.classList.add('select');
    selectInstructor.required = true;

    const optionDefaultInstructor = document.createElement('option');
    optionDefaultInstructor.value = '';
    optionDefaultInstructor.textContent = 'Seleccione un instructor';
    optionDefaultInstructor.disabled = true;
    optionDefaultInstructor.selected = true;
    selectInstructor.appendChild(optionDefaultInstructor);

    // Obtener los instructores desde la base de datos
    const instructores = await getInstructores();

    // Si se obtienen instructores, agregarlos al select
    if (instructores.length > 0) {
        instructores.forEach(instructor => {
            const option = document.createElement('option');
            option.value = instructor.cod_instructor; // Asignamos el cod_instructor como el valor del option
            option.textContent = `${instructor.nombre} ${instructor.apellido1} ${instructor.apellido2}`;
            selectInstructor.appendChild(option);
        });
    }

    // Botón de enviar
    const btnEnviar = document.createElement('button');
    btnEnviar.type = 'submit';
    btnEnviar.textContent = 'Inscribirse';
    btnEnviar.classList.add('btn-enviar');

    // Función de validación y envío
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        const contrasena = inputContrasena.value.trim();  // Obtenemos la contraseña
        const cedula = inputCedula.value.trim();
        const nombre = inputNombre.value.trim();
        const apellido1 = inputApellido1.value.trim();
        const apellido2 = inputApellido2.value.trim();
        const direccion = inputDireccion.value.trim();
        const e_mail = inputCorreo.value.trim();
        const celular = inputCelular.value.trim();
        const tel_habitacion = inputTelHabitacion.value.trim();
        const fecha_inscripcion = inputFechaInscripcion.value.trim();
        const horas = parseInt(inputHoras.value.trim());
        const cursoId = selectCurso.value; 
        const instructorId = selectInstructor.value; 

        // Validación básica de que los campos estén completos
        if (!contrasena || !cedula || !nombre || !apellido1 || !apellido2 || !direccion || !e_mail || !celular || !tel_habitacion || !fecha_inscripcion || !cursoId || !instructorId || !horas) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        const formData = {
            cedula,
            nombre,
            apellido1,
            apellido2,
            direccion,
            e_mail,
            fecha_inscripcion,
            celular,
            tel_habitacion,
            contrasena,
            id_curso: cursoId,
            instructor: instructorId,
            horas
        };

        const result = await inscribirseFormulario(formData);

        if (result.success) {
            alert('Inscripción exitosa');
        } else {
            alert(`Error: ${result.message}`);
        }

        // Resetear el formulario después de la inscripción exitosa
        form.reset();
    });


    form.appendChild(inputCedula);
    form.appendChild(inputContrasena);
    form.appendChild(inputNombre);
    form.appendChild(inputApellido1);
    form.appendChild(inputApellido2);
    form.appendChild(inputDireccion);
    form.appendChild(inputCorreo);
    form.appendChild(inputCelular);
    form.appendChild(inputTelHabitacion);
    form.appendChild(labelFecha);
    form.appendChild(inputFechaInscripcion);
    form.appendChild(inputHoras);
    form.appendChild(selectCurso);
    form.appendChild(selectInstructor);
    form.appendChild(btnEnviar);

    // Agregar título y formulario al contenedor
    divVistaInscripcion.appendChild(titulo);
    divVistaInscripcion.appendChild(form);
    divPrincipal.appendChild(divVistaInscripcion);
};
