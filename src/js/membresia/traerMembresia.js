export async function getMembresias() {
    try {
        const response = await fetch('http://localhost:3000/obtener-todas-membresias');
        const data = await response.json();

        if (data.message) {
            console.log(data.message);
            return [];
        } else {
            return data; 
        }
    } catch (error) {
        console.error('Error al obtener membresias:', error);
        return [];
    }
}
