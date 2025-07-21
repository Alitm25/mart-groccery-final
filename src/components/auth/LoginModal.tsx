import {Modal} from "@/components";
import React from "react";
import {createPortal} from "react-dom";

interface Props {
    onClose: () => void;
};

export function LoginModal({onClose}: Props) {

    return createPortal(
            <Modal closeModal={onClose} title={'Login'}>
                <form>

                </form>
                <span className={'cursor-pointer'}>Have not sign in yet? Sign up here !</span>
            </Modal>,
            document.getElementById('modal-portal')!
        );
};