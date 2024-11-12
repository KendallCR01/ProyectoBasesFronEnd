import { getRutinas } from "./traerRutinas.js"; // Suponiendo que tienes una función para obtener las rutinas
import { mostrarInfoRutina } from "./mostrarInfoRutinaPorId.js"; // Función para mostrar detalles de la rutina por ID

export const searchRoutineView = async () => {
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = ''; // Limpiar el contenido

    // Contenedor del campo de búsqueda
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');

    // Input de búsqueda
    const searchInput = document.createElement('input');
    searchInput.type = 'number'; // Asumiendo que el ID Rutina es un número
    searchInput.placeholder = 'Buscar por ID Rutina';
    searchInput.classList.add('search-input');
    searchContainer.appendChild(searchInput);

    // Botón de búsqueda
    const searchButton = document.createElement('button');
    searchButton.textContent = 'Buscar';
    searchButton.classList.add('search-button');
    searchContainer.appendChild(searchButton);

    divPrincipal.appendChild(searchContainer);

    // Contenedor de la tabla de rutinas
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');

    // Tabla de rutinas
    const table = document.createElement('table');
    table.classList.add('general-table');

    // Cabecera de la tabla
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['ID Rutina', 'Cliente', 'Instructor', 'Máquina', 'Fecha', 'Horas'];

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

    // Función para mostrar rutinas en la tabla
    const displayRutinas = (rutinas) => {
        tbody.innerHTML = ''; // Limpiar el contenido de la tabla

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

            const fechaCell = document.createElement('td');

            // Fecha
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

            tbody.appendChild(row);
        });
    };

    // Obtener y mostrar todas las rutinas al cargar la vista
    const rutinas = await getRutinas();  // Función que debe devolver las rutinas
    displayRutinas(rutinas);

    // Evento de búsqueda por ID Rutina
    searchButton.addEventListener('click', async (event) => {
        event.preventDefault();
        const idRutina = searchInput.value.trim();
        console.log(idRutina);
        if (idRutina) {
            mostrarInfoRutina(idRutina);
        } else {
            alert("Por favor, ingresa un ID Rutina válido.");
        }
    });
};

