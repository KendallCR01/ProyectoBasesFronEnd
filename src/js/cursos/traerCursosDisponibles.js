// cursos/traerCursos.js

export const getCursosDisponibles = async () => {
    try {
        const response = await fetch('http://localhost:3000/obtener-todos-cursos'); // Adjust the API endpoint as needed
        const cursos = await response.json();
        
        // Filter cursos to only include those with availability set to "Disponible"
        const cursosDisponibles = cursos.filter(curso => curso.disponibilidad === "Disponible");
        
        return cursosDisponibles;
    } catch (error) {
        console.error("Error fetching cursos:", error);
        return [];
    }
};
