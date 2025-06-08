const prompt = require("prompt-sync")();

let customers = [];
let cart = [];

function addCustomer(customerName, customerPhone){
    return customers.push({customerName, customerPhone});
}

function addToCart(item, qty, pricePerUnit){
    return cart.push({item, qty, pricePerUnit});
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
/*
function netAmount(cartTotal, discount, vat){

}

function getInvoice(customer, cart, discountRate, vatRate){

}

function getReceipt(invoice, amountPaid){

}

function getBalance(amountPaid, totalAmount){

}
*/
