import { getMaquinas } from "./traerMaquinas.js";
import { obtenerImagenPorNombre } from "../traerImagines.js";
import { createAddMachineModal } from "./createAddMaquinasModal.js";
import { createEditMachineModal } from "./createEditMaquina.js";
import { eliminarMaquina } from "./eliminarMaquinaPeticion.js";

export const tableMaquinas = async () => {
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = '';

    // Contenedor del botón "Agregar Máquina"
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const addButton = document.createElement('button');
    addButton.textContent = 'Agregar Máquina';
    addButton.classList.add('add-button');
    buttonContainer.appendChild(addButton);

    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        createAddMachineModal();
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
    const headers = ['Imagen', 'Descripción', 'Estado', 'Dificultad', 'Acciones'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Cuerpo de la tabla
    const tbody = document.createElement('tbody');
    const maquinas = await getMaquinas();

    maquinas.forEach(maquina => {
        const row = document.createElement('tr');
        
        // Imagen
        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = obtenerImagenPorNombre(maquina.descripcion);
        img.alt = maquina.descripcion;
        img.classList.add('table-image'); // clase para estilos específicos de imagen
        imgCell.appendChild(img);
        row.appendChild(imgCell);

        // Descripción
        const descripcionCell = document.createElement('td');
        descripcionCell.textContent = maquina.descripcion;
        row.appendChild(descripcionCell);

        // Estado
        const estadoCell = document.createElement('td');
        estadoCell.textContent = maquina.estado;
        row.appendChild(estadoCell);

        // Dificultad
        const dificultadCell = document.createElement('td');
        dificultadCell.textContent = maquina.dificultad;
        row.appendChild(dificultadCell);

        // Acciones
        const actionsCell = document.createElement('td');

        // Botón Editar
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('edit-button');
        editButton.onclick = () => createEditMachineModal(maquina);
        actionsCell.appendChild(editButton);

        // Botón Eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => eliminarMaquina(maquina.id_maquina);
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    divPrincipal.appendChild(tableContainer);
};
