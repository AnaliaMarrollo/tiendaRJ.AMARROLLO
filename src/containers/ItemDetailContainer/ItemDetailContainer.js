import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import getItem from '../../services/getItem'
import Loader from '../../components/Loader/Loader'

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
            <Loader/>
            :
            <div className="item-detail-container d-flex justify-content-center">
                <ItemDetail {...productDetail} />
            </div>
    )
}

export default ItemDetailContainer
