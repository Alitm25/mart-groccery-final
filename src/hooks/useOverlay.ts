import {useEffect} from "react";

interface Props {
    onClick: () => void;
    isOverflowHidden?: boolean;
}

export default function useOverlay({onClick, isOverflowHidden = false} :Props) {
    // implement click function
    useEffect(() => {
        const showBrowseCategoryMenu = () => {
            onClick();
        }
        document.addEventListener('click', showBrowseCategoryMenu)
        return () => {
            document.removeEventListener('click', showBrowseCategoryMenu);
        }
    }, []);

    // implement body overflowY
    useEffect(() => {
        if (isOverflowHidden) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }

        return () => {
            document.body.style.overflowY = 'auto';
        }
    }, [isOverflowHidden]);
}