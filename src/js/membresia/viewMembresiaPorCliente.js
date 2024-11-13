
import { eliminarMembresia } from "./eliminarMembresiaPeticion.js";
import { buscarCliente } from "../clientes/traerClienteId.js";
import { buscarMembresiaPorCliente} from "./traerMembresiaIdCliente.js";
import { createAddMembresiaModalPorId } from "./createAddMembresiaPorId.js";

export const mostrarInfoMembresiaPorCliente = async (cedulaCliente) => {
    try {

        const clienteData = await buscarCliente(cedulaCliente);
        const membresiaData =  await buscarMembresiaPorCliente(cedulaCliente); 

        const divPrincipal = document.querySelector(".main");
        divPrincipal.innerHTML = '';

    
        if (!membresiaData) {
            const noMembershipMessage = document.createElement('p');
            noMembershipMessage.textContent = "No hay membresías.";
            noMembershipMessage.classList.add('no-membership-message');
            divPrincipal.appendChild(noMembershipMessage);
            return;
        }

        const infoCard = document.createElement('div');
        infoCard.classList.add('info-card', 'info-card-active');

        const titulo = document.createElement('h1');
        titulo.textContent = "Detalles de la Membresía";
        titulo.classList.add('info-title');
        infoCard.appendChild(titulo);

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

     
        infoCard.appendChild(crearCampo("ID de Membresía", membresiaData.id));
        infoCard.appendChild(crearCampo("Cliente", clienteData[0].nombre_cliente +''+clienteData[0].apellido1));
        infoCard.appendChild(crearCampo("Monto", membresiaData.monto));
        infoCard.appendChild(crearCampo("Estado", membresiaData.estado));
        infoCard.appendChild(crearCampo("Fecha de Inicio", membresiaData.fecha));

  
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        // "Agregar Cliente" button
        const addButton = document.createElement('button');
        addButton.textContent = 'Agregar Membresia';
        addButton.classList.add('add-button');
        addButton.addEventListener('click', (event) => {
            event.preventDefault();
            createAddMembresiaModalPorId(cedulaCliente);
        });
        buttonContainer.appendChild(addButton);

   
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar Membresía';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', async (event) => {
            event.preventDefault();
            try {
                await eliminarMembresia(membresiaData.id);
                mostrarInfoMembresiaPorCliente(cedulaCliente);
            } catch (error) {
                console.error('Error al eliminar la membresía:', error);
                alert('No se pudo eliminar la membresía.');
            }
        });
        buttonContainer.appendChild(deleteButton);


        divPrincipal.appendChild(infoCard);
        divPrincipal.appendChild(buttonContainer);
    } catch (error) {
        console.error('Error al obtener la información de la membresía:', error);
        alert('No se pudo encontrar la información de la membresía del cliente.');
    }
};
