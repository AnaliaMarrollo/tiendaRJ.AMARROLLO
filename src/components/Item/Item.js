import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

import './Item.scss'

const Item = ({product, onViewDetail}) => {
    return (
        <div className="w-25 m-1 rounded d-flex row align-items-center justity-content-center container-white">
            <h3 className="product-title text-center">{product.name}</h3>
            <img src={product.img} alt="foto producto" className="img-product" />
            <h4 className="product-presentation text-center mt-1">Presentación: {product.presentation}</h4>
            <h5 className="product-stock text-center mt-1">Stock disponible {product.stock} unidades</h5>
            <CustomButton
                handleClick={onViewDetail}
                textButton={"Ver Detalle"}
            />
        </div>
    )
}

export default Item
