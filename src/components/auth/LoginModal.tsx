import {Modal} from "@/components";
import React from "react";
import {createPortal} from "react-dom";

interface Props {

};

export function LoginModal({}: Props) {

    return createPortal(
            <Modal closeModal={() :void => {}} title={'Login'}>
                <form>

                </form>
            </Modal>,
            document.getElementById('modal-portal')!
        );
};