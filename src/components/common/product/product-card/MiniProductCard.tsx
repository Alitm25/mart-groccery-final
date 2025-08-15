import {ImageView, Rating} from "@/components";
import {EntityType} from "@/types";
import {ProductsType} from "@/types/api/Products";
import Link from "next/link";

interface Props {
    data: EntityType<ProductsType>;
}

export function MiniProductCard({data}: Props) {
    return (
        <div className="flex gap-3 lg:gap-5">
            <ImageView src={data?.attributes?.thumbnail?.data?.attributes.url ? data.attributes.thumbnail?.data.attributes.url : '/assets/images/default-product-image.png'} width={120} height={120} alt={'mini-product'} className={'max-h-[87.5px]'}/>
            <div className="flex flex-col justify-between">
                <div>
                    <Link href={`/single-product/${data.id}`}><div className="text-heading6 text-blue-300 mb-1 line-clamp-2 min-h-10">{data?.attributes?.title}</div></Link>
                    <div className="flex gap-4">
                        <Rating rate={data?.attributes?.rate} />
                        <div className="text-xsmall text-gray-500 font-lato">({data?.attributes?.rate})</div>
                    </div>
                </div>
                {
                    data?.attributes?.sell_price ?
                        <div>
                            <span className="text-heading5 text-green-200">${data?.attributes?.sell_price}</span>
                            <span className="text-heading-sm line-through text-gray-500">${data?.attributes?.price}</span>
                        </div>
                        : <span className="text-heading5 text-green-200">${data?.attributes?.price}</span>
                }
            </div>
        </div>
    );
}