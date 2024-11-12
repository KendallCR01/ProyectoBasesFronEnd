// searchCourseView.js
import { getCursos } from "./traerCursos.js";

import { mostrarInfoCurso } from "./mostrarInfoCursoPorId.js";

export const searchCourseView = async () => {
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = ''; // Limpiar el contenido

    // Contenedor del campo de búsqueda
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');

    // Input de búsqueda
    const searchInput = document.createElement('input');
    searchInput.type = 'number'; // Asumiendo que el ID Curso es un número
    searchInput.placeholder = 'Buscar por ID Curso';
    searchInput.classList.add('search-input');
    searchContainer.appendChild(searchInput);

    // Botón de búsqueda
    const searchButton = document.createElement('button');
    searchButton.textContent = 'Buscar';
    searchButton.classList.add('search-button');
    searchContainer.appendChild(searchButton);

    divPrincipal.appendChild(searchContainer);

    // Contenedor de la tabla (opcional, si quieres mostrar todos los cursos)
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');

    // Tabla de cursos (opcional)
    const table = document.createElement('table');
    table.classList.add('general-table');

    // Cabecera de la tabla (opcional)
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['ID Curso', 'Descripción', 'Horario', 'Disponibilidad'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Cuerpo de la tabla (opcional)
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    tableContainer.appendChild(table);
    divPrincipal.appendChild(tableContainer);

    // Función para mostrar cursos en la tabla (opcional)
    const displayCursos = (cursos) => {
        tbody.innerHTML = ''; // Limpiar el contenido de la tabla

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

            tbody.appendChild(row);
        });
    };

    // Obtener y mostrar todos los cursos al cargar la vista (opcional)
    const cursos = await getCursos();
    displayCursos(cursos);

    // Evento de búsqueda por ID Curso
    searchButton.addEventListener('click', async (event) => {
        event.preventDefault();
        const idCurso = searchInput.value.trim();
        console.log(idCurso);
        if (idCurso) {
            mostrarInfoCurso(idCurso);
        } else {
            // Opcional: Mostrar todos los cursos si no hay ID ingresado
            // displayCursos(cursos);
            alert("Por favor, ingresa un ID Curso válido.");
        }
    });
};
