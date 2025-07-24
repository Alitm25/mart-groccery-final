import apiClient from "@/api/config/ApiClient";
import {RegisterApiResponse} from "@/types/api/Auth";

interface Data {
    username: string;
    password: string;
    email: string;
}

export function RegisterApiCall(data :Data) :Promise<RegisterApiResponse> {
    return apiClient.post( '/api/auth/local/register', data)
}