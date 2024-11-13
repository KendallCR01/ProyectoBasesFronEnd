export function createLoginErrorModal() {
    
    let existDiv = document.getElementById('loginErrorModal');

    // Check if the modal already exists
    if (existDiv) {
        existDiv.style.display = 'block';
        return;
    }

    // Create modal for login error
    const modal = document.createElement('div');
    modal.id = 'loginErrorModal';
    modal.classList.add('error-modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Close button (X)
    const closeModal = document.createElement('span');
    closeModal.classList.add('close');
    closeModal.innerHTML = '&times;';

    // Modal title
    const modalTitle = document.createElement('h2');
    modalTitle.textContent = '¡Error de Inicio de Sesión!';

    // Error message
    const messageContent = document.createElement('p');
    messageContent.textContent = 'Cliente no existente. Por favor, verifica tus credenciales.';

    // Close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Cerrar';
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Append elements to the modal
    modalContent.appendChild(closeModal);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(messageContent);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Close modal when (X) is clicked
    closeModal.onclick = function () {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
