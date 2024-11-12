//FormInscripcionPrimero

export const viewInscripcion = () => {
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = ''; // Limpia el contenido anterior

    // Contenedor principal de la vista de inscripción
    const divVistaInscripcion = document.createElement('div');
    divVistaInscripcion.classList.add('viewInscripcion');

    // Lista de cursos estática
    const cursos = [
        { id: '001', nombre: 'Yoga para principiantes', horario: 'Lunes 10:00 AM', disponibilidad: true },
        { id: '002', nombre: 'Entrenamiento Funcional', horario: 'Martes 6:00 PM', disponibilidad: false },
        { id: '003', nombre: 'Pilates', horario: 'Miércoles 9:00 AM', disponibilidad: true },
    ];

    // Título de la vista
    const titulo = document.createElement('h2');
    
    titulo.textContent = 'Formulario de Inscripción';
    titulo.classList.add('tituloInscripcion');

    // Formulario de inscripción
    const form = document.createElement('form');
    form.classList.add('formulario-inscripcion');

    // Campo de nombre
    const inputNombre = document.createElement('input');
    inputNombre.type = 'text';
    inputNombre.placeholder = 'Nombre Completo';
    inputNombre.required = true;
    inputNombre.classList.add('input');

    // Campo de correo
    const inputCorreo = document.createElement('input');
    inputCorreo.type = 'email';
    inputCorreo.placeholder = 'Correo Electrónico';
    inputCorreo.required = true;
    inputCorreo.classList.add('input');

    // Selección de curso
    const selectCurso = document.createElement('select');
    selectCurso.classList.add('select');
    selectCurso.required = true;

    const optionDefault = document.createElement('option');
    optionDefault.value = '';
    optionDefault.textContent = 'Seleccione un curso';
    optionDefault.disabled = true;
    optionDefault.selected = true;
    selectCurso.appendChild(optionDefault);

    cursos.forEach(curso => {
        const option = document.createElement('option');
        option.value = curso.id;
        option.textContent = `${curso.nombre} - ${curso.horario}`;
        selectCurso.appendChild(option);
    });

    // Botón de enviar
    const btnEnviar = document.createElement('button');
    btnEnviar.type = 'submit';
    btnEnviar.textContent = 'Inscribirse';
    btnEnviar.classList.add('btn-enviar');

    // Función de validación y envío
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = inputNombre.value.trim();
        const correo = inputCorreo.value.trim();
        const cursoId = selectCurso.value;

        // Validación de inscripción existente (simulada)
        const usuarioExistente = false; // Cambia esto a `true` para probar la validación

        // Valida que el curso esté disponible
        const cursoSeleccionado = cursos.find(curso => curso.id === cursoId);

        if (usuarioExistente) {
            alert("Este usuario ya está inscrito.");
            return;
        }

        if (cursoSeleccionado && !cursoSeleccionado.disponibilidad) {
            alert("Este curso no está disponible en el horario seleccionado.");
            return;
        }

        alert("Inscripción realizada exitosamente.");
        form.reset();
    });

    // Agrega los campos al formulario
    form.appendChild(inputNombre);
    form.appendChild(inputCorreo);
    form.appendChild(selectCurso);
    form.appendChild(btnEnviar);

    // Agrega el título y el formulario al contenedor principal de inscripción
    divVistaInscripcion.appendChild(titulo);
    divVistaInscripcion.appendChild(form);

    // Agrega el contenedor principal al área principal
    divPrincipal.appendChild(divVistaInscripcion);
};
