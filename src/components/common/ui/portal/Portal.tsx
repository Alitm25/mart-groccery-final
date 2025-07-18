import {createPortal} from "react-dom";
import React from "react";

interface Props {
    children: React.ReactNode;
};

export function Portal({children}: Props) {
    return createPortal(
        <div>
            {children}
        </div>,
        document.getElementById('modal-portal')!
    )
};