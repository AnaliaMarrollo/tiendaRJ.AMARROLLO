import React from 'react'
import Modal from '../../components/Modal/Modal'
import { useModal } from '../Hooks/useModal';
import SignUp from '../SignUp/SignUp';
import CustomButton from '../CustomButton/CustomButton';
import SignIn from '../SignIn/SignIn';

const Modals = () => {

    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)


    return (
        <>
            <CustomButton textButton={"Registrarme"} onClick={ openModal1} />
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <SignUp/>
            </Modal>
            <CustomButton textButton={"Iniciar Sesión"} onClick={ openModal2} />
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <SignIn/>
            </Modal>
        </>
    )
}

export default Modals
