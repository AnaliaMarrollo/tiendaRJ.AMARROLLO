import React, { useState} from "react";
import ItemCounter from "../../components/ItemCounter/ItemCounter";
import { useHistory } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";

const ItemDetail = ({
  id,
  img,
  name,
  price,
  description,
  presentation,
  ingredients,
  stock,
}) => {

  //useStory for buttons: go Back, go to Home and go to Cart  
  const { push, goBack } = useHistory();

  //STATES    
  const [quantity, setQuantity] = useState(1);
  const [carrito, setCarrito] = useState([]);
  const [buy, setBuy] = useState(false);

  //FUNCTION: add item to cart  
  const addToCart = (item) => {
    setCarrito([...carrito, item]);
    setBuy(true);
  };

  //FUNCTION: create a new object item    
  const handleAdd = () => {
    const newItem = {
      id,
      name,
      price,
      quantity
    };

    addToCart(newItem);

  };

  console.log("Carrito", carrito);

  return (
    <>
      <div className="card mb-3 w-75">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={img}
              className="img-fluid rounded-start"
              alt="foto producto"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="product-description">Descripción: {description}</p>
              <p className="product-presentation">
                Presentación: {presentation}
              </p>
              <p className="product-ingredients">Ingredientes: {ingredients}</p>
              <p className="product-price">${price}</p>
            
              {buy ? (
                <>
                  <CustomButton
                    textButton={"Finalizar Compra"}
                    onClick={() => push("/cart")}
                  />
                </>
              ) : (
                <>
                  {/* ItemCounter recibe el quantity y setQuantity que se modifican desde el componte ItemCounter */}

                  <ItemCounter
                    quantity={quantity} 
                    modifyQuantity={setQuantity}
                    stock={stock}
                  />

                  <CustomButton
                    textButton={"Agregar al Carrito"}
                    onClick={handleAdd}
                    disabled={setQuantity > stock}
                  />
                  <p className="product-stock">
                    Stock disponible: {stock} unidades
                  </p>
                  <CustomButton
                    textButton={"Volver"}
                    onClick={() => goBack()}
                  />
                  <CustomButton
                    textButton={"Volver al inicio"}
                    onClick={() => push("/")}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
