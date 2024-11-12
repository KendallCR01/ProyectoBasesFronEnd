import { createErrorModal } from "../mensajesSalidas/errorModal.js";
import { createSuccessModal } from "../mensajesSalidas/succesModal.js";

export const eliminarCurso = async (id_curso) => {
    try {
        const response = await fetch('http://localhost:3000/eliminar-curso', {
            method: 'POST', // Método HTTP
            headers: {
                'Content-Type': 'application/json', // Indicamos que enviamos datos en formato JSON
            },
            body: JSON.stringify({ id_curso }) // Enviamos el ID del curso en el cuerpo de la solicitud
        });

        const data = await response.json();

        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
            console.log('Curso eliminado con éxito:', data.message);
            createSuccessModal(); // Mostrar modal de éxito
        } else {
            console.error('Error al eliminar curso:', data.message);
            createErrorModal(); // Mostrar modal de error
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        createErrorModal(); // Mostrar modal de error en caso de excepción
    }
};
