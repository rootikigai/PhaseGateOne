import unittest
from checkout_system import get_item_price, get_cart_total, give_discount, take_vat
from unittest import TestCase

class TestCheckoutSystemFunctions(TestCase):
    def test_that_get_item_price_function_works(self):
        actual = get_item_price(2, 500)
        expected = 1000
        self.assertEqual(actual, expected)

    def test_that_get_cart_total_function_works(self):
        cart = [{"item": "Bread", "qty": 2, "price_per_unit": 500}, {"item": "Milk", "qty": 1, "price_per_unit": 800}]
        actual = get_cart_total(cart)
        expected = (2 * 500) + (1 * 800)
        self.assertEqual(actual, expected)

    def test_that_give_discount_function_works(self):
        cart = [{"item": "Bread", "qty": 2, "price_per_unit": 500}, {"item": "Milk", "qty": 1, "price_per_unit": 800}]
        discount_rate = (7.5 / 100)
        actual = get_cart_total(cart) * discount_rate
        expected = 1800 * (7.5 / 100)
        self.assertEqual(actual, expected)
        discount = 1800 * (7.5 / 100)
        amount_after_discount = get_cart_total(cart) - discount
        actual = amount_after_discount
        expected = 1665
        self.assertEqual(actual, expected)

    def test_that_take_vat_function_works(self):
        amount_after_discount = 1665
        vat_rate = (10 / 100)
        actual = amount_after_discount * vat_rate
        expected = 166.5
        self.assertEqual(actual, expected)
        
#if __name__ == '__main__':
    unittest.main()
