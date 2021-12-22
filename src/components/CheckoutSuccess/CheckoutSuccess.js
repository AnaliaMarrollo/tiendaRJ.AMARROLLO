import React from 'react'
import { useHistory} from 'react-router-dom'
import CustomButton from '../../components/CustomButton/CustomButton'
export const CheckoutSuccess = ({ orderId }) => {
    
    const { push } = useHistory()
    
    return (
        <div className="checkout-container">
            <h3>¡Su orden ha sido procesada exitosamente!</h3>
            <p>El código de su compra es:</p>
            <p className="codigo">{orderId}</p>
            <p className="last">¡Gracias por comprar en B A K E R Y!</p>

            <CustomButton textButton={"Volver al Inicio"} onClick={() => push("/")} />
            <CustomButton textButton={"Volver a comprar"} onClick={() => push("/nuestrosProductos")} />
        </div>
    )
}