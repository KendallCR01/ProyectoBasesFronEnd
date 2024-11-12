import { editarRutina } from "./editarRutina.js"; // Asegúrate de tener esta función definida
import { tableRutinas } from "./viewRutinas.js";

export function createEditRutineModal(rutina) {
    let existDiv = document.getElementById('myModal-rutina');
    if (existDiv) {
        existDiv.style.display = 'block';
        existDiv.innerHTML = ''; // Limpiar contenido anterior
    } else {
        // Si no existe, crea el contenedor del modal
        existDiv = document.createElement('div');
        existDiv.id = 'myModal-rutina';
        existDiv.classList.add('modal-curso');
        document.body.appendChild(existDiv);
    }

    // Crear contenido del modal
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content-maquina');

    // Botón de cerrar (X)
    const closeModal = document.createElement('span');
    closeModal.classList.add('close-maquina');
    closeModal.innerHTML = '&times;';
    closeModal.onclick = function () {
        existDiv.style.display = 'none';
    };

    // Título del modal
    const modalTitle = document.createElement('h2');
    modalTitle.textContent = 'Editar Rutina';
    modalTitle.style.color = 'black';

    // Formulario dentro del modal
    const form = document.createElement('form');
    form.id = 'editRutineForm';

    const fields = [
            { id: 'cliente', label: 'Cliente', type: 'number', required: true }, // Este campo sigue siendo 'text'
            { id: 'instructor', label: 'Instructor', type: 'number', required: true }, // Cambiado a 'number'
            { id: 'maquina', label: 'Maquina', type: 'number', required: true }, // Este campo sigue siendo 'text'
            { id: 'fecha', label: 'Fecha', type: 'date', required: true }, // Este campo sigue siendo 'text'
            { id: 'horas', label: 'Horas', type: 'number', required: true } // Cambiado a 'number'
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

        // Pre-cargar valores de la máquina si estamos editando
        if (rutina && rutina[field.id]) {
            input.value = rutina[field.id];
        }

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
    });

    // Botón de envío
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Actualizar Rutina';
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

        const RutinaData = {};
        fields.forEach(field => {
            const inputElement = document.getElementById(field.id);
            RutinaData[field.id] = inputElement.value.trim(); // Eliminar espacios en blanco innecesarios
        });

        // Asegúrate de incluir el ID de la máquina para la actualización
        RutinaData.id_rutina = rutina.id_rutina;

        // Enviar los datos al backend para editar
        editarRutina(RutinaData)
            .then(response => {
                console.log('Rutina actualizada con éxito:', response);
                existDiv.style.display = 'none'; // Cerrar el modal después de enviar
                tableRutinas();
            })
            .catch(error => {
                console.error('Error al actualizar rutina:', error);
            });
    });

    existDiv.style.display = 'block'; // Mostrar el modal
}
