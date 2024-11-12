import { getClientes } from "./traerClientes.js";
import { createAddClientModal } from "./createModalClient.js";

export const tableClientes = async () => {
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = '';

    // Contenedor del botón "Agregar Cliente"
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const addButton = document.createElement('button');
    addButton.textContent = 'Agregar Cliente';
    addButton.classList.add('add-button');
    buttonContainer.appendChild(addButton);

    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        createAddClientModal();
    });

    divPrincipal.appendChild(buttonContainer);

    // Contenedor de la tabla
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');

    // Tabla de clientes
    const table = document.createElement('table');
    table.classList.add('general-table');

    // Cabecera de la tabla
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Cédula', 'Nombre', 'Apellido1', 'Apellido2', 'Dirección', 'E-mail', 'Fecha Inscripción', 'Celular',  'Acciones'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Cuerpo de la tabla
    const tbody = document.createElement('tbody');
    const clientes = await getClientes();

    clientes.forEach(cliente => {
        const row = document.createElement('tr');

        // Cédula
        const cedulaCell = document.createElement('td');
        cedulaCell.textContent = cliente.cedula;
        row.appendChild(cedulaCell);

        // Nombre
        const nombreCell = document.createElement('td');
        nombreCell.textContent = cliente.nombre;
        row.appendChild(nombreCell);

        // Apellido1
        const apellido1Cell = document.createElement('td');
        apellido1Cell.textContent = cliente.apellido1;
        row.appendChild(apellido1Cell);

        // Apellido2
        const apellido2Cell = document.createElement('td');
        apellido2Cell.textContent = cliente.apellido2;
        row.appendChild(apellido2Cell);

        // Dirección
        const direccionCell = document.createElement('td');
        direccionCell.textContent = cliente.direccion;
        row.appendChild(direccionCell);

        // E-mail
        const emailCell = document.createElement('td');
        emailCell.textContent = cliente.e_mail;
        row.appendChild(emailCell);

        // Fecha Inscripción
        const fechaCell = document.createElement('td');

        // Convierte la fecha a un objeto Date, luego formatea
        const date = new Date(cliente.fecha_inscripcion);
        const formattedDate = date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        fechaCell.textContent = formattedDate;
        row.appendChild(fechaCell);

        // Celular
        const celularCell = document.createElement('td');
        celularCell.textContent = cliente.celular;
        row.appendChild(celularCell);


        // Acciones
        const actionsCell = document.createElement('td');

        // Botón Editar
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('edit-button');
        editButton.onclick = () => editCliente(cliente);
        actionsCell.appendChild(editButton);

        // Botón Eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => deleteCliente(cliente.cedula);
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    divPrincipal.appendChild(tableContainer);
};
