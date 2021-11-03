<?php

use App\Entity\Cart;
use App\Entity\Product;
use Behat\Behat\Context\Context;
use Behat\Behat\Tester\Exception\PendingException;
use Behat\Gherkin\Node\PyStringNode;
use Behat\Gherkin\Node\TableNode;

/**
 * Defines application features from the specific context.
 */
class CartContext implements Context
{
    private array $products;
    private $cart;
    /**
     * Initializes context.
     *
     * Every scenario gets its own context instance.
     * You can also pass arbitrary arguments to the
     * context constructor through behat.yml.
     */
    public function __construct()
    {
        $this->products = [];
        $this->cart = new Cart();
    }

    /**
     * @Given there is a :productName, which costs :price €
     */
    public function thereIsAProductWhichCosts(string $productName, float $price)
    {
        $product = (new Product())
            ->setName($productName)
            ->setPrice($price);

        $this->products[] = $product;
    }

    /**
     * @When I add the :productName to the cart
     */
    public function iAddProductToTheCart($productName)
    {
        foreach ($this->products as $product) {
            $this->cart->addProduct($product);
        }
    }

    /**
     * @Then I should have :nbPproduct product in the cart
     * @Then I should have :nbProduct products in the cart
     */
    public function iShouldHaveAProductInTheCart(int $nbProduct)
    {
        if ($this->cart->getProducts()->count() !== $nbProduct) {
            throw new Exception("Nb of product is not good !");
        }
    }

    /**
     * @Then the overall cart price should be :price €
     */
    public function theOverallCartPriceShouldBe(float $price)
    {
        dump($price);
        dump($this->cart->getTotalPrice());

        if ($this->cart->getTotalPrice() !== $price) {
            throw new Exception("The price is not good !");
        }
    }
}
