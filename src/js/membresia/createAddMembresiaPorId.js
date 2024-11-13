import { agregarPostMembresia } from "./agregarMembresiaPeticion.js";
import { tableMembresia } from "./viewMembresia.js";
import { mostrarInfoMembresiaPorCliente } from "./viewMembresiaPorCliente.js";

export function createAddMembresiaModalPorId(idCliente) {
    let existDiv = document.getElementById('myModal-membresia');
    if (existDiv) {
        existDiv.style.display = 'block';
        existDiv.innerHTML = ''; // Limpiar contenido anterior
    } else {
        // Si no existe, crea el contenedor del modal
        existDiv = document.createElement('div');
        existDiv.id = 'myModal-membresia';
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
    modalTitle.textContent = 'Agregar membresia';
    modalTitle.style.color = 'black';

    // Formulario dentro del modal
    const form = document.createElement('form');
    form.id = 'addMmebresiaForm';

    // Campos de entrada para la membresía
    const fields = [
        { id: 'monto', label: 'Monto', type: 'number', required: true },
        { id: 'estado', label: 'Estado de Membresia', type: 'text', required: true },
        { id: 'fecha', label: 'Fecha de creacion', type: 'date', required: true }
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

    // Botón de envío
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Agregar Membresia';
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

        // Crear el objeto membresiaData con los datos del formulario

        const monto = Number(document.getElementById('monto').value.trim());
        const estado = document.getElementById('estado').value.trim()
        const fecha = document.getElementById('fecha').value.trim()
        const id_cliente= Number(idCliente)

        

        console.log({ idCliente, monto, estado, fecha });

        // Enviar los datos al backend
        agregarPostMembresia({ id_cliente, monto , estado, fecha })
            .then(response => {
                console.log('Membresía agregada con éxito:', response);
                existDiv.style.display = 'none'; // Cerrar el modal después de enviar
                mostrarInfoMembresiaPorCliente(idCliente);
            })
            .catch(error => {
                console.error('Error al agregar membresía:', error);
            });
    });

    existDiv.style.display = 'block'; // Mostrar el modal
}
