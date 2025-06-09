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

function getItemPrice(qty, pricePerUnit){
    return qty * pricePerUnit;
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

function getInvoice(customerName, customerPhone, cashierName, cart, cartTotal, discountRate, discount, vatRate, vat, netAmount){
    let invoice = `
____________________INVOICE_______________________________
SEMICOLON STORES
MAIN BRANCH
LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.
TEL: 08089765432
Date: ${(getCurrentDateTime())}
Cashier: ${cashierName}
Customer: ${customerName}   Ph.No: ${customerPhone}
==========================================================
ITEM(s)         QTY         PRICE               TOTAL(NGN)
----------------------------------------------------------`
//${item}       ${qty}    ${pricePerUnit}     ${getItemPrice()}
    for(let item of cart){
        let itemTotal = item.qty * item.pricePerUnit
        invoice += `${item.item.padEnd(10)} ${String(item.qty).padEnd(9)} ${String(item.pricePerUnit).padEnd(10)} ${itemTotal}`
    }
    invoice += `
----------------------------------------------------------
                            Sub Total:      ${cartTotal}
                            Discount:       ${discount}
                        VAT @ ${vatRate}%:  ${vat}
==========================================================
                            Bill Total:     ${netAmount}
==========================================================
`;
console.log(invoice);
}
//getInvoice();

function getBalance(customerPay, netAmount){
    let balance = customerPay - netAmount;
    return balance;
}

function getReceipt(invoice, amountPaid){

}

//...
let customerName = prompt("Enter customer's name: ");
let customerPhone = prompt("Enter customer's phoneNo.: ");
addCustomer(customerName, customerPhone);

let item = prompt(`What did customer ${customerName} buy?: `);
let qty = parseInt(prompt(`How many quantities of ${item} did customer ${customerName} buy: `));
let pricePerUnit = parseFloat(prompt(`What is the unit price of ${item}: `));
getItemPrice(qty, pricePerUnit);
addToCart(item, qty, pricePerUnit);

let cartTotal = getCartTotal(cart);

let cashierName = prompt("You are the cashier, enter your name: ");
addCashier(cashierName);

let discountRate = parseFloat(prompt("Enter discount rate (if none, enter 0): "))
let {discount, amountAfterDiscount} = giveDiscount(cartTotal, discountRate);
let vatRate = parseFloat(prompt("Enter VAT rate: "));
let {vat, amountAfterVAT} = takeVAT(amountAfterDiscount, vatRate);
let netAmount = getNetAmount(cartTotal, discount, vat);
let customerPay = parseFloat(prompt(`How much did customer ${customerName} give to you?: `));
let balance = getBalance(customerPay, netAmount);

getInvoice(customerName, customerPhone, cashierName, cart, cartTotal, discountRate, discount, vatRate, vat, netAmount);
getReceipt();
