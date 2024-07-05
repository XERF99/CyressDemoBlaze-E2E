import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import datosJSON from '../../fixtures/datosFormulario.json'
import datosCompra from '../../fixtures/datosCarrito.json'

import HomePage from '../../support/PageObjects/homePage';
import CartPage from '../../support/PageObjects/cartPage';
import PaymentFormPage from '../../support/PageObjects/paymentFormPage';
import PurchasePage from '../../support/PageObjects/purchasePage';

const homePage = new HomePage();
const cartPage = new CartPage();
const paymentFormPage = new PaymentFormPage();
const purchasePage = new PurchasePage();

Given('que visito la página principal', () => {
    // Visita la página principal antes de cada prueba
    homePage.visit();
})

When('agrego el primer producto al carrito', () => {
    homePage.getPhoneElement().contains(datosCompra.phone1).click();
    homePage.getButtonSuccess().contains(datosCompra['btn-success'][0]).click();
})

And('confirmo la seleccion del primer articulo y regreso a la pagina principal', () => {
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal(datosCompra['window:alert']);
      });
      homePage.goHome();
})

And('agrego el segundo producto al carrito', () => {
    homePage.getPhoneElement().contains(datosCompra.phone2).click();
    homePage.getButtonSuccess().contains(datosCompra['btn-success'][0]).click();
})

And('confirmo la seleccion del segundo articulo y regreso a la pagina principal', () => {
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal(datosCompra['window:alert']);
    });
    homePage.goHome();
})

Then('visualizo el carrito', () => {
    cartPage.goCartPage();
    cartPage.checkItemsCart().contains(datosCompra.phone1);
    cartPage.checkItemsCart().contains(datosCompra.phone2);
})

And('completo el formulario de compra', () => {
    cartPage.goCartPage();

    homePage.getButtonSuccess().contains(datosCompra['btn-success'][1]).click();

    // Completa el formulario de compra
    paymentFormPage.getName().type(datosJSON.name);
    paymentFormPage.getCountry().type(datosJSON.country);
    paymentFormPage.getCity().type(datosJSON.city);
    paymentFormPage.getCard().type(datosJSON.card);
    paymentFormPage.getMonth().type(datosJSON.month);
    paymentFormPage.getYear().type(datosJSON.year);

    // Hace clic en el botón de "Purchase"
    purchasePage.getPurchaseButton().contains('Purchase').click();
})

And('finalizo la compra', () => {
    purchasePage.getShowAlertWindows().should('be.visible');
    purchasePage.getShowAlertWindows().should('contain', datosCompra.windowAlertPageForm);
})
