

import { createErrorModal } from "../mensajesSalidas/errorModal.js";
import { createSuccessModal } from "../mensajesSalidas/succesModal.js";


export const inscribirseFormulario = async (formData) => {
    try {
        const response = await fetch('http://localhost:3000/inscribirseFormulario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        
        if (response.ok) {
            createSuccessModal();
            console.log('Inscripción exitosa:', result.message);
        } else {
            console.error('Error:', result.message);
            createErrorModal();
        }
    } catch (error) {
        console.error('Hubo un error en la solicitud:', error);
        alert('Error en la solicitud de inscripción');
    }
};

