import apiClient from "@/api/config/ApiClient";
import {RegisterApiResponse} from "@/types/api/Auth";

interface registerData {
    username: string;
    password: string;
    email: string;
}

interface loginData {
    identifier: string;
    password: string;
}



export function registerApiCall(data :registerData) :Promise<RegisterApiResponse> {
    return apiClient.post( 'auth/local/register', data)
}

export function loginApiCall(data :loginData) :Promise<RegisterApiResponse> {
    return apiClient.post('auth/local', data)
}