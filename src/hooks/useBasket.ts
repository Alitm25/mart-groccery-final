import {useMutation, useQuery} from "@tanstack/react-query";
import {basketApiCall, updateBasketApiCall} from "@/api/Basket";
import {updateBasket} from "@/types/api/Basket";


export function useBasketData() {
    const {data: basketData} = useQuery({queryKey: ['get-basket'], queryFn: basketApiCall})
    const mutate = useMutation({mutationFn: updateBasketApiCall})


    const basketItems = basketData?.data.attributes.basket_items ?? [];

    const addItemHandler = (productID :number) => {
        const updateBasketData :updateBasket = {
            basket_items: [{
                product: {
                    connect: [{id: productID}]
                },
                quantity: 1
            }]
        }

        mutate.mutate(updateBasketData, {
            onSuccess: (response) => {
                console.log(response);
            }
        })
    }

    return {basketItems: basketItems, addItem: addItemHandler}
}