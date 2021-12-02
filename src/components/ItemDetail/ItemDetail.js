import React from 'react'
import ItemCounter from '../../components/ItemCounter/ItemCounter'
import { useHistory } from 'react-router-dom'
import CustomButton from '../CustomButton/CustomButton'
const ItemDetail = ({ itemDetail }) => {
    
    const {push, goBack} = useHistory()

    return (
        <>
    <div className="card mb-3 w-75">
        <div className="row g-0">
            <div className="col-md-4">
             <img src={itemDetail.img} className="img-fluid rounded-start" alt="foto producto"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{itemDetail.name}</h5>
                        <p className="product-description">Descripción: {itemDetail.description}</p>
                        <p className="product-presentation">Presentación: {itemDetail.presentation}</p>
                        <p className="product-ingredients">Ingredientes: {itemDetail.ingredients}</p>
                        <p className="product-price">${itemDetail.price}</p>
                        <ItemCounter initial={1} stock={itemDetail.stock} />
                        <p className="product-stock">Stock disponible: {itemDetail.stock} unidades</p>
                        <CustomButton textButton={'Volver'} handleClick={()=> goBack()} />
                        <CustomButton textButton={'Volver al inicio'} handleClick={()=> push('/')} />
                </div>
            </div>
        </div>
                </div>
                </>
    )
    }

export default ItemDetail
