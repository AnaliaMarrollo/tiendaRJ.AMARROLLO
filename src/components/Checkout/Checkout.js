import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from '../../firebase/config'
import { collection, addDoc, Timestamp, updateDoc, getDoc, doc } from "@firebase/firestore/lite";

const Checkout = () => {
  const { carrito, totalPurchase } = useContext(CartContext);
    const [orderId, setOrderId] = useState("")
    const [loading, setLoading] = useState(false);
    
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setValues({
      //copio el estado
      ...values,
      //modifica la propiedad que estoy modificando
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      
    const order = {
      buyer: values, //values es un objeto con todos los datos del usuario
      items: carrito,
      total: totalPurchase(),
      date: Timestamp.fromDate( new Date() )
    };
      
    
    const ordersRef = collection(db, "orders")
    setLoading(true)
    addDoc(ordersRef, order)
        .then((res)=> {
            setOrderId(res.id)
        })
            .finally(() => {
        setLoading(false)
        })
  };
    
    return (
      <>
            {orderId ?
                <>
                    <h2>Muchas gracias por tu compra!</h2>
                    <h2>Nro de orden: {orderId} </h2>
                </>
                :
                <>
                    <h2>Checkout</h2>

                    <form onSubmit={handleSubmit}>
                        <input
                            className=""
                            type="text"
                            value={values.name}
                            name="name"
                            placeholder="Nombre"
                            onChange={handleChange}
                        />
                        <input
                            className=""
                            type="text"
                            value={values.surname}
                            name="surname"
                            placeholder="Apellido"
                            onChange={handleChange}
                        />
                        <input
                            className=""
                            type="number"
                            value={values.phone}
                            name="phone"
                            placeholder="Teléfono"
                            onChange={handleChange}
                        />
                        <input
                            className=""
                            type="email"
                            value={values.email}
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        <input className="" type="submit" value="Enviar" />
                    </form>
                </>
            }
       </>
  );
};

export default Checkout;
