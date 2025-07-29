import apiClient from "@/api/config/ApiClient";

export async function basketApiCall() :Promise<ApiResponseSingleType<EntityType<BasketType>>> {
    return await apiClient.get('my-basket');
}