import { editarCurso } from "./editarCurso.js"; // Asegúrate de que esta función esté correctamente definida
import { tableCursos } from "./viewCursos.js";

export function createEditCourseModal(course) {
    let existDiv = document.getElementById('myModal-curso-edit');
    if (existDiv) {
        existDiv.style.display = 'block';
        existDiv.innerHTML = '';
    } else {
        existDiv = document.createElement('div');
        existDiv.id = 'myModal-curso-edit';
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
        { id: 'disponibilidad', label: 'Disponibilidad', type: 'text', required: true },
        { id: 'horario', label: 'Horario', type: 'text', required: true }
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

        if (course && course[field.id]) {
            input.value = course[field.id];
        }

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Actualizar Curso';
    form.appendChild(submitButton);

    modalContent.appendChild(closeModal);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(form);

    existDiv.appendChild(modalContent);

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const courseData = {};
        courseData.id_curso = course.id_curso;

        fields.forEach(field => {
            const inputElement = document.getElementById(field.id);
            courseData[field.id] = inputElement.value.trim();
        });

        editarCurso(courseData)
            .then(response => {
                console.log('Curso actualizado con éxito:', response);
                existDiv.style.display = 'none';
                tableCursos();
            })
            .catch(error => {
                console.error('Error al actualizar curso:', error);
            });
    });

    existDiv.style.display = 'block';
}
