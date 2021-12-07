import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import dataProducts from '../../services/dataProducts'
import Loader from '../../components/Loader/Loader'

//Styles
import "./ItemListContainer.scss"

function ItemListContainer(props) {

    const [loading, setLoading]=useState(false)
    const [products, setProducts] = useState([])
    
    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect( () => {
        setLoading(true)

        dataProducts()
            .then((res) => {
                
                if (categoryId) {
                    setProducts(res.filter(prod => prod.category === categoryId))
                    
                } else {
                    setProducts(res)
                }
            })
            .catch((err) => {
            console.log(err)
            })
            .finally(() => {

            setLoading(false)
        })
    }, [categoryId])


    return (

        loading ?
            <Loader/>
            : 
        <div className="d-flex row wrap align-items-center justify-content-center container-item-list">
           <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer


