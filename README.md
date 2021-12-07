# Proyecto E-Commerce BAKERY ♡ en React de Analía Marrollo

Este proyecto simula un e-commerce de una tienda de pastelería. El sitio está compuesto por una página Home (en construcción) que será de bienvenida y presentación, el resto de las páginas es exclusivamente para vista y selección de productos. Adicionalmente contendrá las páginas: Take Away y Contacto. 

## Navegación
La barra de navegación ofrece links al catálogo completo y a las distintas categorías de productos. En cualquier selección de:  *"Tortas & Tartas", "Budines" y "Cookies"* se renderiza el componente *ItemListContainer*, que muestra productos distintos según un filtro en el **"ListOfProducts.json"**. 
*"Inicio" y "Nuestros Productos"* renderiza el componente *ItemListContainer* mostrando la totalidad de productos en el **"ListOfProducts.json"**.
Cada producto es un componente *Item*. La categoría a filtrar se toma usando *useParams()*.
Ingresar manualmente las url permite acceder a las distintas secciones del sitio (/category/'tiposDeProducto', /cart, /item/'producto', etc.). Ingresar una url no reconocida renderiza el componente *Error404* que contiene un botón para volver al inicio y para evitar errores.

## Item - ItemDetail
Cada componente *Item* ofrece la opción de "Ver Detalle" lo que redirecciona al ItemDetail, que muestra un detalle del producto y la opción para agregar al carrito. Esto renderiza el componente *ItemDetailContainer*, que toma el id del producto correspondiente usando *useParams()*, y hace un pedido al **"ListOfProducts.json"** de ese id. Con el resultado renderiza el componente *ItemDetail* que muestra el detalle del producto y la opción de agregar al carrito, ajustando la cantidad al stock disponible según el **"ListOfProducts.json"**.

### getItem
Hace un llamado a **"ListOfProducts.json"** y retorna un item en particular según su id. Se utiliza en el componente *ItemDetailCointainer* para obtener la información del item a mostrar.

### dataProducts
Hace un llamado a **"ListOfProducts.json"** y retorna un array con todos los productos. Esta funcion es utilizada en el componente *ItemListContainer*. El componente toma la categoría del producto correspondiente usando *useParams()*, y hace un pedido al **"ListOfProducts.json"** de esa categoría. Con el resultado renderiza el componente *ItemListContainer* mostrando: los productos dentro de la categoría seleccionada o el listado completo de productos.  

## Librerías utilizadas
* React Router DOM
* Fontawesome
* Bootstrap

## Compilación
Para levantar el proyecto en localhost ejecutar `npm start`. 
Para compilar a producción utilizar `npm run build`


