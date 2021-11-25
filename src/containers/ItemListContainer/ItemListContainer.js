import React,{useEffect, useState} from 'react'
import ItemCounter from '../../components/ItemCounter/ItemCounter'
import ItemList from '../../components/ItemList/ItemList'
import ListOfProducts from '../../components/ListOfProducts/ListOfProducts'
import "./ItemListContainer.scss"

function ItemListContainer(props) {

    const [products, setProducts]=useState([])

    const dataProducts = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            resolve(ListOfProducts)
        }, 2000)
    })
    }
    
    useEffect(() => {
        dataProducts()
            .then((res) => {
            setProducts(res)
            })
            .catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div className="d-flex row wrap align-items-center justify-content-center container-item-list">
            {/* <h2 className="align-middle w-50 mt-5 comingSoon">{props.greeting}</h2> */}
            {/* <ItemCounter initial={1} stock={15} /> */}
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer


