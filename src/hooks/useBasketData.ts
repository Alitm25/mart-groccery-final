import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {basketApiCall, updateBasketApiCall, UUID2UserApiCall} from "@/api/Basket";
import {basketItems, updateBasket} from "@/types/api/Basket";


export function useBasketData() {
    const queryClient = useQueryClient();

    const {data: basketData} = useQuery({queryKey: ['get-basket'], queryFn: basketApiCall});
    const mutateUpdate = useMutation({mutationFn: updateBasketApiCall, onSuccess: (res) => {
            console.log('success', res);
            queryClient.invalidateQueries({ queryKey: ['get-basket'] });
        }});

    const mutateUuid2User = useMutation({mutationFn: UUID2UserApiCall, onSuccess: () => {
            window.localStorage.removeItem('uuid');
            queryClient.invalidateQueries({queryKey: ['get-basket']});
    }});

    const basketItems = basketData?.data.attributes.basket_items ?? [];


    // Products managing functions START

        // ADD ITEM
        const addItemHandler = (productID :number) => {
            const preparedUpdateData = basketItems.map( (item) => {
                return {
                    product: {
                        connect: [{id: item.product.data.id}]
                    },
                    quantity: item.quantity
                }
            })
            preparedUpdateData.push({
                product: {
                    connect: [{id: productID}]
                },
                quantity: 1
            })

            const updateBasketData :updateBasket = {
                basket_items: preparedUpdateData
            }

            mutateUpdate.mutate(updateBasketData, {
                onSuccess: () => {
                    queryClient.invalidateQueries({queryKey: ['get-basket']});
                }
            })
        }

        // INCREASE/DECREASE ITEM
        const updateProductHandler = (productID :number, type :'increase' | 'decrease') => {
            let preparedUpdateData = basketItems.map( (item) => {
                return {
                    product: {
                        connect: [{id: item.product.data.id}]
                    },
                    quantity: item.quantity
                }
            })

            preparedUpdateData = preparedUpdateData.map( (item) => {
                if (item.product.connect[0].id === productID) {
                    if (type === 'increase') {
                        item.quantity = item.quantity + 1
                    } else {
                        item.quantity = item.quantity - 1
                    }
                }
                return item;
            })


            const updateBasketData :updateBasket = {
                basket_items: preparedUpdateData
            }

            mutateUpdate.mutate(updateBasketData, {
                onSuccess: (response) => {
                    queryClient.invalidateQueries({queryKey: ['get-basket']});
                }
            })
        }

        // DELETING ITEM
        const deleteItemHandler = (productID: number) => {
            // Prepare the basket without the deleted product
            const preparedUpdateData = basketItems
                .filter(item => item.product.data.id !== productID)
                .map(item => ({
                    product: {
                        connect: [{ id: item.product.data.id }]
                    },
                    quantity: item.quantity
                }));

            const updateBasketData: updateBasket = {
                basket_items: preparedUpdateData
            };

            mutateUpdate.mutate(updateBasketData, {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ['get-basket'] });
                }
            });
        };

        // CLEAR ALL ITEMS
        const clearBasketHandler = () => {
            const updateBasketData = {
                basket_items: [],
            }

            mutateUpdate.mutate(updateBasketData);
        }

        // FIND A SPECIFIC ITEM
        const getItemHandler = (productID :number) :basketItems | undefined => {
            return basketItems.find( (item) => item.product.data.id === productID);
        }

        // HANDLING LOGIN AND LOGOUT SITUATION
        const uuid2UserHandler = () => {
            const token = window.localStorage.getItem('loginToken');
            const uuid = window.localStorage.getItem('uuid');

            if (token && uuid) {
                if (basketItems.length > 0) {
                    mutateUuid2User.mutate(uuid)
                } else {
                    window.localStorage.removeItem('uuid')
                    queryClient.invalidateQueries({queryKey: ['get-basket']});
                }
            }
        }
    // Products managing functions END


    return {basketItems: basketItems, addItem: addItemHandler, updateProduct: updateProductHandler, deleteItem: deleteItemHandler, clearBasket: clearBasketHandler, getItem: getItemHandler, uuid2User: uuid2UserHandler}
}