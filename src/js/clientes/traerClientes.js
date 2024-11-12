export async function getClientes() {
    try {
        const response = await fetch('http://localhost:3000/obtener-todos-clientes');
        const data = await response.json();

        if (data.message) {
            console.log(data.message); // Si no hay trabajadores, muestra el mensaje
            return [];
        } else {
            return data; // Devuelve la lista de trabajadores como un arreglo de objetos
        }
    } catch (error) {
        console.error('Error al obtener trabajadores:', error);
        return [];
    }
}
