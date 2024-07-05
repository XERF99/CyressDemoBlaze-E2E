class PaymentFormPage {

    getName() {
        return cy.get('#name');
    }

    getCountry() {
        return cy.get('#country');
    }

    getCity() {
        return cy.get('#city');
    }

    getCard() {
        return cy.get('#card');
    }

    getMonth() {
        return cy.get('#month');
    }

    getYear() {
        return cy.get('#year');
    }

}

export default PaymentFormPage;