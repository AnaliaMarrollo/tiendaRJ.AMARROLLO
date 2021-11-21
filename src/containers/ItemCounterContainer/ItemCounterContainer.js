import React, { useState } from "react";
import ItemCounter from "../../components/ItemCounter/ItemCounter";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./ItemCounterContainer.scss";

export default function ItemCounterContainer({
  minQuantity,
  stock,
  onAdd,
  onIncrement,
  onDecrement,
}) {
  const [counter, setCounter] = useState(minQuantity);

  onIncrement = () => {
    if (counter < stock && counter >= 1) {
      setCounter(counter + 1);
    }
  };

  onDecrement = () => {
    if (counter > minQuantity) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center w-25 mt-5 item-count-container">
      <CustomButton
        textButton={"-"}
        handleClick={onDecrement}
        disabled={counter === 1}
      />
      <ItemCounter quantity={counter} />
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
