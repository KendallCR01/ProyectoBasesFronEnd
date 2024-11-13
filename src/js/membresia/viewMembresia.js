import { getMembresias } from "./traerMembresia.js";
import { createEditMembresiaModal } from "./createEditMembresia.js";
import { eliminarMembresia } from "./eliminarMembresiaPeticion.js"
import { createAddMembresiaModal } from "./createAddMembresia.js"

export const tableMembresia = async () => {
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = '';

    // Contenedor del botón "Agregar Membresia"
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const addButton = document.createElement('button');
    addButton.textContent = 'Agregar Membresia';
    addButton.classList.add('add-button');
    buttonContainer.appendChild(addButton);

    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        createAddMembresiaModal();
    });

    divPrincipal.appendChild(buttonContainer);

    // Contenedor de la tabla
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');

    // Tabla de máquinas
    const table = document.createElement('table');
    table.classList.add('general-table');

    // Cabecera de la tabla
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Id', 'Id Cliente', 'Monto', 'Estado', 'Fecha', 'Acciones'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Cuerpo de la tabla
    const tbody = document.createElement('tbody');

    // CAMBIAR
    const membresias = await getMembresias();

    membresias.forEach(membresia => {
        const row = document.createElement('tr');
        
   
        const IdCell = document.createElement('td');
        IdCell.textContent = membresia.id;
        row.appendChild(IdCell);


        const id_clienteCell = document.createElement('td');
        id_clienteCell.textContent = membresia.id_cliente;
        row.appendChild(id_clienteCell);

   
        const montoCell = document.createElement('td');
        montoCell.textContent = membresia.monto;
        row.appendChild(montoCell);


        const estadoCell = document.createElement('td');
        estadoCell.textContent = membresia.estado;
        row.appendChild(estadoCell);



        const fechaCell = document.createElement('td');
        const date = new Date(membresia.fecha);
        fechaCell.textContent = date.toLocaleString('es-ES'); // Incluye fecha y hora
        row.appendChild(fechaCell);

        // Acciones
        const actionsCell = document.createElement('td');

        // Botón Editar
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('edit-button');
        editButton.onclick = () => createEditMembresiaModal(membresia);
        actionsCell.appendChild(editButton);

        // Botón Eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => eliminarMembresia(membresia.id);
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    divPrincipal.appendChild(tableContainer);
};
