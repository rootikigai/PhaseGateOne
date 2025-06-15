let contacts = [];
let findContact = [];

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
/*
addContact("Kelvin", "Ifeanyi", "08035859351");
addContact("Root", "Ikigai", "08044554433")
removeContact("Kelvin");
console.log(contacts)
*/



