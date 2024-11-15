import { getRutinas } from "./traerRutinas.js";
import { createEditRutineModal } from "./createEditRutina.js";
import { eliminarRutina } from "./eliminarRutinaPeticion.js";
import { createAddRutinaModal } from "./createAddRutinaModal.js";


export const tableRutinas = async () => {
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = '';

    // Contenedor del botón "Agregar Rutina"
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const addButton = document.createElement('button');
    addButton.textContent = 'Agregar Rutina';
    addButton.classList.add('add-button');
    buttonContainer.appendChild(addButton);

    buttonContainer.addEventListener('click', (event) => {
        event.preventDefault();
        createAddRutinaModal();
    });

    divPrincipal.appendChild(buttonContainer);

    // Contenedor de la tabla
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');

    const table = document.createElement('table');
    table.classList.add('general-table');

    // Cabecera de la tabla
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['ID Rutina', 'Cliente', 'Instructor', 'Máquina', 'Fecha', 'Horas', 'Acciones'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Cuerpo de la tabla
    const tbody = document.createElement('tbody');
    const rutinas = await getRutinas();

    rutinas.forEach(rutina => {
        const row = document.createElement('tr');

        // ID Rutina
        const idRutinaCell = document.createElement('td');
        idRutinaCell.textContent = rutina.id_rutina;
        row.appendChild(idRutinaCell);

        // Cliente
        const clienteCell = document.createElement('td');
        clienteCell.textContent = rutina.cliente;
        row.appendChild(clienteCell);

        // Instructor
        const instructorCell = document.createElement('td');
        instructorCell.textContent = rutina.instructor;
        row.appendChild(instructorCell);

        // Máquina
        const maquinaCell = document.createElement('td');
        maquinaCell.textContent = rutina.maquina;
        row.appendChild(maquinaCell);

        // Fecha
        const fechaCell = document.createElement('td');
        const date = new Date(rutina.fecha);
        const formattedDate = date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        fechaCell.textContent = formattedDate;
        row.appendChild(fechaCell);

        // Horas
        const horasCell = document.createElement('td');
        horasCell.textContent = rutina.horas;
        row.appendChild(horasCell);

        // Acciones
        const actionsCell = document.createElement('td');
        
        // Botón Editar
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('edit-button');
        editButton.onclick = () => createEditRutineModal(rutina);
        actionsCell.appendChild(editButton);

        // Botón Eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => eliminarRutina(rutina.id_rutina);
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    divPrincipal.appendChild(tableContainer);
};
