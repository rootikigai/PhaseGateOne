from datetime import datetime

customers = []
cashiers = []

def get_current_datetime():
	return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

def add_customer(customer_name, customer_phone):
    customers.append({"name": customer_name, "phone": customer_phone})
    return len(customers)

def add_cashier(cashier_name):
    cashiers.append(cashier_name)
    return len(cashiers)

def get_item_price(qty, price_per_unit):
    return qty * price_per_unit

def get_cart_total(cart):
    cart_total = 0
    for item in cart:
        cart_total += item["qty"] * item["price_per_unit"]
    return cart_total

def give_discount(cart_total, discount_rate):
    discount = cart_total * (discount_rate / 100)
    amount_after_discount = cart_total - discount
    return discount, amount_after_discount

def take_vat(amount_after_discount, vat_rate):
    vat = amount_after_discount * (vat_rate / 100)
    amount_after_vat = amount_after_discount + vat
    return vat, amount_after_vat

