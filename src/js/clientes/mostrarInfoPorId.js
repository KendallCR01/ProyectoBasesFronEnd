import {buscarCliente } from "./traerClienteId.js";

export const mostrarInfoCliente = async (cedulaCliente) => {
    try {
        const clienteData = await buscarCliente(cedulaCliente);
      
        const divPrincipal = document.querySelector(".main");
        divPrincipal.innerHTML = '';

        const infoCard = document.createElement('div');
        infoCard.classList.add('info-card', 'info-card-active');

        const titulo = document.createElement('h1');
        titulo.textContent = "Detalles del Cliente";
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

        // Añadir campos con la información del cliente
        infoCard.appendChild(crearCampo("Cédula", clienteData[0].cedula));
        infoCard.appendChild(crearCampo("Nombre", clienteData[0].nombre_cliente));
        infoCard.appendChild(crearCampo("Apellidos", `${clienteData[0].apellido1} ${clienteData[0].apellido2}`));
        infoCard.appendChild(crearCampo("Dirección", clienteData[0].direccion));
        infoCard.appendChild(crearCampo("Email", clienteData[0].e_mail));
        infoCard.appendChild(crearCampo("Fecha de Inscripción", clienteData[0].fecha_inscripcion));
        infoCard.appendChild(crearCampo("Celular", clienteData[0].celular));
        infoCard.appendChild(crearCampo("Teléfono Habitación", clienteData[0].tel_habitacion));

        divPrincipal.appendChild(infoCard);
    } catch (error) {
        console.error('Error al obtener la información del cliente:', error);
        alert('No se pudo encontrar la información del cliente.');
    }
};
