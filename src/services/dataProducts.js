import ListOfProducts from '../components/ListOfProducts/ListOfProducts'
const dataProducts = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            resolve(ListOfProducts)
        }, 1000)
    })
}

export default dataProducts;




