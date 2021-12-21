import CustomButton from "../CustomButton/CustomButton"
import "./Modal.scss"

const Modal = ({ children, isOpen, closeModal }) => {

    const handleModalContainer = (e) => {
        e.stopPropagation()
    };
    
    return (

        <div className={`modal ${isOpen && "is-open"}`}>
            <div className="modal-container" onClick={handleModalContainer}>
                <CustomButton textButton={"X"}className="modal-close" onClick={closeModal}/>
            {children}    
            </div>   
        </div>
    )
}

export default Modal
