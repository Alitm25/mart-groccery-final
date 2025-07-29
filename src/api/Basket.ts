import apiClient from "@/api/config/ApiClient";
import {ApiResponseSingleType, EntityType} from "@/types";
import {BasketType} from "@/types/api/Basket";

export async function basketApiCall() :Promise<ApiResponseSingleType<EntityType<BasketType>>> {
    return await apiClient.get('my-basket');
}