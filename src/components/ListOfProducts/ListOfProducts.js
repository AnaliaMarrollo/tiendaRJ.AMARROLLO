import brownie from '../../assets/img.json/brownie-frutos-rojos.jpg'
import cheesecakeDdl from '../../assets/img.json/cheesecake-ddl.jpg'
import cookies from '../../assets/img.json/cookies.jpg'
import lemonPie from '../../assets/img.json/lemon-pie.jpg'

const ListOfProducts = [
    {
        "id": 1,
        "name":"Brownie frutos rojos",
        "type:":"Clásicos premium",
        "description": "Delicioso brownie con frutos rojos elaborado con chocolate 70% cacao. Opción sin TACC",
        "presentation": "Cuadrado",
        "price": 450,
        "noTacc": true,
        "vegan": false,
        "fit": false,
        "img": brownie,
        "stock": 20
    },
        {
        "id": 2,
        "name":"Cheesecake Dulce de Leche",
        "type:":"Clásicos premium",
        "description": "Versión del clásico cheesecake para los fanáticos del dulce de leche. Opción fit",
        "presentation": "Porción",
        "price": 650,
        "noTacc": false,
        "vegan": false,
        "fit": true,
        "img": cheesecakeDdl,
        "stock": 10
        },
            {
        "id": 3,
        "name":"Cookies",
        "type:":"Clásicos",
        "description": "Cookies con chips de chocolate.",
        "presentation": "Bolsa 250grs",
        "price": 300,
        "noTacc": false,
        "vegan": false,
        "fit": false,
        "img": cookies,
        "stock": 2
    },
                {
        "id": 4,
        "name":"Lemon Pie",
        "type:":"Clásicos",
        "description": "Delicioso lemon pie, receta original. Opción sin TACC",
        "presentation": "Porción",
        "price": 450,
        "noTacc": true,
        "vegan": false,
        "fit": false,
        "img": lemonPie,
        "stock": 5
    }
]

export default ListOfProducts;