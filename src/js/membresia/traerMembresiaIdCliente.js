import { createErrorModal } from "../mensajesSalidas/errorModal.js";
import { createSuccessModal } from "../mensajesSalidas/succesModal.js";

export async function buscarMembresiaPorCliente(idCliente) {
    try {
        const response = await fetch(`http://localhost:3000/buscar-membresia-cliente/${idCliente}`);
        
        if (response.ok) {
            const data = await response.json();
            
            if (data.length > 0) {
                console.log('Membresía:', data);
                return data; 
            } else {
                return []; 
            }
        } else {
            console.error("Error en la respuesta del servidor");
            createErrorModal("Error en el servidor al buscar membresías.");
            return []; // Retorna un arreglo vacío en caso de error del servidor
        }
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        createErrorModal("Error al conectar con el servidor.");
        return []; // Retorna un arreglo vacío en caso de error de conexión
    }
}
