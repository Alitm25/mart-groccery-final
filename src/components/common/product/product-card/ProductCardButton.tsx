import React from "react";
import {EntityType} from "@/types";
import {ProductsType} from "@/types/api/Products";
import {IconBox} from "@/components";
import {useBasketData} from "@/hooks/useBasketData";

interface Props {
    productData: EntityType<ProductsType>;
    specialBtn?: boolean;
};


function ProductCardButton({productData, specialBtn}: Props) {

    const {addItem, getItem, updateProduct} = useBasketData();
    const basketItem = getItem(productData.id);

    return (
        <div className="add-product">
            {
                basketItem ?
                    <div className={`border-[1px] font-quicksand font-bold rounded-[4px] border-green-300 text-green-300 h-full ${specialBtn ? 'w-full justify-between  px-3 py-1 md:py-2' : 'w-16 md:w-20 justify-evenly p-[3px]'} flex  items-center`}>
                        <div className="flex flex-col justify-between items-center">
                            <IconBox icon={'up icon-angle-small-up cursor-pointer'} size={10} onClick={ () => updateProduct(productData.id, 'increase')}/>
                            <IconBox icon={'down icon-angle-small-down cursor-pointer'} size={10} onClick={ () => updateProduct(productData.id, 'decrease')}/>
                        </div>
                        {basketItem.quantity}
                    </div>
                :
                    specialBtn ?
                    <button onClick={() => addItem(productData.id)} className="flex justify-center items-center gap-2 xl:text-heading-sm text-white border-[1px] w-full rounded-[4px] bg-green-200 hover:bg-yellow-100 transition-[background-color] px-2 py-2 lg:py-[14px]">
                        <i className="icon-shopping-cart text-[22px]"></i>
                        <span className="text-heading-sm">Add To Card</span>
                    </button>
                    :
                    <button onClick={() => addItem(productData.id)} className={"flex items-center justify-center text-heading-sm text-green-200 hover:bg-[#FDC04033] hover:text-[#FDC040] transition-[background-color] border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]"}>
                        <span className={'hidden md:inline mr-1'}>Add</span> +
                    </button>
            }
        </div>
    );
};

export default React.memo(ProductCardButton);