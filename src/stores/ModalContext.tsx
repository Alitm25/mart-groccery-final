import {createContext, useContext, useState} from "react";

interface Props {
    children: React.ReactNode;
}

interface contextType {
    currentModal: modalNameType,
    openModal: (modalName: modalNameType) => void;
    closeModal: () => void;
}

type modalNameType = "Login" | "Register" | null;

const ModalContext = createContext<contextType>( {currentModal: null, openModal: ()=>{}, closeModal: ()=>{} } );
export const useModal = useContext(ModalContext);

export function ModalContextProvider({children}: Props){
    const [showModal, setShowModal] = useState<modalNameType>(null);

    const openModal = (modalName: modalNameType) => {
        setShowModal(modalName);
    }

    const closeModal = () => {
        setShowModal(null);
    }


    return (
        <ModalContext.Provider value={ {currentModal:showModal, openModal, closeModal} }>
            {children}
        </ModalContext.Provider>
    )
}