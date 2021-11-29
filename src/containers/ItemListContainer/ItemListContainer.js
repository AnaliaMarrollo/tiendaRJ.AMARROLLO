import React,{useEffect, useState} from 'react'
import ItemList from '../../components/ItemList/ItemList'
import dataProducts from '../../services/dataProducts'
import "./ItemListContainer.scss"

function ItemListContainer(props) {

    const [loading, setLoading]=useState(false)
    const [products, setProducts]=useState([])
    
    useEffect(() => {
        setLoading(true)

        dataProducts()
            .then((res) => {
            setProducts(res)
            })
            .catch((error) => {
            console.log(error)
            })
            .finally(() => {
            setLoading(false)
        })
    }, [])


    return (
         loading ? <h2> Cargando... </h2> 
            : 
        <div className="d-flex row wrap align-items-center justify-content-center container-item-list">
            {/* <h2 className="align-middle w-50 mt-5 comingSoon">{props.greeting}</h2> */}
            {/* <ItemCounter initial={1} stock={15} /> */}
           <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer


