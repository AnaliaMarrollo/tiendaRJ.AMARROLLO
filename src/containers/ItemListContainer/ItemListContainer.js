import React from 'react'
import "./ItemListContainer.scss"

function ItemListContainer (props) {
    return (
        <h2 className="align-middle w-50 mt-5 comingSoon">{props.greeting}</h2>
    )
}

export default ItemListContainer


