import apiClient from "@/api/config/ApiClient";
import {ApiResponseSingleType, EntityType} from "@/types";
import {BasketItemsType} from "@/types/api/Basket";

export async function basketApiCall(): Promise<ApiResponseSingleType<BasketItemsType>> {
    return await apiClient.get('my-basket');
}