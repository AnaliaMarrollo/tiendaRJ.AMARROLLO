import React from 'react'
import { useHistory } from 'react-router-dom'
import CustomButton from '../CustomButton/CustomButton';

const Errors = ({ errorMessage }) => {
    
    const { push } = useHistory();

    return (
        <>
            <p>{errorMessage}
            </p>
                            <CustomButton
                  textButton={"Volver al inicio"}
                  onClick={() => push("/")}
                />
            </>
    )
}

export default Errors
