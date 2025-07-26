import React, {createContext, useContext, useState} from "react";
import {EntityType} from "@/types";
import {ProductsType} from "@/types/api/Products";


interface Props {
    children: React.ReactNode;
};

interface ProductItem {
    id:         number;
    title:      string;
    price:      number;
    image?:     string;
    quantity:   number;
}


const BasketContext = createContext<{
    // Types
    basketItem:     Array<ProductItem>,
    addItem:        (product: EntityType<ProductsType>) => void
    deleteItem:     (productID :number) => void;
    incrementItem:  (productID :number) => void;
    decrementItem:  (productID :number) => void;
    getItem:        (ProductID :number) => undefined | ProductItem;
}>({
    // Values
    basketItem: [],
    addItem:        (product :EntityType<ProductsType>) => {},
    deleteItem:     (productID :number) => {},
    incrementItem:  (productID :number) => {},
    decrementItem:  (productID :number) => {},
    getItem:        (ProductID :number) => undefined

});
export const useBasket = () => useContext(BasketContext);

export function BasketContextProvider({children}: Props) {
    const [basketItem, setBasketItem] = useState<Array<ProductItem>>([]);


    const addItemHandler = (product: EntityType<ProductsType>) => {
        const newProduct :ProductItem = {
            id: product.id,
            title: product.attributes.title,
            price: product.attributes.price,
            image: product.attributes.thumbnail?.data?.attributes.url,
            quantity: 1
        }
        setBasketItem(prevState => [
            ...prevState,
            newProduct
        ])
    }

    const deleteItemHandler = (productID: number) => {
        const basketProduct = basketItem.filter( (item) => item.id !== productID);
        setBasketItem(basketProduct);
    }

    const incrementItemHandler = (productID: number) => {

        const newBasket = basketItem.map( (item) => {
            if (item.id === productID) {
                return { ...item, quantity: item.quantity++ }
            } else {
                return item;
            }
        })
        setBasketItem(newBasket);

    }

    const decrementItemHandler = (productID: number) => {

        const currentProduct = basketItem.find( (item) => item.id === productID);

        if (currentProduct && currentProduct.quantity === 1) {
            deleteItemHandler(productID);
        } else {
            const newBasket = basketItem.map( (item) => {
                if (item.id === productID) {
                    return { ...item, quantity: item.quantity++ }
                } else {
                    return item;
                }
            })
            setBasketItem(newBasket);
        }

    }

    const getItemHandler = (productID :number) => {
        return basketItem.find( (item) => item.id === productID);
    }

    return (
        <BasketContext.Provider value={{basketItem: basketItem, addItem: addItemHandler, deleteItem: deleteItemHandler, incrementItem: incrementItemHandler, decrementItem: decrementItemHandler, getItem: getItemHandler}}>
            {children}
        </BasketContext.Provider>
    );
};