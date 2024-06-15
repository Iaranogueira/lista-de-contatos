const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');

let contacts = [];

function addContact(name, phone, email) {
    const newContact = {
        id: Date.now().toString(),
        name: name,
        phone: phone,
        email: email
    };
    contacts.push(newContact);
    displayContacts();
}
function displayContacts() {
    
    contactList.innerHTML = '';
    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${contact.name}</strong><br>
            <span>Telefone: ${contact.phone}</span><br>
            <span>E-mail: ${contact.email}</span><br>
            <button onclick="editContact('${contact.id}')">Editar</button>
            <button onclick="deleteContact('${contact.id}')">Excluir</button>
        `;
        contactList.appendChild(li);
    });
}
function deleteContact(id) {
    contacts = contacts.filter(contact => contact.id !== id);
    displayContacts();
}
function editContact(id) {
    const index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        const updatedName = prompt('Digite o novo nome:', contacts[index].name);
        const updatedPhone = prompt('Digite o novo telefone:', contacts[index].phone);
        const updatedEmail = prompt('Digite o novo e-mail:', contacts[index].email);
        if (updatedName && updatedPhone) {
            contacts[index].name = updatedName;
            contacts[index].phone = updatedPhone;
            contacts[index].email = updatedEmail || contacts[index].email;
            displayContacts();
        } else {
            alert('Nome e telefone são obrigatórios!');
        }
    }
}
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    addContact(name, phone, email);
    contactForm.reset();
});

displayContacts();
