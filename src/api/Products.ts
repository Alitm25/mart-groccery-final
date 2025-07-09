import apiClient from "@/api/config/ApiClient";
import {ApiResponseType} from "@/types";
import {ProductsType} from "@/types/api/Products";


interface Props {
    populate?: Array<'thumbnail' | 'categories' | 'gallery'>;
    filters?: {
        is_popular?: boolean;
        is_popular_fruit?: boolean;
    }
}

interface Filters {
    is_popular?: {$eq: boolean}
    is_popular_fruit?: {$eq: boolean}
}

export function getAllProductsApiCall({populate, filters} :Props) :Promise<ApiResponseType<ProductsType>> {
    const customFilter :Filters = {};

    if (filters?.is_popular) {
        customFilter.is_popular =  {$eq: filters.is_popular};
    }

    if (filters?.is_popular_fruit) {
        customFilter.is_popular_fruit =  {$eq: filters.is_popular_fruit};
    }

    return apiClient.get('/products', {
        params: {
            populate: populate?.join(','),
            filters: filters
        }
    })
}