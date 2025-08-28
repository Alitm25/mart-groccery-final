import {createContext, ReactNode, SetStateAction, useContext, useEffect, useState} from "react";
import {basketItems} from "@/types/api/Basket";

interface Props {
    children: ReactNode;
};

export interface Order {
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

    useEffect(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("orders");
            if (stored) {
                setOrder(JSON.parse(stored));
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(order));
    }, [order]);


    const addOrderHandler = (order :Order) => {
        setOrder( (prevState) => {
            const updatedOrder = [...prevState, order];
            localStorage.setItem("orders", JSON.stringify(updatedOrder));
            return updatedOrder;
        });
    }

    return (
        <OrderContext.Provider value={{order, addOrder: addOrderHandler}}>
            {children}
        </OrderContext.Provider>
    );
};