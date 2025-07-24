import apiClient from "@/api/config/ApiClient";
import {RegisterApiResponse} from "@/types/api/Auth";

interface Data {
    username: string;
    password: string;
    email: string;
}

export function registerApiCall(data :Data) :Promise<RegisterApiResponse> {
    return apiClient.post( 'auth/local/register', data)
}