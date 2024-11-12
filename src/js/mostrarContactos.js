export const viewContactos = () => {
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = ''; // Limpia el contenido anterior

    // Crea el contenedor principal para la vista de contactos
    const divVistaContactos = document.createElement('div');
    divVistaContactos.classList.add('viewContactos');

    // Información de contacto
    const contactos = [
        { tipo: 'Teléfono', detalle: '(123) 456-7890' },
        { tipo: 'Correo Electrónico', detalle: 'info@gymLA.com' }
    ];

    // Título de la sección
    const titulo = document.createElement('h2');
    titulo.classList.add('titulo');
    titulo.textContent = 'Contáctanos';

    // Agrega el título al contenedor de contactos
    divVistaContactos.appendChild(titulo);

    // Crea un cuadro para cada contacto
    contactos.forEach(contacto => {
        const divContacto = document.createElement('div');
        divContacto.classList.add('contacto');

        const tipo = document.createElement('h3');
        tipo.textContent = contacto.tipo;

        const detalle = document.createElement('p');
        detalle.textContent = contacto.detalle;

        // Agrega tipo y detalle al cuadro de contacto
        divContacto.appendChild(tipo);
        divContacto.appendChild(detalle);

        // Agrega el cuadro de contacto al contenedor principal
        divVistaContactos.appendChild(divContacto);
    });




    // Agrega el contenedor de contactos al área principal
    divPrincipal.appendChild(divVistaContactos);

    setTimeout(() => {
        divVistaContactos.classList.add('viewContactosActive'); // Añade la clase activa
    }, 10);
};
