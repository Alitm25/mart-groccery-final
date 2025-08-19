import apiClient from "@/api/config/ApiClient";
import {ApiResponseSingleType, ApiResponseType} from "@/types";
import {CategoryType} from "@/types/api/Category";

interface Props {
    filters?: {}

}

export function getAllCategories({filters = {}} :Props) :Promise<ApiResponseType<CategoryType>> {
    return apiClient.get('categories', {
        params: {
            populate: '*',
            filters
        }
    })
}

export function getSingleCategories(id :number | undefined) :Promise<ApiResponseSingleType<CategoryType>> | undefined {
        return apiClient.get(`categories/${id}`, {
            params: {
                populate: {
                    products: {
                        populate: 'thumbnail'
                    }
                }
            }
        })
}