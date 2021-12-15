import React,{useState} from 'react'
import SelectList from '../SelectList/SelectList'

const Selects = ({stock}) => {
    //porcion, torta, box 12 unidades, unidad
    const [size, setSize] = useState("")

    //version original, sin tacc, fit
    const [type, setType] = useState("")

    return (
        <div>
            <SelectList />
            <pre>
                <code>
                    {size}-{type}
                </code>
            </pre>
        </div>
    )
}

export default Selects
