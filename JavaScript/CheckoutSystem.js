const prompt = require("prompt-sync")();
const now = new Date();

let customers = [];
let cart = [];
let cashiers = [];


function getCurrentDateTime(){
  return new Date().toLocaleString();
}

function addCustomer(customerName, customerPhone){
    return customers.push({customerName, customerPhone});
}

function addToCart(item, qty, pricePerUnit){
    return cart.push({item, qty, pricePerUnit});
}

function addCashier(cashierName){
    return cashiers.push(cashierName);
}

function getCartTotal(cart){
    let cartTotal = 0;
    for(let item of cart){
        cartTotal += item.qty * item.pricePerUnit;
    }
    return cartTotal;
}

function giveDiscount(cartTotal, discountRate){
    let discount = cartTotal * (discountRate / 100);
    let amountAfterDiscount = cartTotal - discount;
    return {discount,
            amountAfterDiscount};
}

function takeVAT(amountAfterDiscount, vatRate){
    let vat = amountAfterDiscount * (vatRate / 100);
    let amountAfterVAT = amountAfterDiscount + vat
    return {vat, amountAfterVAT};
}

function getNetAmount(cartTotal, discount, vat){
    let netAmount = (cartTotal - discount) + vat;
    return netAmount
}

function getInvoice(customer, cart, discountRate, vatRate){
    let invoice = `
SEMICOLON STORES
MAIN BRANCH
LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.
TEL: 08089765432
Date: ${(getCurrentDateTime())}
Cashier: ${cashierName}
Customer: ${customerName}   Ph.No: ${customerPhone}
=======================================================
                ITEM    QTY     PRICE       TOTAL(NGN)
-------------------------------------------------------
        ${item}
`
console.log(invoice);
}
//getInvoice();

function getBalance(amountPaid, netAmount){
    let balance = netAmount - amountPaid;
    return balance;
}
function getReceipt(invoice, amountPaid){

}

//...
let customerName = prompt("Enter customer's name: ");
let customerPhone = prompt("Enter customer's phoneNo.: ");
let item = prompt("What did the customer buy?: ")
let cashierName = prompt("You are the cashier, enter your name: ")
addCustomer();
addCashier();
getInvoice();
addToCart();
