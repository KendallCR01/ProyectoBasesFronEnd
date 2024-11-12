// mostrarInfoCurso.js
import { buscarCurso } from "./traerCursoId.js";

export const mostrarInfoCurso = async (idCurso) => {

    console.log(idCurso);
    try {
        const cursoData = await buscarCurso(idCurso);

        console.log(cursoData);
      
        const divPrincipal = document.querySelector(".main");
        divPrincipal.innerHTML = '';

        const infoCard = document.createElement('div');
        infoCard.classList.add('info-card', 'info-card-active');

        const titulo = document.createElement('h1');
        titulo.textContent = "Detalles del Curso";
        titulo.classList.add('info-title');
        infoCard.appendChild(titulo);

        // Función para crear elementos en formato de campo y valor
        const crearCampo = (etiqueta, valor) => {
            const campo = document.createElement('div');
            campo.classList.add('info-field');
            const label = document.createElement('span');
            label.classList.add('info-label');
            label.textContent = etiqueta;
            const data = document.createElement('span');
            data.classList.add('info-data');
            data.textContent = valor;
            campo.appendChild(label);
            campo.appendChild(data);
            return campo;
        };

        // Añadir campos con la información del curso
        infoCard.appendChild(crearCampo("ID Curso", cursoData.id_curso));
        infoCard.appendChild(crearCampo("Descripción", cursoData.descripcion));
        infoCard.appendChild(crearCampo("Horario", cursoData.horario));
        infoCard.appendChild(crearCampo("Disponibilidad", cursoData.disponibilidad));

        divPrincipal.appendChild(infoCard);
    } catch (error) {
        console.error('Error al obtener la información del curso:', error);
        alert('No se pudo encontrar la información del curso.');
    }
};
