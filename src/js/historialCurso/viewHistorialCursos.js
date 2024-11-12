import { getHistorialCursos } from "../historialCurso/traerHistorialCursos.js"

export const tableHistorialCursos = async () => {
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = '';

    // Contenedor del botón "Agregar Historial"
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const addButton = document.createElement('button');
    addButton.textContent = 'Agregar Historial';
    addButton.classList.add('add-button');
    buttonContainer.appendChild(addButton);

    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        viewAgregarHistorialCurso();
    });

    divPrincipal.appendChild(buttonContainer);

    // Contenedor de la tabla
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');

    // Tabla de historial de cursos
    const table = document.createElement('table');
    table.classList.add('general-table');

    // Cabecera de la tabla
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['ID Historial', 'Cliente', 'Instructor', 'Curso', 'Fecha', 'Horas', 'Acciones'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Cuerpo de la tabla
    const tbody = document.createElement('tbody');
    const historialCursos = await getHistorialCursos();

    historialCursos.forEach(historial => {
        const row = document.createElement('tr');

        // ID Historial
        const idHistorialCell = document.createElement('td');
        idHistorialCell.textContent = historial.id_historial;
        row.appendChild(idHistorialCell);

        // Cliente
        const clienteCell = document.createElement('td');
        clienteCell.textContent = historial.cliente;
        row.appendChild(clienteCell);

        // Instructor
        const instructorCell = document.createElement('td');
        instructorCell.textContent = historial.instructor;
        row.appendChild(instructorCell);

        // Curso
        const cursoCell = document.createElement('td');
        cursoCell.textContent = historial.curso;
        row.appendChild(cursoCell);

        // Fecha
        const fechaCell = document.createElement('td');

        // Convierte la fecha a un objeto Date, luego formatea
        const date = new Date(historial.fecha);
        const formattedDate = date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        fechaCell.textContent = formattedDate;
        row.appendChild(fechaCell);

        // Horas
        const horasCell = document.createElement('td');
        horasCell.textContent = historial.horas;
        row.appendChild(horasCell);

        // Acciones
        const actionsCell = document.createElement('td');
        
        // Botón Editar
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('edit-button');
        editButton.onclick = () => editHistorialCurso(historial);
        actionsCell.appendChild(editButton);

        // Botón Eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => deleteHistorialCurso(historial.id_historial);
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    divPrincipal.appendChild(tableContainer);
};
