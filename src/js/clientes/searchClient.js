// viewClientesReadOnly.js
import { getClientes } from "./traerClientes.js";

import { mostrarInfoCliente } from "./mostrarInfoPorId.js";

export const searchClientView = async () => {
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = ''; // Limpiar el contenido

    // Contenedor del campo de búsqueda
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');

    // Input de búsqueda
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Buscar por Cédula';
    searchInput.classList.add('search-input');
    searchContainer.appendChild(searchInput);

    // Botón de búsqueda
    const searchButton = document.createElement('button');
    searchButton.textContent = 'Buscar';
    searchButton.classList.add('search-button');
    searchContainer.appendChild(searchButton);

    divPrincipal.appendChild(searchContainer);

    // Contenedor de la tabla
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');

    // Tabla de clientes
    const table = document.createElement('table');
    table.classList.add('general-table');

    // Cabecera de la tabla
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Cédula', 'Nombre', 'Apellido1', 'Apellido2', 'Dirección', 'E-mail', 'Fecha Inscripción', 'Celular'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Cuerpo de la tabla
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    tableContainer.appendChild(table);
    divPrincipal.appendChild(tableContainer);

    // Función para mostrar clientes en la tabla
    const displayClientes = (clientes) => {
        tbody.innerHTML = ''; // Limpiar el contenido de la tabla

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

            tbody.appendChild(row);
        });
    };

    // Obtener y mostrar todos los clientes al cargar la vista
    const clientes = await getClientes();
    displayClientes(clientes);

    // Evento de búsqueda por cédula
    searchButton.addEventListener('click', async (event) => {
        event.preventDefault();
        const cedula = searchInput.value.trim();
        console.log(cedula);
        if (cedula!=null) {
            mostrarInfoCliente(Number(cedula));
        } else {
            displayClientes(clientes); // Muestra todos los clientes si no hay cédula ingresada
        }
    });
};
