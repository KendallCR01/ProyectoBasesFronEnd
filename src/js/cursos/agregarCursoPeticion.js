import { createSuccessModal } from "../mensajesSalidas/succesModal.js";
import { createErrorModal } from "../mensajesSalidas/errorModal.js";

export const agregarPostCurso = async (courseData) =>{
    try {
        const response = await fetch('http://localhost:3000/insertar-curso', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(courseData),
        });

        const data = await response.json();

        if (response.ok) {
            // Si la respuesta es exitosa, puedes mostrar un mensaje de éxito
            console.log('Curso agregado con éxito:', data.message);
            // Puedes agregar un modal o alert para confirmar la acción

            createSuccessModal();
        } else {
            // Si la respuesta no es exitosa, mostramos un mensaje de error
            console.error('Error al agregar curso:', data.message);

            createErrorModal();
        }
    } catch (error) {
        console.error('Error al enviar datos al servidor:', error);
        alert('Hubo un problema al conectar con el servidor');
    }
}
