import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { Link } from 'react-router-dom'

//Styles
import './Item.scss'

const Item = ({product}) => {
    return (
        <div className="w-25 m-1 rounded d-flex row align-items-center justity-content-center container-white">
            <h3 className="product-title text-center">{product.name}</h3>
            {product.noTacc && <h5 className="product-option d-flex align-items-center text-center">Opción sin Tacc</h5>}
            {product.vegan && <h5 className="product-option d-flex align-items-center text-center">Vegano</h5>}
            {product.fit && <h5 className="product-option d-flex align-items-center text-center">Opción fit</h5>}
            <img src={product.img} alt="foto producto" className="img-product" />
            <h4 className="product-presentation text-center mt-1">Presentación: {product.presentation}</h4>
            <h5 className="product-stock text-center mt-1">Stock disponible {product.stock} unidades</h5>

            <Link to={`/item/${product.id}`} className="link-btn-detail d-flex justity-content-center">
                <CustomButton
                textButton={"Ver Detalle"}
            />
            </Link>
            
        </div>
    )
}

export default Item
