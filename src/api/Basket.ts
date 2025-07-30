import apiClient from "@/api/config/ApiClient";
import {ApiResponseSingleType} from "@/types";
import {BasketItemsType, updateBasket} from "@/types/api/Basket";


export async function basketApiCall() :Promise<ApiResponseSingleType<BasketItemsType>> {
    return await apiClient.get('my-basket');
}

export async function updateBasketApiCall(data :updateBasket): Promise<ApiResponseSingleType<BasketItemsType>> {
    return await apiClient.put('my-basket', {
        data: data,
    });
}