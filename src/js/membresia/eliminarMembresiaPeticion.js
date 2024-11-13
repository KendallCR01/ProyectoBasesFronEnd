import { createErrorModal } from "../mensajesSalidas/errorModal.js";
import { createSuccessModal } from "../mensajesSalidas/succesModal.js";
import { tableMembresia } from "./viewMembresia.js";

export const eliminarMembresia = async (id_membresia) => {
    try {
        const response = await fetch(`http://localhost:3000/delete-membresia/${id_membresia}`, {
            method: 'DELETE', // Método HTTP
            headers: {
                'Content-Type': 'application/json', // Indicamos que enviamos datos en formato JSON si es necesario
            }
        });
        const data = await response.json();

        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
            console.log('Membresia eliminada con éxito:', data.message);
            createSuccessModal(); // Mostrar modal de éxito
        } else {
            console.error('Error al eliminar Membresia:', data.message);
            createErrorModal(); // Mostrar modal de error
        }
        tableMembresia();
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        createErrorModal(); // Mostrar modal de error en caso de excepción
    }
};
