import React from 'react'
import Item from '../../components/Item/Item'
function ItemList({products}) {
    return (
        <>
            {products.map((product => {
                return <Item product= {product}/>
            }))}
        </>
    )
}

export default ItemList
