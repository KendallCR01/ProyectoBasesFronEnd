// Función de login utilizando una función flecha
export const loginUser = async (user, password) => {
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user, password })  // Enviar username y password
        });

        // Si la respuesta es exitosa (código 200)
        if (response.ok) {
            const data = await response.json();
            console.log('Estado:', data.message);  // Muestra el mensaje del estado
            console.log('Rol:', data.role);        // Muestra el rol asignado (INSTRUCTOR o NULL)

            // Retornar el rol o la respuesta completa
            return data.role;  // Regresa el rol
        } else {
            // Si la respuesta no es exitosa, manejar el error
            const errorData = await response.json();
            console.error('Error:', errorData.message);
            return null;  // Retorna null si no se obtiene el rol
        }
    } catch (error) {
        console.error('Error al conectar con el backend:', error);
        return null;  // Retorna null en caso de error en la conexión
    }
};
