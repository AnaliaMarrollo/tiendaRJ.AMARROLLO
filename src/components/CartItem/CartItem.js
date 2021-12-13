import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import CustomButton from "../CustomButton/CustomButton";

//STYLES
import "./CartItem.scss";

const CartItem = ({ id, name, img, presentation, price, quantity, stock }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
      <div className="cart-item-container">
          
      <div className="cart-item-container-details">
        <FontAwesomeIcon className="trash-product" icon={faGratipay} />
        <h3 className="cart-item cart-item-strong mx-2">{name}</h3>
          </div>
          
      <div className="cart-item-container-details">
        <h3 className="cart-item mx-2">Presentación: {presentation}</h3>
        <h3 className="cart-item mx-2">Precio: $ {price}</h3>
        <h3 className="cart-item mx-2">Cantidad: {quantity}</h3>
        <FontAwesomeIcon
          onClick={() => removeFromCart(id)}
          className="trash-product"
          icon={faTrashAlt}
        />
          </div>
          
      <Link to={`/item/${id}`}>
        <CustomButton textButton={"Modificar cantidad"}/>
      </Link>
          
    </div>
  );
};

export default CartItem;
