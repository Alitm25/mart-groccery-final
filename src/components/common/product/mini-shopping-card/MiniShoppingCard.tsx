import {useBasket} from "@/stores/basketContext";
import {IconBox, ImageView} from "@/components";
import React from "react";
import {useBasketData} from "@/hooks/useBasketData";
import {ApiResponseSingleType} from "@/types";
import {BasketItemsType} from "@/types/api/Basket";


export function MiniShoppingCard() {
     // const {incrementItem, decrementItem} = useBasket();
     const {updateProduct, basketItems} = useBasketData();

    return (
               <div className={'absolute z-20 bg-white max-h-[70vh] right-8 top-18 w-[500px] rounded-[5px] lg:border-[1px] border-green-300 p-[30px] overflow-y-auto'}>
                   {
                       <div className={'flex flex-col items-center justify-center w-full mb-3'}>
                           {
                               basketItems.length > 0 ?
                                   <div className={''}>
                                       {
                                           basketItems.map( (item) => {
                                               return (
                                                   <div>
                                                       <div className={'flex flex-row items-start justify-between gap-x-11 mb-6 w-full'}>
                                                           <ImageView alt={'product-img'} width={120} height={120} src={item.product.data.attributes.thumbnail?.data?.attributes.url}/>
                                                           <div className={'flex flex-col items-start w-full'}>
                                                               <div className={'text-heading-sm text-blue-300 min-h-8 line-clamp-2'}>{item.product.data.attributes.title}</div>
                                                               <div className={'flex items-center justify-between w-full'}>
                                                                   {
                                                                       item.product.data.attributes.sell_price ?
                                                                           <div>
                                                                               <span className="text-heading5 text-green-200">${(item.product.data.attributes.sell_price * item.quantity)}</span>
                                                                               <span className="text-heading-sm line-through text-gray-500">${item.product.data.attributes.price}</span>
                                                                           </div>
                                                                           : <span className="text-heading5 text-green-200">${item.product.data.attributes.price * item.quantity}</span>
                                                                   }
                                                                   <div className="input-product__container border-[1px] font-quicksand font-bold rounded-[4px] border-green-300 text-green-300 h-full p-[3px] w-16 md:w-20 flex justify-evenly items-center">
                                                                       <div className="flex flex-col justify-between items-center">
                                                                           <IconBox icon={'up icon-angle-small-up cursor-pointer'} size={10} onClick={ () => updateProduct(item.product.data.id, 'increase')}/>
                                                                           <IconBox icon={'down icon-angle-small-down cursor-pointer'} size={10} onClick={ () => updateProduct(item.product.data.id, 'decrease')}/>
                                                                       </div>
                                                                       {item.quantity}
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className={'border w-full mb-2'}></div>
                                                   </div>
                                               )
                                           })
                                       }
                                   </div>
                               : <div>Your card is empty</div>
                           }
                       </div>
                   } 
                   {
                       basketItems.length > 0 &&
                       <div>
                           <button className={'flex justify-center items-center gap-2 xl:text-heading-sm text-white border-[1px] w-full rounded-[4px] bg-green-200 hover:bg-yellow-100 transition-[background-color] px-2 py-2 lg:py-[14px]'}>
                               Complete the purchase process
                               <IconBox icon={'icon-arrow-small-right'} size={24}/>
                           </button>
                       </div>

                   }

               </div>
    );
};