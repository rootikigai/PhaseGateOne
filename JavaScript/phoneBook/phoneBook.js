const prompt = require("prompt-sync")();

let contacts = [];
let firstName;
let lastName;
let phone;
let search;
let nav;

function addContact(firstName, lastName, phone){
    let contact = {
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
    let searchContact = [];
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
        contact.phone = newPhone;

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

while(true){
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

    if(menu === "5"){
        console.log("Exiting Phonebook...");
        break;
    }
    else{
        switch(menu){
            case "1":
                while(true){
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
                    nav = prompt("Press 0 to go back to main menu or 1 to ad another contact: ");
                    if(nav === "0"){
                        break;
                    }
                }
                break;

            case "2":
                console.log(`
--------------
REMOVE CONTACT
--------------
`);
                let search = prompt("Enter the contact's first name, last name or phone number to search: ").toLowerCase();
                removeContact(search);
                console.log(contacts)
                break;

            case "3":
                console.log(`
!!!!!!!!!!!!
FIND CONTACT
!!!!!!!!!!!!
`);
                search = prompt("Enter name or number to find: ");
                let results = findContact(find);
                if (results.length > 0) {
                    console.log("Contact(s) found:");
                    console.log(results);
                } else {
                    console.log("No contact found.");
                }
                break;

            case "4":
                console.log(`
............
EDIT CONTACT
............
`);
                search = prompt("Enter name or number to search for contact: ");
                let newFirst = prompt("Enter new first name or leave as is: ");
                let newLast = prompt("Enter new last name or leave as is: ");
                let newPhone = prompt("Enter new phone number or leave as is: ");
                editContact(search, newFirst, newLast, newPhone);
                break;

            default:
                console.log("That's an invalid input. Try again");

        }
    }
}
