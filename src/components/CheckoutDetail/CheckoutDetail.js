import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CheckoutDetail = () => {

    const { carrito, totalPurchase } = useContext(CartContext)

    return (
        <div className="finalizar-compra">
                    <div>
                        <h4>Detalle de compra</h4>
                        <div>
                    {carrito.map(item => <p key={ item.id}>{item.name} Cantidad: {item.quantity} Presentación: {item.presentation} Precio: $ { item.price}</p>)}
                        </div>
                        <hr/>
                        <p>Total a pagar: <span>${totalPurchase()}</span></p>
                    </div>
                    
                </div>
    )
}