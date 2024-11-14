import { eliminarMembresia } from "./eliminarMembresiaPeticion.js";
import { buscarCliente } from "../clientes/traerClienteId.js";
import { buscarMembresiaPorCliente } from "./traerMembresiaIdCliente.js";
import { createAddMembresiaModalPorId } from "./createAddMembresiaPorId.js";
import { viewCliente} from "../clientes/viewClient.js";


export const mostrarInfoMembresiaPorCliente = async (cedulaCliente) => {
    try {
        const clienteData = await buscarCliente(cedulaCliente);
        const membresiaData = await buscarMembresiaPorCliente(cedulaCliente);

        const divPrincipal = document.querySelector(".main");
        divPrincipal.innerHTML = ''; // Clear previous content

        const infoCard = document.createElement('div');
        infoCard.classList.add('info-card', 'info-card-active');

        const titulo = document.createElement('h1');
        titulo.textContent = "Detalles de la Membresía";
        titulo.classList.add('info-title');
        infoCard.appendChild(titulo);

        if (!membresiaData || membresiaData.length === 0) {
            const noMembershipMessage = document.createElement('p');
            noMembershipMessage.textContent = "No hay membresía existente para este cliente.";
            noMembershipMessage.classList.add('no-membership-message');
            infoCard.appendChild(noMembershipMessage);
        } else {
            // Function to create label-value fields
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

            // Append membership fields
            infoCard.appendChild(crearCampo("ID de Membresía", membresiaData[0].id));
            infoCard.appendChild(crearCampo("Cliente", clienteData[0].nombre_cliente + ' ' + clienteData[0].apellido1));
            infoCard.appendChild(crearCampo("Monto", membresiaData[0].monto));
            infoCard.appendChild(crearCampo("Estado", membresiaData[0].estado));
            infoCard.appendChild(crearCampo("Fecha de Inicio", membresiaData[0].fecha));
        }

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        // Add Membership button
        const addButton = document.createElement('button');
        addButton.textContent = 'Agregar Membresía';
        addButton.classList.add('add-button');
        addButton.addEventListener('click', (event) => {
            event.preventDefault();
            createAddMembresiaModalPorId(cedulaCliente);
        });
        buttonContainer.appendChild(addButton);

        // Delete Membership button
        const deleteButtonClienteMem = document.createElement('button');
        deleteButtonClienteMem.textContent = 'Eliminar Membresía';
        deleteButtonClienteMem.classList.add('delete-button');
        deleteButtonClienteMem.addEventListener('click', async (event) => {
            event.preventDefault();
            try {
                await eliminarMembresia(Number(membresiaData[0].id));
                mostrarInfoMembresiaPorCliente(cedulaCliente); // Refresh after deletion
            } catch (error) {
                console.error('Error al eliminar la membresía:', error);
                alert('No se pudo eliminar la membresía.');
            }
        });
        buttonContainer.appendChild(deleteButtonClienteMem);

        infoCard.appendChild(buttonContainer); // Append button container to infoCard
        divPrincipal.appendChild(infoCard); // Display the infoCard in the main div

    } catch (error) {
        console.error('Error al obtener la información de la membresía:', error);
    }
};
