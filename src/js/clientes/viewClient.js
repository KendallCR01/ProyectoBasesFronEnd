import { logoutUser } from "../conexion/logout.js";
import { viewInicio } from "../mostrarInicio.js";

export const viewCliente = (username) => {
    // Clear and set up header
    const divHeader = document.querySelector(".header");
    divHeader.innerHTML = '';

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    // Membresía option
    const liMembresia = document.createElement('li');
    liMembresia.textContent = 'MEMBRESÍA';
    ul.appendChild(liMembresia);

    liMembresia.addEventListener('click', (event) => {
        event.preventDefault();
        viewMembresia();
    });

    // Logout option
    const liLogout = document.createElement('li');
    liLogout.textContent = 'LOGOUT';
    ul.appendChild(liLogout);

    liLogout.addEventListener('click', async (event) => {
        event.preventDefault();
        if (logoutUser(username)) {
            viewInicio();
        }
    })

    // Add navigation elements to header
    nav.appendChild(ul);
    divHeader.appendChild(nav);

    // Set up main welcome message
    const divMain = document.querySelector(".main");
    divMain.innerHTML = '';

    const divWelcome = document.createElement('div');
    divWelcome.classList.add('viewClient');  // Same class as Instructor view

    const welcomeText = document.createElement('h1');
    welcomeText.textContent = 'BIENVENIDO CLIENTE';

    divWelcome.appendChild(welcomeText);
    divMain.appendChild(divWelcome);
};
