const contactList = document.getElementById('contacts-list');

const addContacts = () => {
    contacts.forEach(function(contact){
        let newContact = document.createElement('div');
        newContact.className = 'contacts-list--item';
        contactList.appendChild(newContact);
        let newName = document.createElement('div');
        newName.classList = 'contact-name';
        newName.textContent = contact.name;
        newContact.appendChild(newName);
        let newInfo = document.createElement('div');
        newInfo.classList = 'contact-info';
        newInfo.textContent = contact.email;
        newContact.appendChild(newInfo);       
    }, contacts)
}

//Mock data to play with functionality and test
const contacts = [
    {
        name: 'Jimmie',
        email: 'jimmie@gmail.com',
        phone: '555-555-5555',
        address: '123 S. Somewhere'
    },
    {
        name: 'Jimmie3',
        email: 'jimmie@gmail.com',
        phone: '555-555-5555',
        address: '123 S. Somewhere'
    },
    {
        name: 'Jimmie4',
        email: 'jimmie@gmail.com',
        phone: '555-555-5555',
        address: '123 S. Somewhere'
    },
    {
        name: 'Jimmie5',
        email: 'jimmie@gmail.com',
        phone: '555-555-5555',
        address: '123 S. Somewhere'
    },
    {
        name: 'Jimmie6',
        email: 'jimmie@gmail.com',
        phone: '555-555-5555',
        address: '123 S. Somewhere'
    },
    {
        name: 'Jimmie7',
        email: 'jimmie@gmail.com',
        phone: '555-555-5555',
        address: '123 S. Somewhere'
    },
    {
        name: 'Jimmie9',
        email: 'jimmie@gmail.com',
        phone: '555-555-5555',
        address: '123 S. Somewhere'
    }
];

addContacts();