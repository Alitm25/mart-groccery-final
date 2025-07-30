import {useQuery} from "@tanstack/react-query";
import {basketApiCall} from "@/api/Basket";
import {ApiResponseSingleType, EntityType} from "@/types";
import {BasketItemsType} from "@/types/api/Basket";

export function useBasketData() {
    const {data: basketData} = useQuery({queryKey: ['get-basket'], queryFn: basketApiCall})
    console.log('basket: ', basketData);

    const basketItems = basketData?.data.attributes.basket_items ?? [];

    return {basketItems: basketItems}
}