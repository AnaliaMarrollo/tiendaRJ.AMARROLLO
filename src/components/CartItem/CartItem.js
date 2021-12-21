import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import ItemCounter from '../ItemCounter/ItemCounter'

//STYLES
import "./CartItem.scss";

const CartItem = ({ id, name, img, presentation, quantity, price, stock}) => {
  const { removeFromCart } = useContext(CartContext);

  const [quantityCart, setQuantityCart] = useState(quantity);

  return (
    <div className="cart-item-container">
      <div className="cart-item-container-details">
        <FontAwesomeIcon className="trash-product" icon={faGratipay} />
        <h3 className="cart-item cart-item-strong mx-2">{name}</h3>
      </div>

      <div className="cart-item-container-details">
        <h3 className="cart-item mx-2">Presentación: {presentation}</h3>
        <h3 className="cart-item mx-2">Precio: $ {price}</h3>
        <ItemCounter quantity={quantityCart} modifyQuantity={ setQuantityCart} stock={stock} />

        <FontAwesomeIcon
          onClick={() => removeFromCart(id)}
          className="trash-product"
          icon={faTrashAlt}
        />
      </div>
    </div>
  );
};

export default CartItem;
