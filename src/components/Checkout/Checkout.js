import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from '../../firebase/config'
import { collection, addDoc, Timestamp, getDocs, query, where, writeBatch, documentId} from "@firebase/firestore/lite";
import Loader from '../../components/Loader/Loader'

//STYLES:
import './Checkout.scss'

const Checkout = () => {
  const { carrito, totalPurchase, emptyCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
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
      date: Timestamp.fromDate(new Date())
    };
      
    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");
    const productsRef = collection(db, "products");

    //QUERY:
    const q = query(productsRef, where(documentId(), "in", carrito.map(elemento => elemento.id)));

    //PRODUCTOS SIN STOCK:
    const outOfStock = [];

    setLoading(true)
    
    getDocs(q)
      .then((res) => {
        res.docs.forEach((doc) => {
          
          const itemInCart = carrito.find((prod) => prod.id === doc.id);
          
          if (doc.data().stock >= itemInCart.quantity) {
            batch.update(doc.ref, {
              stock: doc.data().stock - itemInCart.quantity
            });
          } else {
            outOfStock.push(itemInCart);
          }
        })

        if (outOfStock.length === 0) {
            
          addDoc(ordersRef, order)
            .then((res) => {
              batch.commit()
              setOrderId(res.id)
              emptyCart()
              setLoading(false)
            })
        } else {
          alert("Hay productos sin stock" + outOfStock.map((elem) => elem.name).join(", "));
          setLoading(false);
        }
        
      })
  }
    
    if (loading) {
      return <Loader />
    }
    
    return (
      <>
        {orderId
          ?
          <div className="checkout-container my-5">
            <h2>Muchas gracias por tu compra!</h2>
            <h2>Nro de orden: {orderId} </h2>
          </div>
              
          :
              
          <div className="checkout-container my-5">
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
                type="phone"
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
          </div>
        }
      </>
    )
}

export default Checkout;
