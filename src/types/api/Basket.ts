export interface BasketItemsType {
    uuid: any
    basket_items: any[]
}

export interface updateBasket {
    basket_items: Array<{
        product: {
            connect: Array<{
                id: number
            }>
        },
        quantity: number
    }>
}

