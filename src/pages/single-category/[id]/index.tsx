import {Section} from "@/components/section/Section";
import {useRouter} from "next/router";
import {QueryClient, useQuery} from "@tanstack/react-query";
import {getSingleCategories} from "@/api/Categories";
import {IconBox, ProductVerticalList, SimpleProductCard} from "@/components";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {getAllProductsApiCall} from "@/api/Products";
import {Box, Slider} from "@mui/material";
import {useDebounce} from "@/hooks/useDebounce";


export default function Index() {
    // declaring query
    const queryClient = new QueryClient();
    // declaring pagination page state
    const [page, setPage] = useState<number>(1);

    // declaring ROUTER variables
    const router = useRouter();
    const {id} = router.query;

    // range slider price range variables
    const [priceRange, setPriceRange] = React.useState<number[]>([0, 8888]);

    // CATEGORIES api data fetching
    const {data: categories, isLoading: categoryLoading} = useQuery({
        queryKey: [getSingleCategories.name, id],
        queryFn: () => getSingleCategories(Number(id)),
        enabled: !!id
    });
    const categoryID = categories?.data.id;

    /// CATEGORY-PRODUCTS api data fetching
    const {data: categoryProducts, isLoading: productsLoading} = useQuery({
        queryKey: ['category-products', categoryID, page],
        queryFn: () => getAllProductsApiCall({
            filters: {
                categories: {
                    id: { $eq: categoryID },
                },
                price: {
                    $gte: priceRange[0], $lte: priceRange[1]
                }
            },
            populate: ['thumbnail'],
            pagination: {
                withCount: true,
                page:      page,
                pageSize:  15,
            },
            sort: ['price:asc']
        })
    })

    // invalidating data based on url ID
    useEffect(() => {
        queryClient.invalidateQueries({queryKey: [getSingleCategories.name, id]});
    }, [id]);

    /// Pagination calculation
    let paginationList = [];
    for (let i = 1; i < categoryProducts?.meta.pagination.pageCount!; i++) {
        paginationList.push(
            <li key={i}
                className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-gray-500 bg-gray-200 cursor-pointer ${categoryProducts?.meta.pagination.page === i && 'bg-green-200 text-white'}`}
                onClick={() => setPage(i)}
            >{i}</li>
        )
    }


    /// range sliders handler functions and other variables
    const MIN = categoryProducts?.data[0].attributes.price;
    const MAX = categoryProducts?.data[categoryProducts?.data.length - 1].attributes.price;

    const sliderDebounce = useDebounce( () => {
        queryClient.invalidateQueries({
            queryKey: ['category-products', categoryID, page]
        })
    }, 1000);

    const handleChange = (event: Event, newValue: number[]) => {
        setPriceRange(newValue);
        sliderDebounce()
    };


    return (
        <div className={'container'}>
            {/*banner section*/}
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
                categoryProducts &&
                categoryProducts?.data.length > 0 ?
                    <Section sectionClassName={"md:flex md:flex-row sm:flex-col md:justify-between"}>

                        {/*popular products section Start*/}
                        <div className="flex flex-col mr-7">
                            {/*1*/}
                            <div className="flex flex-col border-[1px] border-gray-200 rounded-[10px] px-[30px] pt-7 mb-[55px] pb-4">
                                <p className="text-heading4 font-quickSand mb-[14px] pb-[14px] border-b-2">Filter items</p>
                                <div className="flex items-center justify-between mt-3">
                                    <div className="flex">
                                        <p className="font-lato text-heading6 font-normal text-gray-400 mb-[31px] mr-[22px]">Price
                                            Range:</p>
                                        <div className="font-quickSand text-heading5 text-green-200">
                                            <span>${priceRange[0]}</span>
                                            -
                                            <span>${priceRange[1]}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={'mt-5'}>
                                    <Box sx={{ width: 300 }}>
                                        <Slider
                                            min={MIN}
                                            max={MAX}
                                            getAriaLabel={() => 'Temperature range'}
                                            value={priceRange}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            step={5}
                                            style={{color: 'rgb(59, 183, 126)'}}
                                        />
                                    </Box>
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
                            <div className={'border border-[#E5E5E5] rounded-xl p-7 mb-16'}>
                                <ProductVerticalList title={'Popular Items'} data={categories?.data.attributes.products.data!} />
                            </div>
                        </div>
                        {/*popular products section End*/}

                        {/*Category products section Start*/}
                        <div>
                            <div className="flex justify-between rounded-[15px] bg-gray-200 py-[25px] ps-[30px] mb-[48px]">
                                <div className="text-heading6 text-gray-500">There are <span
                                    className="text-blue-200">{categoryProducts?.data.length}</span> products in this category
                                </div>
                                <div className="text-medium text-gray-500 mr-[5px] flex justify-center">Sort by: Featured <i
                                    className="icon-angle-small-down text-gray-200"></i></div>
                            </div>

                            <div className={'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-11'}>
                                {
                                    categoryProducts &&
                                    categoryProducts.data.map( (item) => {
                                        return <SimpleProductCard data={item} />
                                    })
                                }
                            </div>

                            {/*pagination buttons*/}
                            {
                                categoryProducts &&
                                <ul className={"flex flex-wrap gap-[10px] justify-center items-start mb-[60px]"}>
                                    {paginationList}
                                </ul>
                            }
                        </div>
                        {/*Category products section Ends*/}
                    </Section>
                    // Loading div
                    : productsLoading || categoryLoading ?

                    <div className={'flex flex-col mx-auto text-center items-center justify-center py-32'}>
                        <h3 className={'text-heading5 lg:text-heading2 xl:text-heading1 2xl:text-display2 text-blue-300'}>
                            Loading...
                        </h3>
                    </div>
                    :
                    // empty category products section
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