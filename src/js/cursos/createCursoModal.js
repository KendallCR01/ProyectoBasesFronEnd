import { agregarPostCurso } from "./agregarCursoPeticion.js";
import { tableCursos } from "./viewCursos.js"

export function createAddCourseModal() {
    let existDiv = document.getElementById('myModal-curso-add');
    if (existDiv) {
        existDiv.style.display = 'block';
        existDiv.innerHTML = '';
    } else {
        existDiv = document.createElement('div');
        existDiv.id = 'myModal-curso-add';
        existDiv.classList.add('modal-curso');
        document.body.appendChild(existDiv);
    }

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content-curso');

    const closeModal = document.createElement('span');
    closeModal.classList.add('close-curso');
    closeModal.innerHTML = '&times;';
    closeModal.onclick = function () {
        existDiv.style.display = 'none';
    };

    const modalTitle = document.createElement('h2');
    modalTitle.textContent = 'Agregar Curso';
    modalTitle.style.color = 'black';

    const form = document.createElement('form');
    form.id = 'addCourseForm';

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

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Agregar Curso';
    form.appendChild(submitButton);

    modalContent.appendChild(closeModal);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(form);

    existDiv.appendChild(modalContent);

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const courseData = {};

        fields.forEach(field => {
            const inputElement = document.getElementById(field.id);
            courseData[field.id] = inputElement.value.trim();
        });

        agregarPostCurso(courseData)
            .then(response => {
                console.log('Curso agregado con éxito:', response);
                existDiv.style.display = 'none';
                form.reset();
                document.body.removeChild(existDiv);
                tableCursos();
            })
            .catch(error => {
                console.error('Error al agregar curso:', error);
            });
    });

    existDiv.style.display = 'block';
}