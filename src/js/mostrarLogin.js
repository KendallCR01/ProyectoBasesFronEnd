import { registerView } from "./mostrarRegister.js";
import { viewInstructor } from "../js/trabajadores/viewInstructor.js";
import { viewCliente } from "./clientes/viewClient.js";
import { loginUser } from "./conexion/peticionLogin.js";
import { viewSoporte } from "./soporte/viewSoporte.js";

export const login = async () => {

    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML='';

    const divLogin = document.createElement('div');

    divLogin.classList.add('login');

    const text = document.createElement('h1');

    text.textContent = 'LOGIN';

    const form = document.createElement('form');
    form.action = '/login';
    form.method = 'POST';

    const labelUsername = document.createElement('label');
    labelUsername.setAttribute('for', 'username');
    labelUsername.textContent = 'Usuario';

    const inputUsername = document.createElement('input');
    inputUsername.type = 'text';
    inputUsername.id = 'username';
    inputUsername.name = 'username';
    inputUsername.required = true;

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
    submitButton.textContent = 'Ingresar';

    const register = document.createElement('a');

    // Establecer el texto del enlace
    register.textContent = 'Register';
    
    // Agregar una clase para aplicar estilos
    register.classList.add('highlight');
    
    // Opcional: agregar un atributo href si es necesario
    register.href = '#'


    divLogin.appendChild(text);

    form.appendChild(labelUsername);
    form.appendChild(inputUsername);
    form.appendChild(labelPassword);
    form.appendChild(inputPassword);
    form.appendChild(submitButton);
    form.appendChild(register);

    divLogin.appendChild(form);

    divPrincipal.appendChild(divLogin);

    setTimeout(() => {
        divLogin.classList.add('loginActive'); // Añade la clase activa
    }, 10);


    submitButton.addEventListener('click',  async function (event) {
        try {
            event.preventDefault();
            const userRol= await loginUser(inputUsername.value,inputPassword.value);
            if(userRol==='instructor'){
                viewInstructor(inputUsername.value);
            }
            if(userRol==='cliente'){
                viewCliente(inputUsername.value);
            }
            if(userRol==='soporte'){
                viewSoporte(inputUsername.value);
            }
        } catch (error) {
            console.log(error.message);

        }
    })

    register.addEventListener('click', function () {
        try {
            registerView();
        } catch (error) {
            console.log(error.message);

        }
    })

}