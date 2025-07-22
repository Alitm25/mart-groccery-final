import {Modal} from "@/components";
import React from "react";
import {createPortal} from "react-dom";
import {useModal} from "@/stores/ModalContext";

interface Props {
    onClose: () => void;
};

export function LoginModal({onClose}: Props) {
    const {openModal} = useModal()

    return createPortal(
            <Modal closeModal={onClose} title={'Login'}>
                <form>

                </form>
                <span className={'cursor-pointer'} onClick={ () => openModal('Register') }>Have not sign in yet? Sign up here !</span>
            </Modal>,
            document.getElementById('modal-portal')!
        );
};