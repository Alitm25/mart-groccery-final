import {Modal} from "@/components";
import React from "react";
import {createPortal} from "react-dom";

interface Props {
    onClose: () => void;
};

export function RegisterModal({onClose}: Props) {

    return createPortal(
        <Modal closeModal={onClose} title={'Register'}>
            <form>

            </form>
        </Modal>,
        document.getElementById('modal-portal')!
    );
};