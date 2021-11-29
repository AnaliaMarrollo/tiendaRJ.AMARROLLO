import React, {useState, useEffect} from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import getItem from '../../services/getItem'

//Styles
import "./ItemDetailContainer.scss"

const ItemDetailContainer = () => {

    const [loading, setLoading]=useState(false)
    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
        setLoading(true)

        getItem("3")
            .then((res) => {
                setProductDetail(res)
                console.log("detalle producto id-3",res)
            })
            .catch((error) => {
            console.log(error)
            })
            .finally(() => {
            setLoading(false)
        })
    }, [])


    return (
        loading ?
            <div className="item-detail-container d-flex justify-content-center">
                <h2>Cargando...</h2> 
            </div>
            :
            <div className="item-detail-container d-flex justify-content-center">
                <ItemDetail itemDetail={productDetail} />
            </div>
    )
}

export default ItemDetailContainer
