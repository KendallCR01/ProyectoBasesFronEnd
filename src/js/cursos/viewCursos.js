import { getCursos } from "./traerCursos.js";
import { createEditCourseModal } from "./createEditModal.js";
import { createAddCourseModal } from "./createCursoModal.js";
import { eliminarCurso } from "./eliminarCursoPeticion.js";

export const tableCursos = async () => {
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = '';

    // Contenedor del botón "Agregar Curso"
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const addButton = document.createElement('button');
    addButton.textContent = 'Agregar Curso';
    addButton.classList.add('add-button');
    buttonContainer.appendChild(addButton);

    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        createAddCourseModal();
    });

    divPrincipal.appendChild(buttonContainer);

    // Contenedor de la tabla
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');

    // Tabla de cursos
    const table = document.createElement('table');
    table.classList.add('general-table');

    // Cabecera de la tabla
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['ID Curso', 'Descripción', 'Horario', 'Disponibilidad', 'Acciones'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Cuerpo de la tabla
    const tbody = document.createElement('tbody');
    const cursos = await getCursos();

    cursos.forEach(curso => {
        const row = document.createElement('tr');

        // ID Curso
        const idCursoCell = document.createElement('td');
        idCursoCell.textContent = curso.id_curso;
        row.appendChild(idCursoCell);

        // Descripción
        const descripcionCell = document.createElement('td');
        descripcionCell.textContent = curso.descripcion;
        row.appendChild(descripcionCell);

        // Horario
        const horarioCell = document.createElement('td');
        horarioCell.textContent = curso.horario;
        row.appendChild(horarioCell);

        // Disponibilidad
        const disponibilidadCell = document.createElement('td');
        disponibilidadCell.textContent = curso.disponibilidad;
        row.appendChild(disponibilidadCell);

        // Acciones
        const actionsCell = document.createElement('td');

        // Botón Editar
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('edit-button');
        editButton.onclick = () => createEditCourseModal(curso);
        actionsCell.appendChild(editButton);

        // Botón Eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => eliminarCurso(curso.id_curso);
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    divPrincipal.appendChild(tableContainer);
};
