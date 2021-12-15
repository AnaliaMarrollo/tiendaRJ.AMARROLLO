import React, { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children}) => {
    
const [carrito, setCarrito] = useState([]);

  //ADD ITEM
  const addToCart = (item) => {
    setCarrito([...carrito, item]);
  };

  //REMOVE ITEM
  const removeFromCart = (id) => {
    setCarrito(carrito.filter((buscarProducto) => buscarProducto.id !== id));
  };

//IS IN CART?
  const productInCart = (id) => {
    return carrito.some((buscaProducto) => buscaProducto.id === id);
  };

//INCREMENT QUANTITY   
  const incrementQuantity = (id) => {
    const indxIQ = carrito.findIndex(buscarIndex => buscarIndex.id === id);
    let newCarrito = [...carrito];
    newCarrito[indxIQ].quantity = newCarrito.quantity + 1;
    setCarrito(newCarrito);
  }
  
//DECREMENT QUANTITY
  const decrementQuantity = (id) => {
    const indxDQ = carrito.findIndex(buscarIndex => buscarIndex.id === id);
    
    let newCarrito = [...carrito];
    newCarrito[indxDQ].quantity = newCarrito.quantity + 1;
    setCarrito(newCarrito);
  }  

//CLEAR 
  const emptyCart = () => {
    setCarrito([]);
  };

  const totalQuantity = () => {
    return carrito.reduce((acumulador, producto) => acumulador + producto.quantity, 0);
  };

  const totalPurchase = () => {
    return carrito.reduce((acumulador, producto) => acumulador + producto.price * producto.quantity, 0);
  };

  console.log("Carrito", carrito);
    
    return (
        <CartContext.Provider value={
        {
          carrito,
          addToCart,
          productInCart,
          incrementQuantity,
          decrementQuantity,
          removeFromCart,
          emptyCart,
          totalQuantity,
          totalPurchase
        }
        }>
            {children}
        </CartContext.Provider>
    )
}

