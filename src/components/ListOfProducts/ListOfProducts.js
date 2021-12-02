import brownie from '../../assets/img.json/brownie-frutos-rojos.jpg'
import cheesecakeDdl from '../../assets/img.json/cheesecake-ddl.jpg'
import cookies from '../../assets/img.json/cookies.jpg'
import lemonPie from '../../assets/img.json/lemon-pie.jpg'
import budin from '../../assets/img.json/budin-vainilla-pasas.jpg'
import gingerCookies from '../../assets/img.json/ginger-cookies.jpg'

const ListOfProducts = [{
        "id": "1",
        "name": "Brownie frutos rojos",
        "category": "tortas",
        "description": "Delicioso brownie con frutos rojos elaborado con chocolate 70% cacao. Opción sin TACC",
        "presentation": "Porción individual",
        "price": 450,
        "noTacc": true,
        "vegan": false,
        "fit": false,
        "img": brownie,
        "stock": 20
    },
    {
        "id": "2",
        "name": "Cheesecake Dulce de Leche",
        "category": "tortas",
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
        "id": "3",
        "name": "Cookies",
        "category": "cookies",
        "description": "Cookies con chips de chocolate 70% cacao.",
        "presentation": "Bolsa 250grs",
        "ingredients": "Harina 0000, Azúcar, Huevos, Manteca, Chocolate 70% cacao, Es. Vainilla.",
        "price": 300,
        "noTacc": false,
        "vegan": false,
        "fit": false,
        "img": cookies,
        "stock": 2
    },
    {
        "id": "4",
        "name": "Lemon Pie",
        "category": "tortas",
        "description": "Delicioso lemon pie, receta original. Opción sin TACC",
        "presentation": "Porción",
        "price": 450,
        "noTacc": true,
        "vegan": false,
        "fit": false,
        "img": lemonPie,
        "stock": 5
    },
    {
        "id": "5",
        "name": "Budin de Vainilla",
        "category": "budines",
        "description": "Budin de vainilla con pasas. Opción fit",
        "presentation": "500grs",
        "price": 600,
        "noTacc": false,
        "vegan": false,
        "fit": true,
        "img": budin,
        "stock": 5
    },
    {
        "id": "6",
        "name": "Galletas de Jengibre",
        "category": "cookies",
        "description": "Tradicionales galletas de jengibre",
        "presentation": "Bolsa 150grs.",
        "price": 350,
        "noTacc": false,
        "vegan": false,
        "fit": false,
        "img": gingerCookies,
        "stock": 5
    }


]

export default ListOfProducts;