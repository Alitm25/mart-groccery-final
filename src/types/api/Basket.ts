import {ProductsType} from "@/types/api/Products";
import {EntityType} from "@/types";

export interface BasketType {
    id: number
    attributes: Attributes
}

export interface Attributes {
    uuid: any
    basket_items: BasketItem[]
}

export interface BasketItem {
    id: number
    quantity: number
    product: EntityType<ProductsType>
}
