import React from 'react';
import { useHistory } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';

//STYLES 
import "./HomePage.scss"
const HomePage = () => {
    const {push }= useHistory()

    return (
        <div className="home-page my-5">
            <h2 className="m-5">B A K E R Y</h2>
            <CustomButton
            textButton={"VER PRODUCTOS"}
            onClick={() => push("/nuestrosProductos")}/>
        </div>
    )
}

export default HomePage
