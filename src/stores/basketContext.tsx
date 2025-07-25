import React, {createContext} from "react";

interface Props {
    children: React.ReactNode;
};

export const BasketContext = createContext({
    basketItem: [],
    addItem: () => {},
    deleteItem: () => {},
    incrementItem: () => {},
    decrementItem: () => {},
});

export function BasketContextProvider({children}: Props) {
    return (
        <BasketContext.Provider value={{}}>
            {children}
        </BasketContext.Provider>
    );
};