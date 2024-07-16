## Cypress E2E Readme

## Pre-requesitos

Tener instalado VSCODE como editor de código

## Instalación de dependencias

1. Descomprimir el archivo .zip enviado
2. Abrir la carpeta que se generó como resultado de descomprimir el archivo en VSCODE
3. Abrir la terminal de VSCODE y ejecutar el siguiente comando:
   ```sh
   npm install

este comando instalará todas las dependicias de node necesarias

## Ejecución del Proyecto

4. Como el proyecto está enviado en un archivo .zip no es necesario instalar Cypress, Cucumber o generador 
de reportes.

5. Para ejecutar el proyecto es necesario aplicar colocar en el terminal de VSCODE lo siguiente
    - 5.1. Ejecución de Cypress en una interfaz gráfica
      ```
        npx cypress open
   
    - 5.2. Seleccionar la opción ESE Testing
    - 5.3. Seleccionar el navegador que más le guste
    - 5.4. Clic en Start E2E Testing
    - 5.5. Selccionar el feature llamado "compraCarrito.feature"
   
    - 5.6. Ejecución de Cypress en el terminal de VSCODE
      ```
       npx cypress run

## Generación de reportes

6. Para ejecutar el reporte generado con Cucumber se debe ejecutar el siguiente comando
    6.1. Abrir una nueva terminal y ejecutar
   
        node reporte-cucumber.js
   
    6.2. ejecutar el comando en la nueva terminal abierta
    6.3. Para observar el reporte generado se debe ir a la carpeta reportes-cucumber -> index.html -> clic derecho dentro del archivo
        y seleccionar la opción de abrir con el navegador para que el reporte html se abra en el navegador que seleccione 

Clona el repositorio

      git https://github.com/XERF99/CyressDemoBlaze-E2E.git
      cd CyressDemoBlaze-E2E
