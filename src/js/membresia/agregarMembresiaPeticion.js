import { createSuccessModal } from "../mensajesSalidas/succesModal.js";
import { createErrorModal } from "../mensajesSalidas/errorModal.js";

export const agregarPostMembresia = async (membresiaData) => {
    try {
        const response = await fetch('http://localhost:3000/insert-membresia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(membresiaData),
        });

        const data = await response.json();

        if (response.ok) {
            // Si la respuesta es exitosa, puedes mostrar un mensaje de éxito
            console.log('Membresia agregada con éxito:', data.message);
            // Puedes agregar un modal o alert para confirmar la acción

            createSuccessModal();
        } else {
            // Si la respuesta no es exitosa, mostramos un mensaje de error
            console.error('Error al agregar membresia:', data.message);

            createErrorModal();
        }
    } catch (error) {
        console.error('Error al enviar datos al servidor:', error);
        alert('Hubo un problema al conectar con el servidor');
    }
}
