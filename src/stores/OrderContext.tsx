import {createContext, useContext, useState} from "react";

interface Props {
    children: React.ReactNode;
};


const OrderContext = createContext({});
export const useOrder = () => useContext(OrderContext);

export function OrderContextProvider({children}: Props) {
    const [order, setOrder] = useState({});

    return (
        <OrderContext.Provider value={{order, setOrder}}>
            {children}
        </OrderContext.Provider>
    );
};