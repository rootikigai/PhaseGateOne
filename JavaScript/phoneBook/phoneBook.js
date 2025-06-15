const prompt = require("prompt-sync")();

let contacts = [];
let searchContact = [];
let firstName;
let lastName;
let phone;

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

function editContact(search, newFirstName, newLastName, newPhone){
  for(let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];

    if(contact.firstName === search || contact.lastName === search || contact.phone === search){
        contact.firstName = newFirstName;
        contact.lastName = newLastName;
        contact.phone = newphone;

        console.log("Contact updated.");
        return;
    }
  }

  console.log("Contact not found.");
}

/*
addContact("Kelvin", "Ifeanyi", "08035859351");
addContact("Root", "Ikigai", "08044554433")
//removeContact("Kelvin");
let found = findContact("Ikigai")
console.log(found);
//console.log(contacts)
*/


let menu = prompt(`
=====================================================
                        PHONEBOOK
=====================================================
Type the corresponding number to make a selection and 
perform an operation.

1.  Add Contact
2.  Remove Contact
3.  Find Contact
4.  Edit Contact
5.  Exit

Your choice: 
`);

//while(true){
    switch(menu){
        case "1":
            console.log(`
+++++++++++
ADD CONTACT
+++++++++++
`);
            firstName = prompt("Enter the contact's first name: ");
            lastName = prompt("Enter the contact's last name: ");
            phone = prompt("Enter the contact's phone number: ");
            addContact(firstName, lastName, phone)
            console.log(contacts)
            break;

        case "2":
            
    }
//}
