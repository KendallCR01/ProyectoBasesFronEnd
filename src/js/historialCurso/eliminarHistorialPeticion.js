import { createErrorModal } from "../mensajesSalidas/errorModal.js";
import { createSuccessModal } from "../mensajesSalidas/succesModal.js";
import { tableHistorialCursos } from "./viewHistorialCursos.js";

export const eliminarHistorial = async (id_historial) => {
    try {
        const response = await fetch(`http://localhost:3000/delete-historial-curso/${id_historial}`, { // Usar comillas invertidas para la interpolación
            method: 'DELETE', // Método HTTP
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();

        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
            console.log('Historial de curso eliminado con éxito:', data.message);
            createSuccessModal(); // Mostrar modal de éxito
            tableHistorialCursos();
        } else {
            console.error('Error al eliminar historial de curso:', data.message);
            createErrorModal(); // Mostrar modal de error
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        createErrorModal(); // Mostrar modal de error en caso de excepción
    }
};
