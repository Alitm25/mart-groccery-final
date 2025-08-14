import {createContext} from "react";

interface Props {
    children: React.ReactNode;
};


const OrderContext = createContext({});

export function OrderContextProvider({children}: Props) {
    return (
        <OrderContext.Provider value={{}}>
            {children}
        </OrderContext.Provider>
    );
};