import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {SimpleProductCard} from "@/components";
import {EntityType} from "@/types";
import {ProductsType} from "@/types/api/Products";

interface Props {
    sliderData: Array<EntityType<ProductsType>>;
    nextEl: string;
    prevEl: string;
};

export function SimpleProductSlider({sliderData, nextEl, prevEl}: Props) {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={2}
            autoplay={true}
            navigation={{
                nextEl: nextEl,
                prevEl: prevEl,
            }}
            modules={[Autoplay, Navigation]}
            breakpoints={
                {
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 18
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 22
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 24
                    }
                }
            }
        >
            {
                sliderData.map( (slideData, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <SimpleProductCard data={slideData}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};