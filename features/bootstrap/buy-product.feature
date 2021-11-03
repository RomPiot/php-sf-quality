Feature: Cart products
    In order to buy products
    As a customer
    I need to be able to put interesting products into a cart

    Rules:
    - VAT is 20%
    - Delivery for cart under 10.00 € is 3.00 €
    - Delivery for cart over 10.00 € is 2.00 €

    Scenario: Buying a single product under 10.00 €
        Given there is a "Apple 10", which costs 5.00 €
        When I add the "Apple 10" to the cart
        Then I should have 1 product in the cart
        And the overall cart price should be 9.00 €

    Scenario: Buying a single product over 10.00 €
        Given there is a "Apple 10", which costs 15.00 €
        When I add the "Apple 10" to the cart
        Then I should have 1 product in the cart
        And the overall cart price should be 20.00 €

    Scenario: Buying two products under 10.00 €
        Given there is a "Apple 10", which costs 3.00 €
        And there is a "Samsung Galaxy S11", which costs 2.00 €
        When I add the "Apple 10" to the cart
        And I add the "Samsung Galaxy S11" to the cart
        Then I should have 2 products in the cart
        And the overall cart price should be 9.00 €

    Scenario: Buying two products over 10.00 €
        Given there is a "Apple 10", which costs 10.00 €
        And there is a "Samsung Galaxy S11", which costs 5.00 €
        When I add the "Apple 10" to the cart
        And I add the "Samsung Galaxy S11" to the cart
        Then I should have 2 products in the cart
        And the overall cart price should be 20.00 €