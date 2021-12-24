import React from "react";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import carrousel1 from "../../assets/images/carrousel1.jpg";
import carrousel2 from "../../assets/images/carrousel2.jpg";
import carrousel3 from "../../assets/images/carrousel3.jpg";
import carrousel4 from "../../assets/images/carrousel4.jpg";
import carrousel5 from "../../assets/images/carrousel5.jpg";
import CustomButton from "../CustomButton/CustomButton";

//STYLES:
import "./Carrousel.scss";

const Carrousel = () => {
  const { push } = useHistory();

  return (
    <>
      <Carousel className="carrousel" variant="dark">
        <Carousel.Item className="carrousel-item">
          <Carousel.Caption className="carrousel-caption">
            <div>
              <h3 className="carrousel-caption-brand">B A K E R Y</h3>
              <CustomButton
                textButton={"Conocé nuestros productos"}
                onClick={() => push("/nuestrosProductos")}
                className={"btn-carrousel-welcome"}
              />
            </div>
          </Carousel.Caption>
          <img
            className="d-block carrousel-img"
            src={carrousel1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carrousel-item">
          <img
            className="d-block carrousel-img"
            src={carrousel2}
            alt="Second slide"
          />
          <Carousel.Caption className="carrousel-caption">
            <div>
              <h3 className="carrousel-caption-brand">B A K E R Y</h3>
              <CustomButton
                textButton={"Conocé nuestros productos"}
                onClick={() => push("/nuestrosProductos")}
                className={"btn-carrousel-welcome"}
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carrousel-item">
          <img
            className="d-block carrousel-img"
            src={carrousel3}
            alt="Third slide"
          />
          <Carousel.Caption className="carrousel-caption">
            <div>
              <h3 className="carrousel-caption-brand">B A K E R Y</h3>
              <CustomButton
                textButton={"Conocé nuestros productos"}
                onClick={() => push("/nuestrosProductos")}
                className={"btn-carrousel-welcome"}
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carrousel-item">
          <img
            className="d-block carrousel-img"
            src={carrousel4}
            alt="Fourth slide"
          />

          <Carousel.Caption className="carrousel-caption">
            <div>
              <h3 className="carrousel-caption-brand">B A K E R Y</h3>
              <CustomButton
                textButton={"Conocé nuestros productos"}
                onClick={() => push("/nuestrosProductos")}
                className={"btn-carrousel-welcome"}
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carrousel-item">
          <img
            className="d-block carrousel-img"
            src={carrousel5}
            alt="Fifth slide"
          />
          <Carousel.Caption className="carrousel-caption">
            <div>
              <h3 className="carrousel-caption-brand">B A K E R Y</h3>
              <CustomButton
                textButton={"Conocé nuestros productos"}
                onClick={() => push("/nuestrosProductos")}
                className={"btn-carrousel-welcome"}
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carrousel;
