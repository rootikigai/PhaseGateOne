let contacts = [];
let searchContact = [];

function addContact(firstName, lastName, phone){
    contact = {
        firstName: firstName,
        lastName: lastName,
        phone: phone
    };
    contacts.push(contact)
}

function removeContact(search){
    for(let i = 0; i < contacts.length; i++){
        let contact = contacts[i];
        if(contact.firstName === search || contact.lastName === search || contact.phone === search){
            contacts.splice(i, 1);
            console.log(`Removed ${contact.firstName} ${contact.lastName}`);
            return;
        }
    }
    console.log("Not in phonebook.")
}

function findContact(search){
    for(let i = 0; i < contacts.length; i++){
        let contact = contacts[i];
    
        if(contact.firstName === search || contact.lastName === search || contact.phone === search){
            searchContact.push(contact);
        }
    }
    return searchContact;
}

addContact("Kelvin", "Ifeanyi", "08035859351");
addContact("Root", "Ikigai", "08044554433")
//removeContact("Kelvin");
let found = findContact("Ikigai")
console.log(found);
//console.log(contacts)




