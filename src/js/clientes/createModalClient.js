export function createAddClientModal() {
    let existDiv = document.getElementById('myModal');
  
    if (existDiv) {
      existDiv.style.display = 'block';
      existDiv.innerHTML = ''; // Limpiar contenido anterior
  
      // Modal content
      const modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');
      
      // Close button (X)
      const closeModal = document.createElement('span');
      closeModal.classList.add('close');
      closeModal.innerHTML = '&times;';
  
      // Title of the modal
      const modalTitle = document.createElement('h2');
      modalTitle.textContent = 'Agregar Cliente';
      modalTitle.style.color = "white";
  
      // Form inside modal
      const form = document.createElement('form');
      form.id = 'addClientForm';
  
      // Creating input fields dynamically
      const fields = [
        { id: 'nombre', label: 'Nombre', type: 'text', required: true },
        { id: 'apellido', label: 'Apellido', type: 'text', required: true },
        { id: 'email', label: 'Correo Electrónico', type: 'email', required: true },
        { id: 'telefono', label: 'Teléfono', type: 'tel', required: true },
        { id: 'direccion', label: 'Dirección', type: 'text', required: false }
      ];
  
      fields.forEach(field => {
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;
  
        const input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.id;
        input.required = field.required;
  
        // Append label and input to form
        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
      });
  
      // Submit button
      const submitButton = document.createElement('button');
      submitButton.type = 'submit';
      submitButton.textContent = 'Agregar Cliente';
      form.appendChild(submitButton);
  
      // Add the form to modal content
      modalContent.appendChild(closeModal);
      modalContent.appendChild(modalTitle);
      modalContent.appendChild(form);
  
      // Add modal content to modal div
      existDiv.appendChild(modalContent);
  
      // Handle form submission
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const clientData = {};
        fields.forEach(field => {
          const inputElement = document.getElementById(field.id);
          clientData[field.id] = inputElement.value;
        });

        closeModal.onclick = function () {
          modal.style.display = 'none';
        };
      
        window.onclick = function (event) {
          if (event.target === modal) {
            modal.style.display = 'none';
          }
        };
  
        console.log('Cliente agregado:', clientData);
  
        // Send the data to your backend (example using fetch)
        // fetch('/agregar-cliente', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(clientData)
        // });



  
        existDiv.style.display = 'none'; // Close modal after submission
      });
  
      return;
    }
  
    // If the modal does not exist, create it
    const modal = document.createElement('div');
    modal.id = 'myModal';
    modal.classList.add('modal', 'addClientModal');  // Add the new class for styling
  
    // Modal content
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
  
    // Close button (X)
    const closeModal = document.createElement('span');
    closeModal.classList.add('close');
    closeModal.innerHTML = '&times;';
  
    // Title of the modal
    const modalTitle = document.createElement('h2');
    modalTitle.textContent = 'Agregar Cliente';
    modalTitle.style.color = "white";
  
    // Form inside modal
    const form = document.createElement('form');
    form.id = 'addClientForm';
  
    // Creating input fields dynamically
    const fields = [
      { id: 'nombre', label: 'Nombre', type: 'text', required: true },
      { id: 'apellido', label: 'Apellido', type: 'text', required: true },
      { id: 'email', label: 'Correo Electrónico', type: 'email', required: true },
      { id: 'telefono', label: 'Teléfono', type: 'tel', required: true },
      { id: 'direccion', label: 'Dirección', type: 'text', required: false }
    ];
  
    fields.forEach(field => {
      const label = document.createElement('label');
      label.setAttribute('for', field.id);
      label.textContent = field.label;
  
      const input = document.createElement('input');
      input.type = field.type;
      input.id = field.id;
      input.name = field.id;
      input.required = field.required;
  
      // Append label and input to form
      form.appendChild(label);
      form.appendChild(input);
      form.appendChild(document.createElement('br'));
    });
  
    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Agregar Cliente';
    form.appendChild(submitButton);
  
    // Add the form to modal content
    modalContent.appendChild(closeModal);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(form);
  
    modal.appendChild(modalContent);
  
    document.body.appendChild(modal);
  
    // Close modal when clicking outside or on the close button
    closeModal.onclick = function () {
      modal.style.display = 'none';
    };
  
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  
    // Handle form submission
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const clientData = {};
      fields.forEach(field => {
        const inputElement = document.getElementById(field.id);
        clientData[field.id] = inputElement.value;
      });
  
      console.log('Cliente agregado:', clientData);
  
      // Send the data to your backend (example using fetch)
      // fetch('/agregar-cliente', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(clientData)
      // });
  
      modal.style.display = 'none'; // Close modal after submission
    });
  }
  