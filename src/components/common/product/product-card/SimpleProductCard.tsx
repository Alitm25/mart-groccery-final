import {Badge, IconBox, ImageView, Rating} from "@/components";
import Link from "next/link";
import {EntityType} from "@/types";
import {ProductsType} from "@/types/api/Products";

interface Props {
    data: EntityType<ProductsType>
}

export function SimpleProductCard({data}: Props) {
    return (
        <div className={'w-full'}>
            <div className="group border-[1px] border-gray-200 hover:border-green-150 transition-[border] rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
                {data.attributes && data.attributes.label && <Badge label={data.attributes.label} sale_price={data.attributes.sell_price} price={data.attributes.price}/>}
                <div className="mt-8 hidden group-hover:flex rounded-[5px] border-[1px] border-green-200 w-max absolute top-[100px] left-[50%] translate-x-[-50%] bg-white productAction cursor-pointer">
                    <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
                        <IconBox icon={'icon-heart-green text-brand1'} size={15} />
                    </div>
                    <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
                        <IconBox icon={'icon-shuffle'} size={15} />
                    </div>
                    <div className="p-2.5 hover:bg-green-150">
                        <IconBox icon={'icon-eye'} size={15} />
                    </div>
                </div>
                <ImageView src={data?.attributes?.thumbnail?.data?.attributes.url} className={`m-auto w-full aspect-[3/2] ${data?.attributes?.categories?.data[0] ? 'mb-[28px]' : 'mb-[55px]'}`} alt={'product-image'} width={210} height={168}/>
                <div className={`flex flex-col gap-2`}>
                    {data?.attributes?.categories?.data[0] && <div className="text-gray-500 text-xsmall">{data?.attributes?.categories?.data[0].attributes.title}</div>}
                    <Link href={'#'}><h3 className="line-clamp-2 text-heading-sm text-blue-300 max-h-[50px] min-h-8 overflow-hidden">{data?.attributes?.title}</h3></Link>
                    <div className="flex gap-4">
                        <Rating rate={data?.attributes?.rate}/>
                        <div className="text-xsmall text-gray-500 font-lato">({data?.attributes?.rate})</div>
                    </div>
                    <div className="font-lato text-xsmall text-gray-500">{data?.attributes?.weight} {data?.attributes?.unit}</div>
                </div>
                {
                    data?.attributes?.total && data?.attributes?.sold ?
                        <>
                            <div className="flex items-center justify-between mt-3">
                                {
                                    data?.attributes?.sell_price ?
                                        <div>
                                            <span className="text-heading5 text-green-200">${data?.attributes?.sell_price}</span>
                                            <span className="text-heading-sm line-through text-gray-500">${data?.attributes?.price}</span>
                                        </div>
                                        : <span className="text-heading5 text-green-200">${data?.attributes?.price}</span>
                                }

                            </div>
                            <div className="mt-[15px] bg-gray-200 h-[4px] w-full rounded-[2px]">
                                <div style={{width: `${(data?.attributes?.sold / data?.attributes?.total) * 100}%`}} className="bg-green-200 h-[4px] rounded-[2px]"></div>
                            </div>
                            <div className="mt-2.5 font-lato text-blue-300 text-xsmall">Sold: {data?.attributes?.sold}/{data?.attributes?.total}</div>
                            <div className="mt-[23px]">
                                <button
                                    className="flex justify-center items-center gap-2 xl:text-heading-sm text-white border-[1px] w-full rounded-[4px] bg-green-200 hover:bg-yellow-100 transition-[background-color] px-2 py-2 lg:py-[14px]">
                                    <i className="icon-shopping-cart text-[22px]"></i>
                                    <span className="text-heading-sm">Add To Card</span>
                                </button>
                            </div>
                        </> :
                        <div className="flex items-center justify-between mt-3">
                            {
                                data?.attributes?.sell_price ?
                                    <div>
                                        <span className="text-heading5 text-green-200">${data?.attributes?.sell_price}</span>
                                        <span className="text-heading-sm line-through text-gray-500">${data?.attributes?.price}</span>
                                    </div>
                                    : <span className="text-heading5 text-green-200">${data?.attributes?.price}</span>
                            }
                            <div className="add-product">
                                <button
                                    className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">Adds
                                    +
                                </button>
                                <div
                                    className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                                    <input type="number" value="1"
                                           className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"/>
                                    <div className="flex flex-col justify-between">
                                        <IconBox icon={"up icon-angle-small-up"} size={10}></IconBox>
                                        <IconBox icon={"down icon-angle-small-down"} size={10}></IconBox>
                                    </div>
                                </div>
                            </div>
                        </div>
                }

            </div>

        </div>
    );
}