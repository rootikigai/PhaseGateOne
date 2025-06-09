from checkout_system import get_item_price
from unittest import TestCase

class TestCheckoutSystemFunctions(TestCase):
    def test_that_get_item_price_function_works(self):
        actual = get_item_price(2, 500)
        expected = 1000
        self.assertEqual(actual, expected)


