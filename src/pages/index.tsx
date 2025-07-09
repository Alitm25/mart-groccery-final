import {Section} from "@/components/section/Section";
import {
    Banner,
    BestSellerSlider, BottomSlider, DealsOfTheDaysSlider,
    FeaturedCategories,
    IconBox,
    MiniProductSlider,
    SimpleProductSlider
} from "@/components";
import {popularProducts} from "@/mock/PopularProducts";
import {popularFruits} from "@/mock/PopularFruits";
import {BestSellers} from "@/mock/BestSellers";
import {DealsOfTheDaysMock} from "@/mock/DealsOfTheDays";
import Link from "next/link";
import {getAllProductsApiCall} from "@/api/Products";
import {useQuery} from "@tanstack/react-query";
import {ApiResponseType} from "@/types";
import {ProductsType} from "@/types/api/Products";

export default function Home() {

    const {data: popularProductsData} = useQuery<ApiResponseType<ProductsType>>(
        {
            queryKey: [getAllProductsApiCall.name, 'popularProducts'],
            queryFn: () => getAllProductsApiCall({populate: ['thumbnail', 'categories'], filters: {is_popular: true}})
        }
    )

    const {data: popularFruitsData} = useQuery<ApiResponseType<ProductsType>>(
        {
            queryKey: [getAllProductsApiCall.name, 'popularFruits'],
            queryFn: () => getAllProductsApiCall({populate: ['thumbnail', 'categories'], filters: {is_popular_fruit: true}})
        }
    )
    return (
        <>
            <Section>
                <Banner title={'Don’t miss amazing grocery deals'} subTitle={'Sign up for the daily newsletter'} bgImage={'/assets/images/banner_bg.png'} image={'/assets/images/fresh-apples.png'}/>
            </Section>

            <Section>
                <FeaturedCategories />
            </Section>

            <Section>
                <MiniProductSlider />
            </Section>

            <Section>
                <div className="flex justify-between mb-[50px]">
                    <h2 className="text-heading3 text-blue-300">Popular Products</h2>
                    <div className="flex items-center gap-3">
                        <IconBox icon={'swiper-nav-left icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white'} size={24}/>
                        <IconBox icon={'swiper-nav-right icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white'} size={24}/>
                    </div>
                </div>
                {popularProductsData && <SimpleProductSlider sliderData={popularProductsData.data} nextEl={'.swiper-nav-right'} prevEl={'.swiper-nav-left'}/>}
            </Section>

            <Section>
                <div className="flex justify-between mb-[50px]">
                    <h2 className="text-heading3 text-blue-300">Popular Fruits</h2>
                    <div className="flex items-center gap-3">
                        <IconBox icon={'swiper-nav-left2 icon-angle-small-left cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white'} size={24}/>
                        <IconBox icon={'swiper-nav-right2 icon-angle-small-right cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white'} size={24}/>
                    </div>
                </div>
                {popularFruitsData && <SimpleProductSlider sliderData={popularFruitsData.data} nextEl={'.swiper-nav-right2'} prevEl={'.swiper-nav-left2'}/>}
            </Section>

            <Section>
                <div className="flex justify-between mb-[50px]">
                    <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">Best
                        Sellers</h2>
                </div>
                <div className="flex gap-[24px]">
                    <div
                        className="bg-[url('/assets/images/bg-leaf.png')] bg-no-repeat bg-bottom bg-[#3BB77E] rounded-[10px] shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] p-12 pt-[38px] self-stretch flex-col justify-between max-w-[370px] hidden xl:flex">
                        <h3 className="text-heading2 text-blue-300">Bring nature into your home</h3>
                        <Link href={'#'} className={'mt-6 pl-[15px] pr-2.5 py-2 bg-yellow-100 hover:bg-green-200 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5'}>
                            <div className="text-xsmall text-white">Shop now</div>
                            <IconBox icon={'icon-arrow-small-right'} size={24}/>
                        </Link>
                    </div>
                    <BestSellerSlider sliderData={BestSellers}/>
                </div>
            </Section>

            <Section>
                <div className="flex justify-between items-center mb-[50px]">
                    <h2 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300">Deals
                        Of The Days</h2>
                    <Link href={'#'} className={'flex items-center'}>All Deals <IconBox icon={'icon-angle-small-right'} size={24}/></Link>
                </div>
                <DealsOfTheDaysSlider sliderData={DealsOfTheDaysMock}/>
            </Section>

            <Section>
                <BottomSlider />
            </Section>
        </>
    )

}
