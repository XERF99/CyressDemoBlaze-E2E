
class HomePage {

    visit() {
        cy.visit('https://www.demoblaze.com/');
    }

    getPhoneElement(){
        return cy.get('.card-title a');
    }

    getButtonSuccess(){
        return cy.get('.btn-success');
    }

    goHome() {
        cy.get('.nav-link').contains('Home').click();
    }
}

export default HomePage;