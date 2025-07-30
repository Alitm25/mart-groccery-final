import {EntityType} from "@/types";
import {ProductsType} from "@/types/api/Products";

export interface BasketItemsType {
    uuid: any
    basket_items: Array<basketItems>
}

export interface updateBasket {
    basket_items: Array<{
        product: {
            connect: Array<{
                id: number
            }>
        },
        quantity: number
    }>
}

interface basketItems {
    id: number;
    quantity: number;
    product: {
        data: EntityType<ProductsType>
    }
}

