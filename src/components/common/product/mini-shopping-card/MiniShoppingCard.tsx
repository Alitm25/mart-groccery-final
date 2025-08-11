import {IconBox, ImageView} from "@/components";
import React from "react";
import {useBasketData} from "@/hooks/useBasketData";
import {useQuery} from "@tanstack/react-query";
import {getAllProductsApiCall} from "@/api/Products";


export function MiniShoppingCard() {
    const { updateProduct, basketItems } = useBasketData();

    const productIds = basketItems.map((item) => item.product.data.id);

    const { data: basketProductsData } = useQuery({
        queryKey: ['basketProducts', productIds],
        queryFn: () =>
            getAllProductsApiCall({
                filters: { id: { $in: productIds } },
                populate: ['thumbnail'],
            }),
        enabled: productIds.length > 0,
    });

    const basketProducts = basketProductsData?.data || [];

    return (
        <div className="absolute z-20 bg-white max-h-[70vh] right-8 top-18 w-[500px] rounded-[5px] lg:border-[1px] border-green-300 p-[30px] overflow-y-auto">
            <div className="flex flex-col items-center justify-center w-full mb-3">
                {basketItems.length > 0 ? (
                    <div>
                        {basketItems.map((basketItem) => {
                            const product = basketProducts.find(
                                (p) => p.id === basketItem.product.data.id
                            );

                            if (!product) return null;

                            return (
                                <div key={product.id}>
                                    <div className="flex flex-row items-start justify-between gap-x-11 mb-6 w-full">
                                        <ImageView
                                            alt="product-img"
                                            width={120}
                                            height={120}
                                            src={product.attributes.thumbnail?.data?.attributes?.url}
                                        />
                                        <div className="flex flex-col items-start w-full">
                                            <div className="text-heading-sm text-blue-300 min-h-8 line-clamp-2">
                                                {product.attributes.title}
                                            </div>
                                            <div className="flex items-center justify-between w-full">
                                                {product.attributes.sell_price ? (
                                                    <div>
                            <span className="text-heading5 text-green-200">
                              {product.attributes.sell_price * basketItem.quantity}
                            </span>
                            <span className="text-heading-sm line-through text-gray-500">
                              {product.attributes.price}
                            </span>
                                                    </div>
                                                ) : (
                                                    <span className="text-heading5 text-green-200">
                            ${product.attributes.price * basketItem.quantity}
                          </span>
                                                )}
                                                <div className="input-product__container border-[1px] font-quicksand font-bold rounded-[4px] border-green-300 text-green-300 h-full p-[3px] w-16 md:w-20 flex justify-evenly items-center">
                                                    <div className="flex flex-col justify-between items-center">
                                                        <IconBox
                                                            icon="up icon-angle-small-up cursor-pointer"
                                                            size={10}
                                                            onClick={() =>
                                                                updateProduct(product.id, "increase")
                                                            }
                                                        />
                                                        <IconBox
                                                            icon="down icon-angle-small-down cursor-pointer"
                                                            size={10}
                                                            onClick={() =>
                                                                updateProduct(product.id, "decrease")
                                                            }
                                                        />
                                                    </div>
                                                    {basketItem.quantity}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border w-full mb-2"></div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>Your cart is empty</div>
                )}
            </div>

            {basketItems.length > 0 && (
                <div>
                    <button className="flex justify-center items-center gap-2 xl:text-heading-sm text-white border-[1px] w-full rounded-[4px] bg-green-200 hover:bg-yellow-100 transition-[background-color] px-2 py-2 lg:py-[14px]">
                        Complete the purchase process
                        <IconBox icon="icon-arrow-small-right" size={24} />
                    </button>
                </div>
            )}
        </div>
    );
}


