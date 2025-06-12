from datetime import datetime
from datetime import timedelta

customers = []
cashiers = []

def get_current_datetime():
	return datetime.now().strftime("%Y-%m-%d %H:%M:%S")

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

def get_net_amount(cart_total, discount, vat):
    net_amount = (cart_total - discount) + vat
    return net_amount

def get_invoice(customer_name, customer_phone, cashier_name, cart, cart_total, discount_rate, discount, vat_rate, vat, net_amount):
    print("_______________________INVOICE______________________________")
    print("SEMICOLON STORES\nMAIN BRANCH\nLOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.\nTEL: 08089765432")
    print("Date: ", get_current_datetime())
    print("Cashier: ", cashier_name)
    print("Customer: ", customer_name)
    print("Ph.No: ", customer_phone)
    print("============================================================")
    print("ITEM(s)\tQTY\tPRICE\tTOTAL(NGN)")
    for item in cart:
        item_total = item["qty"] * item["price_per_unit"]
        print(f"{item["item"]:>16} {str(item["qty"]):>10} {str(item["price_per_unit"]):>10} {item_total}")
    print("------------------------------------------------------------")
    print(f"{'SubTotal: ':>40}", cart_total)
    print(f"{'Discount: ':>40}", discount)
    print(f"{'VAT: ':>40}", vat)
    print("============================================================")
    print(f"{'Bill Total: ':>40}", net_amount)
    print("============================================================")
    print(f"\t{'THIS IS NOT A RECEIPT. KINDLY PAY'}", net_amount)
    print("============================================================")

def get_balance(customer_pay, net_amount):
    balance = customer_pay - net_amount
    return balance

def get_receipt(customer_name, customer_phone, cashier_name, cart, cart_total, discount_rate, discount, vat_rate, vat, net_amount, customer_pay, balance):
    print("_______________________INVOICE______________________________")
    print("SEMICOLON STORES\nMAIN BRANCH\nLOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.\nTEL: 08089765432")
    print("Date: ", get_current_datetime())
    print("Cashier: ", cashier_name)
    print("Customer: ", customer_name)
    print("Ph.No: ", customer_phone)
    print("============================================================")
    print("ITEM(s)\tQTY\tPRICE\tTOTAL(NGN)")
    for item in cart:
        item_total = item["qty"] * item["price_per_unit"]
        print(f"{item["item"]:>16} {str(item["qty"]):>10} {str(item["price_per_unit"]):>10} {item_total}")
    print("------------------------------------------------------------")
    print(f"{'SubTotal: ':>40}", cart_total)
    print(f"{'Discount: ':>40}", discount)
    print(f"{'VAT: ':>40}", vat)
    print("============================================================")
    print(f"{'Bill Total: ':>40}", net_amount)
    print(f"{'Amount Paid: ':>40}", customer_pay)
    print(f"{'Balance: ':>40}", balance)
    print("============================================================")
    print("\tTHANK YOU FOR YOUR PATRONAGE")
    print("============================================================")


#...

while True:
    cart = []
    customer_name = input("Enter customer's name: ")
    customer_phone = input("Enter customer's phoneNo.: ")
    add_customer(customer_name, customer_phone)

    nav = "yes"
    while True:
        item = input(f"What did {customer_name} buy?: ")
        qty = int(input(f"How many quantities of {item} did customer {customer_name} buy?: "))
        price_per_unit = float(input(f"What is the unit price of {item}?: "))
        cart.append({"item": item, "qty": qty, "price_per_unit": price_per_unit})
        nav = input("Add more items? (yes or no): ").lower()
        if nav == "no":
            break

    cart_total = get_cart_total(cart)
    cashier_name = input("You are the cashier, enter your name: ")
    add_cashier(cashier_name)

    discount_rate = float(input("Enter discount rate (if none, enter 0): "))
    discount, amount_after_discount = give_discount(cart_total, discount_rate)
    #amount_after_discount = give_discount(cart_total, discount_rate)
    vat_rate = float(input("Enter VAT rate: "))
    vat, amount_after_vat = take_vat(amount_after_discount, vat_rate);
    #amount_after_vat = take_vat(amount_after_discount, vat_rate);
    net_amount = get_net_amount(cart_total, discount, vat);

    get_invoice(customer_name, customer_phone, cashier_name, cart, cart_total, discount_rate, discount, vat_rate, vat, net_amount)

    customer_pay = int(input("How much did the customer give you?: "))
    balance = get_balance(customer_pay, net_amount)

    get_receipt(customer_name, customer_phone, cashier_name, cart, cart_total, discount_rate, discount, vat_rate, vat, net_amount, customer_pay, balance)

    another_customer = input("Serve another customer? (yes/no): ").lower()
    if another_customer == "no":
        print("Closing register...Goodbye!")
        break
