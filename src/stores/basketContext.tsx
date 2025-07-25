import React, {createContext, useState} from "react";

interface Props {
    children: React.ReactNode;
};

interface ProductItem {
    id:         number;
    title:      string;
    price:      number;
    image:      string;
    quantity:   number;
}

export const BasketContext = createContext<{
    // Types
    basketItem:     Array<ProductItem>,
    addItem:        (product: ProductItem) => void
    deleteItem:     (productID :number) => void;
    incrementItem:  (productID :number) => void;
    decrementItem:  (productID :number) => void;
}>({
    // Values
    basketItem: [],
    addItem:        (product :ProductItem) => {},
    deleteItem:     (productID :number) => {},
    incrementItem:  (productID :number) => {},
    decrementItem:  (productID :number) => {},
});

export function BasketContextProvider({children}: Props) {
    const [basketItem, setBasketItem] = useState<Array<ProductItem>>([]);


    const addItemHandler = (product: ProductItem) => {

    }

    const deleteItemHandler = (productID: number) => {

    }

    const incrementItemHandler = (productID: number) => {

    }

    const decrementItemHandler = (productID: number) => {

    }

    return (
        <BasketContext.Provider value={{basketItem: basketItem, addItem: addItemHandler, deleteItem: deleteItemHandler, incrementItem: incrementItemHandler, decrementItem: decrementItemHandler}}>
            {children}
        </BasketContext.Provider>
    );
};