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

    Scenario Outline: Buying a single product over and under 10.00 €
        Given there is a <product>, which costs <costs> €
        When I add the <product> to the cart
        Then I should have 1 products in the cart
        And the overall cart price should be <total> €

        Examples:
            | product  | costs | total |
            | Product1 | 10.00 | 14.00 |
            | Product2 | 5.00  | 9.00  |
            | Product3 | 15.00 | 20.00 |

    Scenario Outline: Buying two products over and under 10.00 €
        Given there is a <product>, which costs <costs> €
        And there is a <product2>, which costs <costs2> €
        When I add the <product> to the cart
        And I add the <product2> to the cart
        Then I should have 2 products in the cart
        And the overall cart price should be <total> €

        Examples:
            | product  | costs | product2 | costs2 | total |
            | Product1 | 10.00 | Product2 | 5.00   | 20.00 |
            | Product3 | 3.00  | Product4 | 2.00   | 9.00  |
            | Product5 | 12.00 | Product6 | 8.00   | 26.00 |