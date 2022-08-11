
/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

// Created products array to hold all product objects
let products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

const productCherry = {
          name: "Cherry",
          price: 4,
          quantity: 0,
          productId: 100,
          image: "images/cherry.jpg"
}

const productOrange = {
          name: "Orange",
          price: 5,
          quantity: 0,
          productId: 101,
          image: "images/orange.jpg"

}

const productStrawberry = {
          name: "Strawberry",
          price: 10,
          quantity: 0,
          productId: 102,
          image: "images/strawberry.jpg"
}


//Refactored approach to add product to the products array using push() function
// OBS: I observed more products can be added if we create more product objects

products.push(productCherry,productOrange,productStrawberry);


/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

// Global Variable to store the total amount in cart 
let totalCart;

// Global Variable to store the total amount paid at checkout
// let totalPaid = 0;

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

// Refactored addProductToCart() based on feedback from review

function addProductToCart(productId){

  //Loops through the products array using find() in helper and returns the product 
    let product = getProductByIdFromList(productId, products);
          
          //Checks if product already exists in the cart and increases quantity or add to cart if nonexistent
          //We can also implement this functionality using indexOf(); I wanted to try something different with includes()
            if(cart.includes(product)){

              product.quantity += 1;

            }else{

              product.quantity += 1;
              cart.push(product);

            }

}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
// Refactored this function to use helper function and access cart and not products array

function increaseQuantity(productId){

  //Loops through the products array to find the product using the helper function
    let product = getProductByIdFromList(productId, cart);

      //If the product exists in the cart, then increase quantity by 1
      product.quantity += 1;

      

}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
// refactored function to use helper function with find() array methond and access cart and not products list

function decreaseQuantity(productId){

  //Loops through the products array to find the product using the helper function
  let product = getProductByIdFromList(productId, cart);

    //Finds the actual product using the productId and increases quantity
      product.quantity -= 1;


        //If the quantity reaches zero, the product is removed from the cart array or simply cart
        if(product.quantity === 0){

            cart.splice(cart.indexOf(product), 1);
            
        };

}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
// refactored to use helper function with find() array method

function removeProductFromCart(productId){

  //Loops through the products array to find the product
  // Here we loop through the products array because we intend to set the original quantity back to 0
  let product = getProductByIdFromList(productId, cart);

      //Removes product from cart and set quantity back to 0 in the products array list
      product.quantity = 0;
      cart.splice(cart.indexOf(product), 1);

}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
// refactored cartTotal() 


function cartTotal(){

  // refactored to local scope variable totalCart
  totalCart = 0;


    for(const product of cart){

      
      totalCart = totalCart + (product.quantity * product.price);

      } 

      return totalCart;

}



/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){

    // deletes all items within the cart array by splicing from index 0 
      cart.splice(0, cart.length);

}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount) {

      //declare and initialize variable to hold balance after cash received is deducted from the total to be paid totalCart (global variable)
      let balance = 0;

      balance = amount - totalCart;

      //If balance is negative, then return negative value or else return positive value 
      if(balance <= 0){
          return balance;
      }else{
          return balance;
      }

}



function getProductByIdFromList(productId, productList) {
  return productList.find((product) => product.productId === productId);
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
} 


