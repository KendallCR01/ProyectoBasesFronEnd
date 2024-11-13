import { agregarPostRutina } from "./AgregarRutinaPeticion.js"; // Asegúrate de tener esta función definida

export function createAddRutinaModal() {
    let existDiv = document.getElementById('myModal-rutina');
    if (existDiv) {
        existDiv.style.display = 'block';
        existDiv.innerHTML = ''; // Limpiar contenido anterior
    } else {
        // Si no existe, crea el contenedor del modal
        existDiv = document.createElement('div');
        existDiv.id = 'myModal-maquina';
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
    modalTitle.textContent = 'Agregar Rutina';
    modalTitle.style.color = 'black';

    // Formulario dentro del modal
    const form = document.createElement('form');
    form.id = 'addRutineForm';

    // Campos de entrada para máquina
    const fields = [
        { id: 'cliente', label: 'Cliente', type: 'number', required: true }, 
        { id: 'instructor', label: 'Instructor', type: 'number', required: true }, 
        { id: 'maquina', label: 'Maquina', type: 'number', required: true }, 
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

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
    });

    // Botón de envío
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Agregar Rutina';
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

        const rutineData = {};
        fields.forEach(field => {
            const inputElement = document.getElementById(field.id);
            rutineData[field.id] = inputElement.value.trim(); // Eliminar espacios en blanco innecesarios
        });

        // Enviar los datos al backend para agregar la máquina
        agregarPostRutina(rutineData)
            .then(response => {
                console.log('Rutina agregada con éxito:', response);
                existDiv.style.display = 'none'; // Cerrar el modal después de enviar
            })
            .catch(error => {
                console.error('Error al agregar Rutina:', error);
            });
    });

    existDiv.style.display = 'block'; // Mostrar el modal
}
