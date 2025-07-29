import apiClient from "@/api/config/ApiClient";

export async function basketApiCall() {
    return await apiClient.get('my-basket');
}