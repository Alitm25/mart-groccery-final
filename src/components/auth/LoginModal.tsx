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
            </Modal>,
            document.getElementById('modal-portal')!
        );
};