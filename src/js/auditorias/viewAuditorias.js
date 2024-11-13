import { getAuditorias } from "./traerAuditorias.js";
//import { createEditRutineModal } from "./createEditRutina.js";
//import { eliminarRutina } from "./eliminarRutinaPeticion.js";
//import { createAddRutinaModal } from "./createAddRutinaModal.js";


export const tableBitacora = async () => {
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = '';

    // Contenedor de la tabla
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');

    const table = document.createElement('table');
    table.classList.add('general-table');

    // Cabecera de la tabla
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Usuario', 'Tabla', 'Metodo', 'Fecha', 'Codigo de retorno'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Cuerpo de la tabla
    const tbody = document.createElement('tbody');
    const auditorias = await getAuditorias();

    auditorias.forEach(auditoria => {
        const row = document.createElement('tr');
    
        // Usuario
        const usuarioAuditoriaCell = document.createElement('td');
        usuarioAuditoriaCell.textContent = auditoria.usuario;
        row.appendChild(usuarioAuditoriaCell);
    
        // Tabla
        const tablaCell = document.createElement('td');
        tablaCell.textContent = auditoria.tabla;
        row.appendChild(tablaCell);
    
        // Acción
        const metodoCell = document.createElement('td');
        metodoCell.textContent = auditoria.accion;
        row.appendChild(metodoCell);
    
        // Fecha
        const fechaCell = document.createElement('td');
        const date = new Date(auditoria.fecha);
        fechaCell.textContent = date.toLocaleString('es-ES'); // Incluye fecha y hora
        row.appendChild(fechaCell);
    
        // Código de retorno
        const codigoCell = document.createElement('td');
        codigoCell.textContent = auditoria.codigo;
        row.appendChild(codigoCell);
    
        // Añadir la fila al cuerpo de la tabla
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    divPrincipal.appendChild(tableContainer);
};
