import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductVerticalList} from "@/components";
import {ApiResponseType} from "@/types";
import {ProductsType} from "@/types/api/Products";
import {useQuery} from "@tanstack/react-query";
import {getAllProductsApiCall} from "@/api/Products";
import {InView} from "react-intersection-observer";


export function BottomSlider({}) {
    // top-selling data API call
    const {data: topSellingData} = useQuery<ApiResponseType<ProductsType>>(
        {
            queryKey: [getAllProductsApiCall.name, 'topSelling'],
            queryFn: () => getAllProductsApiCall({populate: ['thumbnail'], filters: {is_top_selling: {$eq: true}}})
        }
    )

    // trending products API call
    const {data: trendingProductsData} = useQuery<ApiResponseType<ProductsType>>(
        {
            queryKey: [getAllProductsApiCall.name, 'trendingProducts'],
            queryFn: () => getAllProductsApiCall({populate: ['thumbnail'], filters: {is_trending: {$eq: true}}})
        }
    )

    /// top-rated products API call
    const {data: topRatedData, refetch} = useQuery<ApiResponseType<ProductsType>>(
        {
            queryKey: [getAllProductsApiCall.name, 'topRated'],
            queryFn: () => getAllProductsApiCall(
                {
                    populate: ['thumbnail'],
                    sort: ['rate:desc'],
                    pagination: {
                        withCount: false,
                        // page: 1,
                        // pageSize: 3
                        start: 0,
                        limit: 3
                    },
                }
            ),
            enabled: false,
        }
    )

    /// recently added products API call
    const {data: recentlyAddedData} = useQuery<ApiResponseType<ProductsType>>(
        {
            queryKey: [getAllProductsApiCall.name, 'recentlyAdded'],
            queryFn: () => getAllProductsApiCall(
                {
                    populate: ['thumbnail'],
                    sort: ['id:desc'],
                    pagination: {
                        withCount: false,
                        // page: 1,
                        // pageSize: 3
                        start: 0,
                        limit: 3
                    },
                }
            ),
        }
    )

    console.log('recentlyAdded: ', recentlyAddedData)


    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={1}
            autoplay={true}
            modules={[Autoplay]}
            breakpoints={
                {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 18
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 18
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 22
                    }
                }
            }
        >
            <SwiperSlide>
                <InView as="div" onChange={(inView) => inView && refetch()}>
                    {topSellingData && <ProductVerticalList title={'Top Selling'} data={topSellingData.data} />}
                </InView>
            </SwiperSlide>

            <SwiperSlide>
                <InView as="div" onChange={(inView) => inView && refetch()}>
                    {trendingProductsData && <ProductVerticalList title={'Trending Products'} data={trendingProductsData.data} />}
                </InView>
            </SwiperSlide>

            <SwiperSlide>
                {recentlyAddedData && <ProductVerticalList title={'Recently added'} data={recentlyAddedData.data} />}
            </SwiperSlide>

            <SwiperSlide>
                <InView as="div" onChange={(inView) => inView && refetch()}>
                    {topRatedData && <ProductVerticalList title={'Top Rated'} data={topRatedData.data} />}
                </InView>
            </SwiperSlide>
        </Swiper>
    );
}
