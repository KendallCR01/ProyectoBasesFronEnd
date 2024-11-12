import { buscarRutina } from "./traerRutinaId.js";

export const mostrarInfoRutina = async (idRutina) => {
    console.log(idRutina); // Verifica el idRutina que se pasa
    try {
        // Aquí deberías obtener la información de la rutina mediante una llamada a la API o base de datos
        const rutinaData = await buscarRutina(idRutina);
        
        console.log(rutinaData);// Suponiendo que existe esta función

        // Verificar si se encontró la rutina
        if (!rutinaData || rutinaData.length === 0) {
            throw new Error('Rutina no encontrada');
        }

        const divPrincipal = document.querySelector(".main");
        divPrincipal.innerHTML = '';

        const infoCard = document.createElement('div');
        infoCard.classList.add('info-card', 'info-card-active');

        const titulo = document.createElement('h1');
        titulo.textContent = "Detalles de la Rutina";
        titulo.classList.add('info-title');
        infoCard.appendChild(titulo);

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

        console.log(rutinaData.id_rutina);

        const date = new Date(rutinaData.fecha);
        const formattedDate = date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        const data = document.createElement('span');
        data.textContent = formattedDate;

        // Mostrar los campos de la rutina
        infoCard.appendChild(crearCampo("ID Rutina", rutinaData.id_rutina));
        infoCard.appendChild(crearCampo("Cliente", rutinaData.cliente));
        infoCard.appendChild(crearCampo("Instructor", rutinaData.instructor));
        infoCard.appendChild(crearCampo("Máquina", rutinaData.maquina));
        infoCard.appendChild(crearCampo("Fecha", data.textContent));
        infoCard.appendChild(crearCampo("Horas", rutinaData.horas));

        divPrincipal.appendChild(infoCard);
    } catch (error) {
        console.error('Error al obtener la información de la rutina:', error);
        alert('No se pudo encontrar la información de la rutina.');
    }
};
