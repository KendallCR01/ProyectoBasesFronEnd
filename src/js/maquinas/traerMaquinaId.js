import { createErrorModal } from "../mensajesSalidas/errorModal.js";
import { createSuccessModal } from "../mensajesSalidas/succesModal.js";

export async function buscarCurso(id) {
    try {
        const response = await fetch(`http://localhost:3000/buscar-maquina/${id}`);
        
        if (response.ok) {
            const data = await response.json();
            // Aquí puedes llamar a una función para mostrar los datos en el frontend
            
            return data;
        } else if (response.status === 404) {
            createErrorModal();
        } else {
            console.error("Error en la respuesta del servidor");
            createErrorModal() ;
        }
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
}
