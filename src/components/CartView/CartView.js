import React,{useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

//Styles
import "./CartView.scss"

const CartView = () => {

    const { carrito } = useContext(CartContext);
    

    return (
        <div className="cart-view d-flex row justify-content-start my-5">
            
                {carrito.length === 0
                ?
                <>
                    <h3 className="my-5">No agregaste productos al carrito</h3>
                </>
                    :
                 <>
                    <h2 className="m-5">RESUMEN DE COMPRA</h2>
                        <section>
                        {
                            carrito.map((productos) => <CartItem {...productos} />)
                        
                        }
                        </section>
</>
            }

        </div>
            )
}

export default CartView
