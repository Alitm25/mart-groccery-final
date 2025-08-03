import apiClient from "@/api/config/ApiClient";
import {ApiResponseSingleType, ApiResponseType} from "@/types";
import {BasketItemsType, updateBasket} from "@/types/api/Basket";
import {ProductsType} from "@/types/api/Products";


export async function basketApiCall() :Promise<ApiResponseSingleType<BasketItemsType>> {
    const token = window.localStorage.getItem('loginToken');
    const uuid = window.localStorage.getItem('uuid');

    // API for users without both uuid & loginToken
    if (!token && !uuid) {
        const response :ApiResponseSingleType<BasketItemsType> = await apiClient.post('my-basket');
        window.localStorage.setItem('uuid', response.data.attributes.uuid);

        return response;
    }

    // API for users with just uuid
    if (uuid) {
        return await apiClient.get('my-basket', {
            params: {
                uuid
            }
        });
    }
    return await apiClient.get('my-basket');
}

export async function updateBasketApiCall(data :updateBasket) :Promise<ApiResponseSingleType<BasketItemsType>> {
    const uuid = window.localStorage.getItem('uuid');

    if (uuid) {
        return await apiClient.put('my-basket', {
            data: data,
        }, {
            params: {
                uuid
            }
        });
    }

    return await apiClient.put('my-basket', {
        data: data,
    });
}

export async function getBasketProductDataApiCall(productID :number) :Promise<ApiResponseType<ProductsType>> {
    return await apiClient.get('products', {
        params: {
            populate: 'thumbnail',
            filters: {
                id: {
                    $eq: productID
                }
            }
        }
    })
}

export async function UUID2UserApiCall(uuid :string) {
    return await apiClient.put('basket2User/' + uuid)
}