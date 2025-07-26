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

const basketReducer = (currentState :ProductItem[], action :Action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...currentState,
                {
                    id:         action.product.id,
                    title:      action.product.attributes.title,
                    price:      action.product.attributes.price,
                    image:      action.product.attributes.thumbnail?.data?.attributes.url,
                    quantity:   1
                }
            ]

        case 'DELETE_ITEM':
            return currentState.filter( (item) => item.id !== action.productID);

        case 'INCREMENT_ITEM':
            return currentState.map( (item) => {
                if (item.id === action.productID) {
                    return { ...item, quantity: item.quantity = item.quantity + 1 }
                } else {
                    return item;
                }
            })

        case 'DECREMENT_ITEM':
            const currentProduct = currentState.find( (item) => item.id === action.productID);

            if (currentProduct && currentProduct.quantity === 1) {
                return currentState.filter( (item) => item.id !== action.productID);
            } else {
                return currentState.map( (item) => {
                    if (item.id === action.productID) {
                        return { ...item, quantity: item.quantity = item.quantity - 1 }
                    } else {
                        return item;
                    }
                })
            }

        default:
            return currentState;
    }
}

export function BasketContextProvider({children}: Props) {
    // const [basketItem, setBasketItem] = useState<Array<ProductItem>>([]);
    const [basketItem, dispatch] = useReducer(basketReducer, [])


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
        localStorage.setItem('basketItem', JSON.stringify(basketItem));
    }

    const deleteItemHandler = (productID: number) => {
        const basketProduct = basketItem.filter( (item) => item.id !== productID);
        setBasketItem(basketProduct);
        localStorage.removeItem('basketItem');
    }

    const incrementItemHandler = (productID: number) => {
        const newBasket = basketItem.map( (item) => {
            if (item.id === productID) {
                return { ...item, quantity: item.quantity = item.quantity + 1 }
            } else {
                return item;
            }
        })
        setBasketItem(newBasket);
        localStorage.setItem('basketItem', JSON.stringify(basketItem));
    }

    const decrementItemHandler = (productID: number) => {
        const currentProduct = basketItem.find( (item) => item.id === productID);

        if (currentProduct && currentProduct.quantity === 1) {
            deleteItemHandler(productID);
        } else {
            const newBasket = basketItem.map( (item) => {
                if (item.id === productID) {
                    return { ...item, quantity: item.quantity = item.quantity - 1 }
                } else {
                    return item;
                }
            })
            setBasketItem(newBasket);
            localStorage.setItem('basketItem', JSON.stringify(basketItem));
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