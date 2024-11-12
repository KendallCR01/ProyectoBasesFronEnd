import { login } from "./mostrarLogin.js";

export const registerView = () => {
    
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML='';

    const divRegister = document.createElement('div');
    divRegister.classList.add('register'); // Cambié el nombre de la clase a 'register'

    const text = document.createElement('h1');
    text.textContent = 'REGISTER'; // Cambié el título

    const form = document.createElement('form');
    form.action = '/register'; // Cambié la acción del formulario a '/register'
    form.method = 'POST';

    const labelUsername = document.createElement('label');
    labelUsername.setAttribute('for', 'username');
    labelUsername.textContent = 'Usuario';

    const inputUsername = document.createElement('input');
    inputUsername.type = 'text';
    inputUsername.id = 'username';
    inputUsername.name = 'username';
    inputUsername.required = true;

    const labelEmail = document.createElement('label'); // Agregué un nuevo campo para el correo electrónico
    labelEmail.setAttribute('for', 'email');
    labelEmail.textContent = 'Correo Electrónico';

    const inputEmail = document.createElement('input');
    inputEmail.type = 'email'; // Cambié el tipo a email
    inputEmail.id = 'email';
    inputEmail.name = 'email';
    inputEmail.required = true;

    const labelPassword = document.createElement('label');
    labelPassword.setAttribute('for', 'password');
    labelPassword.textContent = 'Contraseña';

    const inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.id = 'password';
    inputPassword.name = 'password';
    inputPassword.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Registrarse'; // Cambié el texto del botón

    const loginLink = document.createElement('a'); // Cambié el nombre de la variable a loginLink
    loginLink.textContent = 'Iniciar Sesión'; // Cambié el texto del enlace
    loginLink.classList.add('highlight');
    loginLink.href = '#'; // Puedes cambiar la URL según sea necesario

    divRegister.appendChild(text);
    
    form.appendChild(labelUsername);
    form.appendChild(inputUsername);
    form.appendChild(labelEmail); // Añadí el nuevo campo de correo electrónico
    form.appendChild(inputEmail); // Añadí el nuevo input de correo electrónico
    form.appendChild(labelPassword);
    form.appendChild(inputPassword);
    form.appendChild(submitButton);
    form.appendChild(loginLink); // Cambié la variable a loginLink

    divRegister.appendChild(form);

    divPrincipal.appendChild(divRegister);

    setTimeout(() => {
        divRegister.classList.add('registerActive'); // Añade la clase activa para el registro
    }, 10);

    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el envío automático para acceder a los valores
        const usernameValue = inputUsername.value;
        const emailValue = inputEmail.value; // Captura el valor del correo electrónico
        const passwordValue = inputPassword.value;

        console.log("Usuario:", usernameValue);
        console.log("Correo Electrónico:", emailValue); // Muestra el correo electrónico en la consola
        console.log("Contraseña:", passwordValue);

        // Aquí podrías enviar los valores al servidor o hacer alguna validación
    });

    // Puedes agregar el evento para el enlace de iniciar sesión si es necesario
    loginLink.addEventListener('click', (event) => {
        event.preventDefault();
        try {
            login();
        } catch (error) {
            console.log(error.message);

        }
    });
}