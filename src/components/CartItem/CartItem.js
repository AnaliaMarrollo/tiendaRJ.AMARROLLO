import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import "./CartItem.scss"
const CartItem = ({ id, name, img, presentation, price, quantity, setQuantity, stock }) => {
    
    // const {removeFromCart}= useContext(CartContext)

    return (
        <div className="cart-item-container d-flex column align-items-start justify-content-start mx-5">
            <h3 className="cart-item mx-2">{name}</h3>
            <h3 className="cart-item mx-2">Presentación: {presentation}</h3>
            <h3 className="cart-item mx-2">Precio: $ {price}</h3>
            <h3 className="cart-item mx-2">Cantidad: {quantity}</h3>
            <FontAwesomeIcon className="trash-product" icon={faTrashAlt} />
        </div>
    )
}

export default CartItem
