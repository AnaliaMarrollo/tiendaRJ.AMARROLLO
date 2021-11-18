import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.scss';

function CartWidget() {
    return (
        <div>
            <FontAwesomeIcon className="shopping-cart" icon={faShoppingCart} />
        </div>
    )
}

export default CartWidget