export function createErrorModal(message) {
    let existDiv = document.getElementById('errorModal');

    if (existDiv) {
        existDiv.style.display = 'block';
        return;
    }

    // Crear modal de error
    const modal = document.createElement('div');
    modal.id = 'errorModal';
    modal.classList.add('error-modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Botón cerrar (X)
    const closeModal = document.createElement('span');
    closeModal.classList.add('close');
    closeModal.innerHTML = '&times;';

    // Título del modal
    const modalTitle = document.createElement('h2');
    modalTitle.textContent = '¡Error!';

    // Mensaje de error
    const messageContent = document.createElement('p');
    messageContent.textContent = message;

    // Botón de cerrar
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Cerrar';
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Agregar elementos al modal
    modalContent.appendChild(closeModal);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(messageContent);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    closeModal.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}