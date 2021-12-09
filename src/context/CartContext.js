import React, { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    
const [carrito, setCarrito] = useState([]);

  //ADD ITEM
  const addToCart = (item) => {
    setCarrito([...carrito, item]);
  };

  //REMOVE ITEM
  const removeFromCart = (id) => {
    setCarrito(carrito.find((buscarProducto) => buscarProducto.id !== id));
  };

//IS IN CART?
  const productInCart = (id) => {
    return carrito.some((buscaProducto) => buscaProducto.id === id);
  };

//CLEAR 
  const emptyCart = () => {
    setCarrito([]);
  };

  const totalQuantity = () => {
    return carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
  };

  const totalPurchase = () => {
    return carrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0);
  };

  console.log("Carrito", carrito);
    
    return (
        <CartContext.Provider value={
        {
          carrito,
          addToCart,
          productInCart,
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

