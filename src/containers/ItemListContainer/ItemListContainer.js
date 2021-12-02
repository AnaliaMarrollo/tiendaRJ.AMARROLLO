import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import dataProducts from '../../services/dataProducts'

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
            <div className="item-detail-container d-flex justify-content-center">
            <h2> Cargando... </h2>
            </div>
            : 
        <div className="d-flex row wrap align-items-center justify-content-center container-item-list">
            {/* <h2 className="align-middle w-50 mt-5 comingSoon">{props.greeting}</h2> */}
            {/* <ItemCounter initial={1} stock={15} /> */}
           <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer


