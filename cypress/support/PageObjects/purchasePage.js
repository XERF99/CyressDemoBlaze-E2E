class PurchasePage{

    getPurchaseButton(){
        return cy.get('.btn-primary');
    }

    getShowAlertWindows(){
        return cy.get('.sweet-alert');
    }

}

export default PurchasePage;