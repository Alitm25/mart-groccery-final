import apiClient from "@/api/config/ApiClient";
import {ApiResponseType} from "@/types";
import {CategoryType} from "@/types/api/Category";

interface Props {
    filters?: {}
}

export function getFeaturedCategories({filters = {}} :Props) :Promise<ApiResponseType<CategoryType>> {
    return apiClient.get('categories', {
        params: {
            populate: 'thumbnail',
            filters
        }
    })
}