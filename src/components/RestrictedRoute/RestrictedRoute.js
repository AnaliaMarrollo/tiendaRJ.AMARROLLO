import React from 'react'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const RestrictedRoute = ({children}) => {

    const { carrito } = useContext(CartContext);
    
    return carrito.length === 0 ? <Redirect to="/"/> : children 

}

export default RestrictedRoute