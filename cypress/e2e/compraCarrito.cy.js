import datosJSON from '../fixtures/datosFormulario.json'
import datosCompra from '../fixtures/datosCarrito.json'

import HomePage from '../support/PageObjects/homePage';
import CartPage from '../support/PageObjects/cartPage';
import PaymentFormPage from '../support/PageObjects/paymentFormPage';
import PurchasePage from '../support/PageObjects/purchasePage';

describe('Flujo de compra en demoblaze.com de dos celulares', () => {

  const homePage = new HomePage();
  const cartPage = new CartPage();
  const paymentFormPage = new PaymentFormPage();
  const purchasePage = new PurchasePage();

  before(() => {
    // Visita la página principal antes de cada prueba
    homePage.visit();
  });

  it('Agregar dos productos al carrito', () => {

    // Agrega el primer producto al carrito
    homePage.getPhoneElement().contains(datosCompra.phone1).click();
    homePage.getButtonSuccess().contains(datosCompra['btn-success'][0]).click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal(datosCompra['window:alert']);
    });
    homePage.goHome();

    // Agrega el segundo producto al carrito
    homePage.getPhoneElement().contains(datosCompra.phone2).click();
    homePage.getButtonSuccess().contains(datosCompra['btn-success'][0]).click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal(datosCompra['window:alert']);
    });
    homePage.goHome();

  })

  it('Verificar que los productos esten el carrito de compra', () => {
    //Verificar que los productos esten el carrito de compra
    cartPage.goCartPage();
    cartPage.checkItemsCart().contains(datosCompra.phone1);
    cartPage.checkItemsCart().contains(datosCompra.phone2);
  })

  it('Completar el formulario de compra', ()=>{
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

  // Verifica que la compra haya sido finalizada
  purchasePage.getShowAlertWindows().should('be.visible');
  purchasePage.getShowAlertWindows().should('contain', datosCompra.windowAlertPageForm);
})
});
