import {useQuery} from "@tanstack/react-query";
import {basketApiCall} from "@/api/Basket";

export function useBasket() {
    const {data: basketData} = useQuery({queryKey: ['get-basket'], queryFn: basketApiCall})
    console.log('basket: ', basketData);
}