import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {SimpleProductCard} from "@/components";
import {EntityType} from "@/types";
import {ProductsType} from "@/types/api/Products";

interface Props {
    sliderData: Array<EntityType<ProductsType>>;
};

export function BestSellerSlider({sliderData}: Props) {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={2}
            autoplay={true}
            modules={[Autoplay]}
            breakpoints={
                {
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 18
                    },
                    1024: {
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
                            <div className="flex-grow-1 w-full"><SimpleProductCard data={slideData}/></div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};