import { editarHistorialCurso } from "./editarHistorial.js";
import { tableHistorialCursos } from "./viewHistorialCursos.js";

export function createEditHistorialModal(historial) {
    let existDiv = document.getElementById('myModal-historial');
    if (existDiv) {
        existDiv.style.display = 'block';
        existDiv.innerHTML = ''; // Limpiar contenido anterior
    } else {
        // Si no existe, crea el contenedor del modal
        existDiv = document.createElement('div');
        existDiv.id = 'myModal-historial';
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
    modalTitle.textContent = 'Editar Historial Curso';
    modalTitle.style.color = 'black';

    // Formulario dentro del modal
    const form = document.createElement('form');
    form.id = 'editHistorialForm';

    // Campos de entrada para curso
    const fields = [
        { id: 'fecha', label: 'Fecha', type: 'date', required: true },
        { id: 'horas', label: 'Horas', type: 'number', required: true }
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
        if (historial && historial[field.id]) {
            input.value = historial[field.id];
        }

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
    });

    // Botón de envío
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Actualizar Hiastorial de Curso';
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
        const historialData = {};
        fields.forEach(field => {
            const inputElement = document.getElementById(field.id);
            historialData[field.id] = inputElement.value.trim(); // Eliminar espacios en blanco innecesarios
        });

        // Asegúrate de incluir el ID del curso para la actualización
        historialData.id_historial = historial.id_historial;

        // Enviar los datos al backend para editar
        editarHistorialCurso(historialData)
            .then(response => {
                console.log('Historial de curso actualizado con éxito:', response);
                existDiv.style.display = 'none'; // Cerrar el modal después de enviar
                tableHistorialCursos();
            })
            .catch(error => {
                console.error('Error al actualizar historial de curso:', error);
            });
    });

    existDiv.style.display = 'block'; // Mostrar el modal
}
