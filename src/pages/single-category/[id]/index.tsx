import {Section} from "@/components/section/Section";
import {useRouter} from "next/router";
import {useQuery} from "@tanstack/react-query";
import {getSingleCategories} from "@/api/Categories";
import ProductCardButton from "@/components/common/product/product-card/ProductCardButton";
import {IconBox, SimpleProductCard} from "@/components";
import Link from "next/link";
import React from "react";

export default function Index() {
    const router = useRouter();
    const {id} = router.query;

    const {data: categories} = useQuery({
        queryKey: [getSingleCategories.name],
        queryFn: () => getSingleCategories(Number(id)),
        enabled: !!id
    });

    return (
        <div className={'container'}>
            <Section>
                <div
                    className="rounded-[6px] md:rounded-[14px] lg:rounded-[30px] bg-hero-pattern bg-[rgba(59,183,126,.2)] bg-opacity-20 bg-cover bg-top bg-no-repeat flex justify-between items-center mt-[38px] relative">
                    <div
                        className="min-h-[160px] pl-3 pt-3 sm:pl-4 sm:pt4 md:pl-6 md:pt-6 lg:pl-10 lg:py-10 xl:pl-14 xl:py-14 2xl:py-[72px] 2xl:pl-[72px]">
                        <h2 className="max-w-[100%] font-quickSand text-heading3 md:text-heading3 lg:text-heading2 tracking-[-0.04%] text-blue-300">Vegetables
                            & tubers</h2>
                    </div>
                </div>
            </Section>
            {
                categories &&
                categories?.data.attributes.products.data.length > 0 ?
                    <Section sectionClassName={"md:flex md:flex-row sm:flex-col md:justify-between"}>

                        {/*sidebar Start*/}
                        <div className="flex flex-col mr-7">
                            {/*1*/}
                            <div
                                className="flex flex-col border-[1px] border-gray-200 rounded-[10px] px-[30px] pt-7 mb-[55px] pb-4">
                                <p className="text-heading4 font-quickSand mb-[14px] pb-[14px] border-b-2">Filter items</p>
                                <div className="flex items-center justify-between mt-3">
                                    <div className="flex">
                                        <p className="font-lato text-heading6 font-normal text-gray-400 mb-[31px] mr-[22px]">Price
                                            Range:</p>
                                        <span className="font-quickSand text-heading5 text-green-200">$16 - $173</span>
                                    </div>
                                </div>
                                <div className="mt-[15px] bg-gray-200 h-[4px] w-full rounded-[2px] mb-[35px]">
                                    <div className="bg-green-200 h-[4px] w-3/4 rounded-[2px]"></div>
                                </div>
                                <p className="font-lato text-heading6 font-normal text-gray-400 mb-[21px]">Used for:</p>
                                <div className="flex flex-col items-start mb-[30px]">
                                    <div className="flex mb-[10px] items-center justify-center">
                                        <i className="icon- mr-[10px]"></i>
                                        <p className="text-medium text-gray-400 hover:text-blue-300">Appetizer</p>
                                    </div>
                                    <div className="flex mb-[10px] items-center justify-center">
                                        <i className="icon-play mr-[10px]"></i>
                                        <p className="text-medium text-gray-400 hover:text-blue-300">Salad</p>
                                    </div>
                                    <div className="flex mb-[10px] items-center justify-center">
                                        <i className="icon-play mr-[10px]"></i>
                                        <p className="text-medium text-gray-400 hover:text-blue-300">Eat fresh</p>
                                    </div>
                                    <div className="flex mb-[10px] items-center justify-center">
                                        <i className="icon-play mr-[10px]"></i>
                                        <p className="text-medium text-gray-400 hover:text-blue-300">Juice</p>
                                    </div>
                                    <div className="flex mb-[10px] items-center justify-center">
                                        <i className="icon-play mr-[10px]"></i>
                                        <p className="text-medium text-gray-400 hover:text-blue-300">Smoothie</p>
                                    </div>
                                </div>

                                <p className="font-lato text-heading6 font-normal text-gray-400 mb-[21px]">Brand:</p>
                                <div className="flex flex-col items-start mb-[30px]">
                                    <div className="flex mb-[10px] items-center justify-center">
                                        <i className="icon-play mr-[10px]"></i>
                                        <p className="text-medium text-gray-400 hover:text-blue-300">Cobblestone</p>
                                    </div>
                                    <div className="flex mb-[10px] items-center justify-center">
                                        <i className="icon-play mr-[10px]"></i>
                                        <p className="text-medium text-gray-400 hover:text-blue-300">McVitie's</p>
                                    </div>
                                    <div className="flex mb-[10px] items-center justify-center">
                                        <i className="icon-play mr-[10px]"></i>
                                        <p className="text-medium text-gray-400 hover:text-blue-300">Tastykake</p>
                                    </div>
                                    <div className="flex mb-[10px] items-center justify-center">
                                        <i className="icon-play mr-[10px]"></i>
                                        <p className="text-medium text-gray-400 hover:text-blue-300">Warburtons</p>
                                    </div>
                                    <div className="flex mb-[10px] items-center justify-center">
                                        <i className="icon-play mr-[10px]"></i>
                                        <p className="text-medium text-gray-400 hover:text-blue-300">Wonder Bread</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <button
                                        className="rounded bg-green-100 px-[32px] py-[14px] text-green-200 flex justify-center items-center">
                                        <i></i>Filter
                                    </button>
                                    <img className="hidden md:block" src="../assets/images/fresh-chinese-cabbage.png" alt="#"/>
                                </div>
                            </div>
                            {/*2*/}
                            <div
                                className="flex flex-col border-[1px] border-gray-200 rounded-[10px] px-[30px] pt-7 gap-6 pb-[36px] pr-[180px] mb-10">
                                <p className="text-heading4 font-quickSand mb-[14px] pb-[14px] border-b-2">Popular Items</p>
                                <div className="flex flex-col gap-6">
                                    <div className="flex gap-3 lg:gap-5">
                                        <img src="../assets/images/products/avocado.png" width="120" height="120"/>
                                        <div className="flex flex-col justify-between">
                                            <div>
                                                <div className="font-quickSand text-heading6 text-blue-300 mb-1">Seeds of Change
                                                    Organic
                                                </div>
                                                <div className="flex gap-4">
                                                    <ul className="flex gap-1">
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-empty text-[12px]"></i>
                                                        </li>
                                                    </ul>
                                                    <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="font-quickSand text-heading5 text-green-200">$2.51</span>
                                                <span
                                                    className="font-quickSand text-heading-sm line-through text-gray-500">$2.80</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 lg:gap-5">
                                        <img src="../assets/images/products/banana.png" width="120" height="120"/>
                                        <div className="flex flex-col justify-between">
                                            <div>
                                                <div className="font-quickSand text-heading6 text-blue-300 mb-1">Seeds of Change
                                                    Organic
                                                </div>
                                                <div className="flex gap-4">
                                                    <ul className="flex gap-1">
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-empty text-[12px]"></i>
                                                        </li>
                                                    </ul>
                                                    <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="font-quickSand text-heading5 text-green-200">$2.51</span>
                                                <span
                                                    className="font-quickSand text-heading-sm line-through text-gray-500">$2.80</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 lg:gap-5">
                                        <img src="../assets/images/products/orange-fruit.png" width="120" height="120"/>
                                        <div className="flex flex-col justify-between">
                                            <div>
                                                <div className="font-quickSand text-heading6 text-blue-300 mb-1">Seeds of Change
                                                    Organic
                                                </div>
                                                <div className="flex gap-4">
                                                    <ul className="flex gap-1">
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-empty text-[12px]"></i>
                                                        </li>
                                                    </ul>
                                                    <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="font-quickSand text-heading5 text-green-200">$2.51</span>
                                                <span
                                                    className="font-quickSand text-heading-sm line-through text-gray-500">$2.80</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 lg:gap-5">
                                        <img src="../assets/images/products/watter-melon.png" width="120" height="120"/>
                                        <div className="flex flex-col justify-between">
                                            <div>
                                                <div className="font-quickSand text-heading6 text-blue-300 mb-1">Seeds of Change
                                                    Organic
                                                </div>
                                                <div className="flex gap-4">
                                                    <ul className="flex gap-1">
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                                                        <li className="flex"><i className="icon-star-empty text-[12px]"></i>
                                                        </li>
                                                    </ul>
                                                    <div className="text-xsmall text-gray-500 font-lato">(4.0)</div>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="font-quickSand text-heading5 text-green-200">$2.51</span>
                                                <span
                                                    className="font-quickSand text-heading-sm line-through text-gray-500">$2.80</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*sidebar End*/}

                        {/*Right_col Start*/}
                        <div>
                            <div className="flex justify-between rounded-[15px] bg-gray-200 py-[25px] ps-[30px] mb-[48px]">
                                <div className="text-heading6 text-gray-500">There are <span
                                    className="text-blue-200">{categories?.data.attributes.products.data.length}</span> products in this category
                                </div>
                                <div className="text-medium text-gray-500 mr-[5px] flex justify-center">Sort by: Featured <i
                                    className="icon-angle-small-down text-gray-200"></i></div>
                            </div>
                            {/*Cards Start -->*/}
                            <div className={'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-11'}>
                                {
                                    categories &&
                                    categories.data.attributes.products.data.map( (item) => {
                                        return <SimpleProductCard data={item} />
                                    })
                                }
                            </div>
                            {/*Cards Ends*/}
                            {/*buttons*/}
                            <div className="flex flex-wrap gap-[10px] justify-center items-start mb-[60px]">
                                <div
                                    className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-gray-500 bg-gray-200 cursor-pointer">
                                    <i className="icon-angle-small-left"></i>
                                </div>
                                <div
                                    className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-gray-500 bg-gray-200 cursor-pointer">1
                                </div>
                                <div
                                    className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-gray-500 bg-gray-200 cursor-pointer">2
                                </div>
                                <div
                                    className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-gray-500 bg-gray-200 cursor-pointer">3
                                </div>
                                <div
                                    className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-gray-500 bg-gray-200 cursor-pointer pb-1">...
                                </div>
                                <div
                                    className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-gray-500 bg-gray-200 cursor-pointer">
                                    <i className="icon-angle-small-right flex justify-center items-center"></i>
                                </div>
                            </div>
                        </div>
                        {/*Right_col End*/}
                    </Section>
                    :
                    <div className={'flex flex-col mx-auto text-center items-center justify-center gap-y-6'}>
                        <h1 className={'text-heading3 lg:text-heading2 xl:text-heading1 2xl:text-display2 text-blue-300'}>
                            There is no products in this category.
                        </h1>
                        <p className={'font-lato text-heading-sm md:text-heading-5 text-[#7E7E7E] w-full font-normal cursor-default'}>Unfortunately, this specefic category has no products, please return to home page and see other categories.</p>
                        <Link href={'/'}>
                            <button type="submit" className="mt-6 px-[18px] py-4 bg-yellow-100 hover:bg-yellow-100 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                                <IconBox icon={'icon-arrow-small-right rotate-180'} size={24}/>
                                <span className="font-quickSand text-heading6 text-white">Return to homePage</span>
                            </button>
                        </Link>
                    </div>
            }
        </div>
    );
};