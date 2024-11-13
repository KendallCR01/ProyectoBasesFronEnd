import { createErrorModal } from "../mensajesSalidas/errorModal.js";
import { createSuccessModal } from "../mensajesSalidas/succesModal.js";


export const editarHistorialCurso = async (historialData) => {
    try {
        const response = await fetch(`http://localhost:3000/actualizar-historial-curso`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(historialData),
        });
    
        const data = await response.json();

        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
            // Si la respuesta es exitosa, puedes mostrar un mensaje de éxito
            console.log('Historial de curso editado con éxito:', data.message);
            // Puedes agregar un modal o alert para confirmar la acción

            createSuccessModal();
        } else {
            // Si la respuesta no es exitosa, mostramos un mensaje de error
            console.error('Error al agregar historial de Curso:', data.message);

            createErrorModal();
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}

