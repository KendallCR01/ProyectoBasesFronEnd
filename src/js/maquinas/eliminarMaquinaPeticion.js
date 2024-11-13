import { createErrorModal } from "../mensajesSalidas/errorModal.js";
import { createSuccessModal } from "../mensajesSalidas/succesModal.js";
import { tableMaquinas } from "./viewMaquinas.js";

export const eliminarMaquina = async (id_maquina) => {
    try {
        const response = await fetch(`http://localhost:3000/delete-maquina/${id_maquina}`, {
            method: 'DELETE', // Método HTTP
            headers: {
                'Content-Type': 'application/json', // Indicamos que enviamos datos en formato JSON si es necesario
            }
        });
        const data = await response.json();

        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
            console.log('Maquina eliminado con éxito:', data.message);
            createSuccessModal(); // Mostrar modal de éxito
        } else {
            console.error('Error al eliminar Maquina:', data.message);
            createErrorModal(); // Mostrar modal de error
        }
        tableMaquinas();
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        createErrorModal(); // Mostrar modal de error en caso de excepción
    }
};
