Feature: Compra de dos celulares

    Este feature realiza la funcionalidad necesaria para comprar dos celulares

    Scenario: Comprar dos telefonos celulares y pagarlos
        Given que visito la página principal
        When agrego el primer producto al carrito
        And confirmo la seleccion del primer articulo y regreso a la pagina principal
        And agrego el segundo producto al carrito
        And confirmo la seleccion del segundo articulo y regreso a la pagina principal
        Then visualizo el carrito
        And completo el formulario de compra
        And finalizo la compra

