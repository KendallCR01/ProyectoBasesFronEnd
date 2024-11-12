export const logoutUser = async (username) => {
    try {
        const response = await fetch('http://localhost:3000/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }), // Enviar el nombre de usuario en el cuerpo de la solicitud
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message); // Mensaje de éxito, por ejemplo, "Sesión cerrada correctamente."
            // Aquí podrías redirigir al usuario a una página de inicio de sesión o a otra vista
        } else {
            const errorData = await response.json();
            console.log(errorData.message); // En caso de error, como "No hay ninguna sesión activa para este usuario."
        }
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
};