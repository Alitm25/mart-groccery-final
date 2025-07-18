import {createPortal} from "react-dom";
import React from "react";

interface Props {
    children: React.ReactNode;
};

export function Portal({children}: Props) {
    return createPortal(
        <div className={'fixed top-0 left-0 right-0 bottom-0 bg-[#010101] bg-opacity-70 z-10'}>
            <div className={'relative'}>
                {children}
            </div>

        </div>,
        document.getElementById('modal-portal')!
    )
};