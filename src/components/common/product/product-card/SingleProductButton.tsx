import React from "react";
import {EntityType} from "@/types";
import {ProductsType} from "@/types/api/Products";
import {IconBox} from "@/components";
import {useBasketData} from "@/hooks/useBasketData";

interface Props {
    productData: EntityType<ProductsType>;
};


function ProductCardButton({productData}: Props) {

    const {addItem, getItem, updateProduct} = useBasketData();
    const basketItem = getItem(productData.id);

    return (
        <div className="add-product">
            {
                basketItem ?
                    <div className={'border-[1px] font-quicksand font-bold rounded-[4px] border-green-300 text-green-300 h-full p-[3px] w-16 md:w-28 flex justify-evenly items-center'}>
                        <div className="flex flex-col justify-between items-center">
                            <IconBox icon={'up icon-angle-small-up cursor-pointer'} size={10} onClick={ () => updateProduct(productData.id, 'increase')}/>
                            <IconBox icon={'down icon-angle-small-down cursor-pointer'} size={10} onClick={ () => updateProduct(productData.id, 'decrease')}/>
                        </div>
                        {basketItem.quantity}
                    </div>
                    :
                    <button onClick={() => addItem(productData.id)} className={"flex items-center justify-center text-heading-sm text-green-200 hover:bg-[#FDC04033] hover:text-[#FDC040] transition-[background-color] border-[1px] rounded-[4px] bg-green-150 px-[21px] py-[15px]"}>
                        <IconBox icon={'icon-shopping-cart fill-white'} size={24} />
                        <span className={'hidden md:inline ml-1'}>Add To Cart</span>
                    </button>
            }
        </div>
    );
};

export default React.memo(ProductCardButton);