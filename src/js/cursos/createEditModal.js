import { editarCurso } from "./editarCurso.js"; // Asegúrate de que esta función esté correctamente definida
import { tableCursos } from "./viewCursos.js";

export function createEditCourseModal(course) {
    let existDiv = document.getElementById('myModal-curso');
    if (existDiv) {
        existDiv.style.display = 'block';// Limpiar contenido anterior
    } else {
        // Si no existe, crea el contenedor del modal
        existDiv = document.createElement('div');
        existDiv.id = 'myModal-curso';
        existDiv.classList.add('modal-curso');
        document.body.appendChild(existDiv);
    }

    // Crear contenido del modal
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content-curso');

    // Botón de cerrar (X)
    const closeModal = document.createElement('span');
    closeModal.classList.add('close-curso');
    closeModal.innerHTML = '&times;';
    closeModal.onclick = function () {
        existDiv.style.display = 'none';
    };

    // Título del modal
    const modalTitle = document.createElement('h2');
    modalTitle.textContent = 'Editar Curso';
    modalTitle.style.color = 'black';

    // Formulario dentro del modal
    const form = document.createElement('form');
    form.id = 'editCourseForm';

    // Campos de entrada para curso
    const fields = [
        { id: 'descripcion', label: 'Descripción', type: 'text', required: true },
        { id: 'horario', label: 'Horario', type: 'text', required: true },
        { id: 'disponibilidad', label: 'Disponibilidad', type: 'text', required: true }
    ];

    fields.forEach(field => {
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;

        const input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.id;
        input.required = field.required;

        // Pre-cargar valores del curso si estamos editando
        if (course && course[field.id]) {
            input.value = course[field.id];
        }

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
    });

    // Botón de envío
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Actualizar Curso';
    form.appendChild(submitButton);

    // Añadir el formulario al contenido del modal
    modalContent.appendChild(closeModal);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(form);

    // Añadir el contenido del modal al contenedor del modal
    existDiv.appendChild(modalContent);

    // Manejo del evento submit para el formulario
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const courseData = {};
        fields.forEach(field => {
            const inputElement = document.getElementById(field.id);
            courseData[field.id] = inputElement.value.trim(); // Eliminar espacios en blanco innecesarios
        });

        // Asegúrate de incluir el ID del curso para la actualización
        courseData.id_curso = course.id_curso;

        // Enviar los datos al backend para editar
        editarCurso(courseData)
            .then(response => {
                console.log('Curso actualizado con éxito:', response);
                existDiv.style.display = 'none'; // Cerrar el modal después de enviar
                tableCursos();
            })
            .catch(error => {
                console.error('Error al actualizar curso:', error);
            });
    });

    existDiv.style.display = 'block'; // Mostrar el modal
}
