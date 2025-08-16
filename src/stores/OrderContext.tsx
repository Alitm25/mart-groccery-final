import {createContext, ReactNode, SetStateAction, useContext, useState} from "react";
import {basketItems} from "@/types/api/Basket";

interface Props {
    children: ReactNode;
};

interface Order {
    id: number;
    date: string;
    status: string;
    total: number;
    items: Array<basketItems>
}

interface OrderContextType {
    order: Order[];
    addOrder: (order :Order) => void;
}


const OrderContext = createContext<OrderContextType>(
    {
        order: [],
        addOrder: () => {}
    }
);
export const useOrder = () => useContext(OrderContext);

export function OrderContextProvider({children}: Props) {
    const [order, setOrder] = useState<Order[]>([]);

    const addOrderHandler = (order :Order) => {
        setOrder(prevState => [...prevState, order]);
    }

    return (
        <OrderContext.Provider value={{order, addOrder: addOrderHandler}}>
            {children}
        </OrderContext.Provider>
    );
};