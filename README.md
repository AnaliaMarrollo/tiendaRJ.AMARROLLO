# Proyecto E-Commerce BAKERY ♡ en React de Analía Marrollo

El proyecto simula un e-commerce de una tienda de pastelería. El sitio se compone por una página Home de presentación, una página *"Nuestros Productos"* con el catálogo completo y páginas  según la categoría de productos. Adicionalmente contiene una página de *Contacto* para enviar consultas y si el usuario lo desea puede registrarse, o iniciar sesión si se encuentra registrado previamente.

## Navegación
La barra de navegación contiene links al catálogo completo (*Nuestros Productos*) y a las distintas categorías de productos. 

Al seleccionar cualquiera de las siguientes categorías:  *"Tortas & Tartas", "Cookies" y "Edición Limitada"* se renderiza el componente *ItemListContainer*, que muestra productos distintos según un filtro en la base de datos. 

*"Inicio" y "Nuestros Productos"* renderiza el componente *ItemListContainer* mostrando la totalidad de productos en la base de datos.

Cada producto es un componente *Item*. La categoría a filtrar se toma usando *useParams()*.

Se puede ingresar manualmente a las url y acceder a las distintas secciones del sitio (/category/'tiposDeProducto', /cart, /item/'id', etc.). 

Si se ingresa a una url no reconocida, para eviar errores, se renderiza el componente *Error404* que contiene un botón para volver al inicio.

## Item 
Cada componente *Item* contiene la opción de "Ver Detalle" que redirecciona al *ItemDetail*. 

## ItemDetail
Renderiza el componente *ItemDetailContainer*, que toma el id del producto correspondiente usando *useParams()*, y hace un pedido a la base de datos de ese id. Con el resultado renderiza el componente *ItemDetail* que muestra el detalle del producto y la opción de agregar al carrito, ajustando la cantidad al stock disponible según la base de datos.

## Firebase

Se utiliza Firebase-Firestore para cargar todos los productos utilizando el id proporcionado por Firebase.

Se utiliza Firebase-Authentication para que el usuario pueda Registrarse o Iniciar Sesión desde una cuenta ya creada o una cuenta de Google.

### Client.js 
Vincula el proyecto con Firebase. 

### getDocs de Firebase
A través de un query de búsqueda que filtra por id y por categorías:

Id: Retorna un item en particular. Se utiliza en el componente *ItemDetailCointainer* para obtener la información del item a mostrar.

Category: Retorna un array con todos los productos. Se utiliza en el componente *ItemListContainer*. 

### ItemListContainer
Toma la categoría del producto correspondiente usando *useParams()*, y hace un pedido a la base de datos de esa categoría. 
Con el resultado renderiza el componente *ItemListContainer* mostrando: los productos dentro de la categoría seleccionada o el listado completo de productos.

## Cart
El carrito se hace visible en el **NavBar.js** sólo cuando contiene al menos un producto agregado.  
 
### CartView
Al ingresar al carrito se renderiza el componente CartView con el detalle de los productos seleccionados, cantidad, precio y eliminar producto y el total de la compra. Cada producto en el carrito, es un componente *CartItem*.
Contiene opciones para *Seguir Comprando*, *Vaciar Carrito* y *Finaliza Compra*

### Cart Context
Toda la funcionalidad del *Cart* se encuentra dentro del contexto CartContext. 

## Checkout

### CheckoutDetail
Muestra un resumen de la compra y un formulario para que el comprador complete sus datos. 
Si el comprador se encuentra registrado y logueado, el formulario valida que el email ingresado coincida con el del registro, caso contrario, se solicita el ingreso de un email y confirmación para poder enviar la orden.

Con la información del carrito y los datos del comprador se genera una nueva orden de compra que se sube a Firebase. 

### CheckoutSuccess
Se verifica el stock antes de confirmar la orden. Si se cumplen las verificaciones retorna el ID de la orden generada. Muestra el número de orden generado y vacía el carrito de compras. 

### CheckoutNoStock 
Retorna un Array con todos los productos que no tienen stock, para que el usuario pueda corregir su compra.

* El Producto Lemonies está cargado con un error en el stock de forma tal que se puede verificar el funcionamiento del componente de falta de stock.

## Registro - Iniciar Sesión
Si el usuario se encuentra logueado, en el margen superior derecho se renderizará un saludo con la opción de *Cerrar Sesión* y se ocultan del NavBar los componentes SignIn y SignUp.

### SignIn
El usuario tiene la opción de iniciar sesión a través de una cuenta ya registrada o una cuenta de Google. 

### SingUp
El usuario tiene la opción de registrarse proporcionando un email y contraseña. 

### Auth Context
Toda la funcionalidad del *SignIn y SignUp* se encuentra dentro del contexto AuthContext. 

## Contacto
El formulario de contacto utiliza validaciones creadas a través de un hook personalizado **useForm**. Permite al usuario enviar la consulta que desee completando todos los datos

### helpHTTP 
Hace las peticiones a la API para darle funcionalidad al formulario.


## Librerías utilizadas
* React Router DOM
* Fontawesome
* Bootstrap
* React-Boostrap
* SweetAlert2
* Formik 
* Yup

## Compilación
Para levantar el proyecto en localhost ejecutar `npm start`. 
Para compilar a producción utilizar `npm run build`


