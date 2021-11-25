import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import './ItemCounter.scss'

export default function ItemCounter({initial,stock,onAdd}) {
  const [counter, setCounter] = useState(initial);
  const onIncrement = () => {
    if (counter < stock && counter >= 1) {
      setCounter(counter + 1);
    }
  };

  const onDecrement = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="m-1 d-flex justify-content-center align-items-center item-count-container">
      <CustomButton
        textButton={"-"}
        handleClick={onDecrement}
        disabled={counter ===1}
      />
      <span>{counter}</span>
      <CustomButton
        textButton={"+"}
        handleClick={onIncrement}
        disabled={counter === stock}
      />
      <CustomButton
        textButton={"Agregar al Carrito"}
        handleClick={onAdd}
        disabled={counter > stock}
      />
    </div>
  );
}