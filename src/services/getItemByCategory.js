import ListOfProducts from '../components/ListOfProducts/ListOfProducts'

const getItemByCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ListOfProducts.find(itemCategory => itemCategory.category === category))
        }, 2000)
        })
        
}

export default getItemByCategory;
