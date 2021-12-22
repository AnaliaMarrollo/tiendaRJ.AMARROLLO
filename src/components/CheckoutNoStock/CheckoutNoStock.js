import React from 'react'
import { Link } from 'react-router-dom'
import '../Checkout/Checkout.scss'
const CheckoutNoStock = ({noStock}) => {
    return (
        <div className="checkout-container">
            <h3>La orden no se pudo procesar</h3>
            <p>No hay stock de los siguientes productos:</p>
            {noStock.map(item =>
                <div key={item.id} className="checkout-container-no-stock">
                    <img className="img-no-stock" src={item.img} alt={item.name}/>
                    <p>{item.name}</p>
                </div>)}
            <hr/>
            <p>Por favor, regrese al carrito y actualice su compra</p>
            <Link to='/cart'>Volver al carrito</Link>
        </div>
    )
}

export default CheckoutNoStock