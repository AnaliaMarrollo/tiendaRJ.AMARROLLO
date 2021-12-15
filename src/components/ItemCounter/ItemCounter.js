import React,{useContext} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import { CartContext } from '../../context/CartContext';

//STYLES
import './ItemCounter.scss'

export default function ItemCounter({ id, quantity, modifyQuantity, stock}) {
  
  const {incrementQuantity, decrementQuantity } = useContext(CartContext)

  //quantity y modifyQuantity estado en el ItemDetail
  const onIncrement = () => {
    if (quantity < stock && quantity >= 1) {
      modifyQuantity(quantity + 1);
      incrementQuantity(id);
    }
  };

  const onDecrement = () => {
    if (quantity > 1) {
      modifyQuantity(quantity - 1);
      decrementQuantity(id);
    }
  };

  return (
    <div className="m-1 d-flex justify-content-start align-items-center item-count-container">
      <CustomButton
        textButton={"-"}
        onClick={onDecrement}
        disabled={quantity === 1}
      />

      <span>{quantity}</span>

      <CustomButton
        textButton={"+"}
        onClick={onIncrement}
        disabled={quantity === stock}
      />
    </div>
  );
}