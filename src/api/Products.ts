import apiClient from "@/api/config/ApiClient";
import {ApiResponseType} from "@/types";
import {ProductsType} from "@/types/api/Products";


interface Props {
    populate?:  Array<'thumbnail' | 'categories' | 'gallery'>;
    filters?:   {}
    sort?:      Array<string>
    pagination?: {
        withCount?: boolean,
        page?:      number,
        pageSize?:  number,
        start?:     number,
        limit?:     number
    }
}

export function getAllProductsApiCall({populate, filters = {}, sort = [], pagination} :Props) :Promise<ApiResponseType<ProductsType>> {
    return apiClient.get('/products', {
        params: {
            populate: populate?.join(','),
            filters,
            sort,
            pagination,
        }
    })
}