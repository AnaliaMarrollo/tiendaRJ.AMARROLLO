import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import getItem from '../../services/getItem'

//Styles
import "./ItemDetailContainer.scss"

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [productDetail, setProductDetail] = useState([]);

    useEffect(() => {
        setLoading(true)

        getItem(id)
            .then((res) => {
            setProductDetail(res)
            console.log("detalle producto por id",res)
            })
            .catch((error) => {
            console.log(error)
            })
            .finally(() => {
            setLoading(false)
        })
    }, [id])


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
