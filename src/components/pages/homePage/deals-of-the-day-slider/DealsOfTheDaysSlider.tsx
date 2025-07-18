import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {DealsProductCard} from "@/components";
import {EntityType} from "@/types";
import {ProductsType} from "@/types/api/Products";

interface Props {
    sliderData: Array<EntityType<ProductsType>>;
}

export function DealsOfTheDaysSlider({sliderData}: Props) {
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
                        spaceBetween: 22
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 22
                    }
                }
            }
        >
            {
                sliderData.map( (slideData, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <DealsProductCard data={slideData}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}