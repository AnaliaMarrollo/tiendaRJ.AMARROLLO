import ListOfProducts from '../components/ListOfProducts/ListOfProducts'
const dataProducts = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            resolve(ListOfProducts)
        }, 2000)
    })
}

export default dataProducts;




