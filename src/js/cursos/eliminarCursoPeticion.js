import { createErrorModal } from "../mensajesSalidas/errorModal.js";
import { createSuccessModal } from "../mensajesSalidas/succesModal.js";
import { tableCursos } from "./viewCursos.js";

export const eliminarCurso = async (id_curso) => {
    try {
        const response = await fetch(`http://localhost:3000/delete-cursos/${id_curso}`, { // Usar comillas invertidas para la interpolación
            method: 'DELETE', // Método HTTP
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
            console.log('Curso eliminado con éxito:', data.message);
            createSuccessModal(); // Mostrar modal de éxito
            tableCursos();
        } else {
            console.error('Error al eliminar curso:', data.message);
            createErrorModal(); // Mostrar modal de error
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        createErrorModal(); // Mostrar modal de error en caso de excepción
    }
};
