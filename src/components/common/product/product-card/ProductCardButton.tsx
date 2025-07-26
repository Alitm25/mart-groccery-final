import React from "react";
import {EntityType} from "@/types";
import {ProductsType} from "@/types/api/Products";
import {IconBox} from "@/components";
import {useBasket} from "@/stores/basketContext";

interface Props {
    productData: EntityType<ProductsType>
};


function ProductCardButton({productData}: Props) {
    const {addItem, getItem, incrementItem, decrementItem} = useBasket();

    const currentProductInBasket = getItem(productData.id);
    console.log('qq');
    return (
        <div className="add-product">
            {
                currentProductInBasket ?
                    <div className="input-product__container border-[1px] font-quicksand font-bold rounded-[4px] border-green-300 text-green-300 h-full p-[3px] w-20 flex justify-evenly items-center">
                        <div className="flex flex-col justify-between items-center">
                            <IconBox icon={'up icon-angle-small-up'} size={10} onClick={ () => incrementItem(productData.id)}/>
                            <IconBox icon={'down icon-angle-small-down'} size={10} onClick={ () => decrementItem(productData.id)}/>
                        </div>
                        {currentProductInBasket.quantity}
                    </div>
                :
                    <button onClick={() => addItem(productData)} className="flex items-center justify-center text-heading-sm text-green-200 hover:bg-[#FDC04033] hover:text-[#FDC040] transition-[background-color] border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">Adds +
                    </button>
            }
        </div>
    );
};

export default React.memo(ProductCardButton);