// trabajadores/traerTrabajadores.js

export const getInstructores = async () => {
    try {
        const response = await fetch('http://localhost:3000/obtener-todos-trabajadores'); // Adjust the API endpoint as needed
        const trabajadores = await response.json();
        
        // Filter trabajadores to only include those with the role of "instructor"
        const instructores = trabajadores.filter(trabajador => trabajador.rool === "instructor");
        
        return instructores;
    } catch (error) {
        console.error("Error fetching trabajadores:", error);
        return [];
    }
};
