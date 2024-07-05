class CartPage{


    goCartPage(){
        return cy.visit('https://www.demoblaze.com/cart.html')
    }

    checkItemsCart(){
        return cy.get('#tbodyid');
    }


}

export default CartPage;