import { createErrorModal } from "../mensajesSalidas/errorModal.js";
import { createSuccessModal } from "../mensajesSalidas/succesModal.js";


export const editarMaquina = async (machineData) => {
    try {
        const response = await fetch('http://localhost:3000/actualizar-maquina', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(machineData),
        });
    
        const data = await response.json();

      
        if (response.ok) {
          
            console.log('Maquina editado con éxito:', data.message);
          

            createSuccessModal();
        } else {
         
            console.error('Error al agregar maquina:', data.message);

            createErrorModal();
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}

