import { createSuccessModal } from "../mensajesSalidas/succesModal.js";
import { createErrorModal } from "../mensajesSalidas/errorModal.js";

export const agregarPostHistorial = async (historialData) =>{
    try {
        const response = await fetch('http://localhost:3000/insertar-historial-curso', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(historialData),
        });

        const data = await response.json();

        if (response.ok) {
            // Si la respuesta es exitosa, puedes mostrar un mensaje de éxito
            console.log('Historial de curso agregado con éxito:', data.message);
            // Puedes agregar un modal o alert para confirmar la acción

            createSuccessModal();
        } else {
            // Si la respuesta no es exitosa, mostramos un mensaje de error
            console.error('Error al agregar historial de curso:', data.message);

            createErrorModal();
        }
    } catch (error) {
        console.error('Error al enviar datos al servidor:', error);
        alert('Hubo un problema al conectar con el servidor');
    }
}
