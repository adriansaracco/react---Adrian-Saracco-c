# E-comemrce

## Proyecto final para la materia ReactJS de [CoderHouse](https://www.coderhouse.com), comisión #43635

### Alumno: Adrián Saracco

## Dependencias:

-   [react-bootstrap](https://react-bootstrap.github.io/)
    `npm install react-bootstrap bootstrap`
-   [Firebase](https://firebase.google.com/)
    `npm install firebase`
-   [FontAwesome](https://fontawesome.com/v5/docs/web/use-with/react)
    `npm i --save @fortawesome/fontawesome-svg-core`
    `npm install --save @fortawesome/free-solid-svg-icons`
    `npm install --save @fortawesome/react-fontawesome`
-   [react-svg-spinners](https://github.com/dephraiim/react-svg-spinners) por [Dephraiim](https://github.com/dephraiim) para implementación de "Tadpole" spinner mientras se espera respuesta de funciones async
    `npm install react-svg-spinners`
-   [react-router-dom](https://reactrouter.com/en/main)
    `npm install react-router-dom`

## Brief
1.- Usuario ingresa al inicio de la página donde verá todos los productos, independientemente de la categoría
2.- mientras no haya productos seleccionado, el carrito mostratá una leyenda indicando que debe comprar algo
3.- Al seleccionar un producto, ya sea desde el home o filtrado, podrá ver información detallada del mismo y agregarlo al carrirto
4.- El Carrito se irá alimentando con los productos agregados
5.- El usuario podrá vaciar el carrito o avanzar para generar su orden de compra
6.- En la orden de compra tendrá un detalle de lo acumulado y un form con validaciones para ingresar sus datos
7.- Si la validación del form es exitosa, se generará una orden de compra y la misma será mostrada al usuario a la vez que se guarda una copia en Firestore

## Notas

-No hay movimiento de stock dentro de firestore
-no hay pasarela de pago integrada
- Link al video demostración: https://share.vidyard.com/watch/1cw6ZchUn8jb9cuGU3dsjK?