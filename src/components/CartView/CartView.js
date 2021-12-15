import React,{useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import { useHistory } from 'react-router'

//Styles
import "./CartView.scss"

const CartView = () => {

    const { carrito, totalPurchase, emptyCart } = useContext(CartContext);
    const { push } = useHistory();

    return (
        <div className="cart-view-container">
        <div className="cart-view rounded">
            
                {carrito.length === 0
                    
                ?
                <>
                    <h3 className="cart-view-no-products">EL CARRITO DE COMPRAS ESTÁ VACÍO</h3>

                  <CustomButton
                    textButton={"Ir a Comprar"}
                    onClick={() => push("/nuestrosProductos")}
                    />
                    
                </>
                    :
                 <>
                        <h2 className="cart-view-title">RESUMEN DE COMPRA</h2>
                        
                        {
                            carrito.map((productos) => <CartItem {...productos} key={ productos.id }/>)
                        
                        }

                    <h3 className="cart-view-total">Total: $ { totalPurchase() }</h3>

                        
                    <CustomButton
                            textButton={"Vaciar Carrito"}
                            onClick={()=>emptyCart()}
                        />
                        
                    <CustomButton
                        textButton={"Finalizar Compra"}
                        className="btn-purchase"
                    /> 
                </>
            }

            </div>
            </div>
            )
}

export default CartView
