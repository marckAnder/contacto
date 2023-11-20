let contacts = [];

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    addContactToList(name, phone, email);
    document.getElementById('contactForm').reset();
});

function addContactToList(name, phone, email) {
    const contact = { name, phone, email };
    contacts.push(contact);
    renderContactList();
}

function renderContactList() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';

    contacts.forEach(function(contact, index) {
        const listItem = document.createElement('li');
        listItem.textContent = `${contact.name} - ${contact.phone} - ${contact.email}`;
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', function() {
            editContact(index);
        });
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function() {
            deleteContact(index);
        });
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        contactList.appendChild(listItem);
    });
}

function editContact(index) {
    const contact = contacts[index];
    document.getElementById('name').value = contact.name;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('email').value = contact.email;
    const submitButton = document.getElementById('contactForm').querySelector('button[type="submit"]');
    submitButton.textContent = 'Guardar Cambios';
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        contact.name = document.getElementById('name').value;
        contact.phone = document.getElementById('phone').value;
        contact.email = document.getElementById('email').value;
        submitButton.textContent = 'Agregar Contacto';
        renderContactList();
    });
}

function deleteContact(index) {
    contacts.splice(index, 1);
    renderContactList();
}