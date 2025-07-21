import {Modal} from "@/components";
import React, {Dispatch, SetStateAction} from "react";
import {createPortal} from "react-dom";

interface Props {
    onClose: () => void;
    setShowModal: Dispatch<SetStateAction<'Login' | 'Register' | null>>
};

export function LoginModal({onClose, setShowModal}: Props) {

    return createPortal(
            <Modal closeModal={onClose} title={'Login'}>
                <form>

                </form>
                <span className={'cursor-pointer'} onClick={ () => setShowModal('Register')}>Have not sign in yet? Sign up here !</span>
            </Modal>,
            document.getElementById('modal-portal')!
        );
};