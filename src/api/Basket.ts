import apiClient from "@/api/config/ApiClient";
import {ApiResponseSingleType} from "@/types";
import {BasketItemsType, updateBasket} from "@/types/api/Basket";


export async function basketApiCall() :Promise<ApiResponseSingleType<BasketItemsType>> {
    const token = window.localStorage.getItem('loginToken');
    const uuid = window.localStorage.getItem('uuid');

    if (!token && !uuid) {
        const response :ApiResponseSingleType<BasketItemsType> = await apiClient.post('my-basket');
        window.localStorage.setItem('uuid', response.data.attributes.uuid);

        return response;
    }

    return await apiClient.get('my-basket');
}

export async function updateBasketApiCall(data :updateBasket): Promise<ApiResponseSingleType<BasketItemsType>> {
    return await apiClient.put('my-basket', {
        data: data,
    });
}