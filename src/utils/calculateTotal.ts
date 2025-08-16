import {BasketItemsType} from "@/types/api/Basket";

export default function calculateTotal(product :BasketItemsType) {
    return product.basket_items.reduce( (acc, item) => {
        const unitPrice = item.product.data.attributes.sell_price ?? item.product.data.attributes.price;
        return acc + unitPrice * item.quantity
    }, 0);

}