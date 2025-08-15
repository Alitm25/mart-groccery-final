import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";

interface Props {
    children: ReactNode;
};

interface Order {
    orderId: number;
    date: string;
    status: string;
    total: string;
    action: any;
}

interface OrderContextType {
    order: Order | null;
    setOrder: Dispatch<SetStateAction<Order | null>>;
}


const OrderContext = createContext<OrderContextType>({ order: null, setOrder: () => {} });
export const useOrder = () => useContext(OrderContext);

export function OrderContextProvider({children}: Props) {
    const [order, setOrder] = useState<Order | null>(null);

    return (
        <OrderContext.Provider value={{order, setOrder}}>
            {children}
        </OrderContext.Provider>
    );
};