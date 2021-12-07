import React from 'react'

//Styles
import "./Loader.scss"

const Loader = () => {
    return (
            <div className="loader-container">
                <div className="d-flex column justify-content-center align-items-center">
                    <h2 clasName="loader-title">Cargando...</h2>
                    <div className="loader mx-2">
                    </div>
                </div>
            </div>
    )
}

export default Loader
