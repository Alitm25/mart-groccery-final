import apiClient from "@/api/config/ApiClient";
import {ApiResponseSingleType, EntityType} from "@/types";
import {BasketItemsType} from "@/types/api/Basket";


interface updateBasket {
    basket_items: Array<{
        product: {
            connect: Array<{
                id: number
            }>
        },
        quantity: number
    }>
}

export async function basketApiCall() :Promise<ApiResponseSingleType<BasketItemsType>> {
    return await apiClient.get('my-basket');
}

export async function updateBasketApiCall(data :updateBasket): Promise<ApiResponseSingleType<BasketItemsType>> {
    return await apiClient.put('my-basket', {
        data: data,
    });
}