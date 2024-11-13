//import { editarMaquina } from "./editarMaquina.js"; // Asegúrate de tener esta función definida
import { tableMembresia } from "./viewMembresia.js";
import { editarMembresia } from "./editarMembresia.js";
editarMembresia

export function createEditMembresiaModal(membresia) {
    let existDiv = document.getElementById('myModal-membresia');
    if (existDiv) {
        existDiv.style.display = 'block';
        existDiv.innerHTML = ''; // Limpiar contenido anterior
    } else {
        existDiv = document.createElement('div');
        existDiv.id = 'myModal-membresia';
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
    modalTitle.textContent = 'Editar Membersia';
    modalTitle.style.color = 'black';

    // Formulario dentro del modal
    const form = document.createElement('form');
    form.id = 'editMembresiaForm';

    // Campos de entrada para máquina
    const fields = [
        { id: 'monto', label: 'Descripción', type: 'number', required: true },
        { id: 'estado', label: 'Estado', type: 'text', required: true },
        { id: 'fecha', label: 'Dificultad', type: 'date', required: true }
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
        if (membresia && membresia[field.id]) {
            input.value = membresia[field.id];
        }

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
    });

    // Botón de envío
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Actualizar Membresia';
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

        const membresiaData = {};
        fields.forEach(field => {
            const inputElement = document.getElementById(field.id);
            membresiaData[field.id] = inputElement.value.trim(); // Eliminar espacios en blanco innecesarios
        });

        // Asegúrate de incluir el ID de la máquina para la actualización
        membresiaData.id = membresia.id;

        // Enviar los datos al backend para editar
        editarMembresia(membresiaData)
            .then(response => {
                console.log('Membresia actualizada con éxito:', response);
                existDiv.style.display = 'none'; // Cerrar el modal después de enviar
                tableMembresia();
            })
            .catch(error => {
                console.error('Error al actualizar membresia:', error);
            });
    });

    existDiv.style.display = 'block'; // Mostrar el modal
}
