import ListOfProducts from '../components/ListOfProducts/ListOfProducts'

const getItem = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ListOfProducts.find(itemDetail => itemDetail.id === id))
        }, 2000)
        })
        
}

export default getItem;