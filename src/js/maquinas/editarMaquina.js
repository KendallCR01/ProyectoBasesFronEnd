import { createErrorModal } from "../mensajesSalidas/errorModal.js";
import { createSuccessModal } from "../mensajesSalidas/succesModal.js";


export const editarMaquina = async (courseData) => {
    try {
        const response = await fetch('http://localhost:3000/actualizar-maquina', {
            method: 'PUT', // Método HTTP
            headers: {
                'Content-Type': 'application/json', // Indicamos que enviamos datos en formato JSON
            },
            body: JSON.stringify(courseData), // Enviamos los datos del curso en el cuerpo de la solicitud
        });
    
        const data = await response.json();

        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
            // Si la respuesta es exitosa, puedes mostrar un mensaje de éxito
            console.log('Maquina editado con éxito:', data.message);
            // Puedes agregar un modal o alert para confirmar la acción

            createSuccessModal();
        } else {
            // Si la respuesta no es exitosa, mostramos un mensaje de error
            console.error('Error al agregar maquina:', data.message);

            createErrorModal();
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}

