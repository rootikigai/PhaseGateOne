const prompt = require("prompt-sync")();

let customers = [];
let cart = [];

function addCustomer(customerName, customerPhone){
    return customers.push({customerName, customerPhone});
}

function addToCart(item, qty, pricePerUnit){
    return cart.push({item, qty, pricePerUnit});
}

let customerName = prompt("Enter customer name: ");
let customerPhone = prompt("Enter customer phone: ")
