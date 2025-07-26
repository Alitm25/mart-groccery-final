import {EntityType} from "@/types";
import {ProductsType} from "@/types/api/Products";
import {IconBox} from "@/components";

interface Props {
    productData: EntityType<ProductsType>
};


export function ProductCardButton({productData}: Props) {
    return (
        <div className="add-product">
            <button className="flex items-center justify-center text-heading-sm text-green-200 hover:bg-[#FDC04033] hover:text-[#FDC040] transition-[background-color] border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">Adds
                +
            </button>
            <div
                className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                <input type="number" value="1"
                       className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"/>
                <div className="flex flex-col justify-between">
                    <IconBox icon={'up icon-angle-small-up'} size={10} />
                    <IconBox icon={'down icon-angle-small-down'} size={10} />
                </div>
            </div>
        </div>
    );
};