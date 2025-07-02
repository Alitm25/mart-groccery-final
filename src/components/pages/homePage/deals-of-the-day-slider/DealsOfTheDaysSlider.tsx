import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {DealsProductCard, SimpleProductCard} from "@/components";
import {DealsOfTheDaysMock} from "@/mock/DealsOfTheDays";

interface Props {
    sliderData: Array<any>;
};

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
                DealsOfTheDaysMock.map( (slideData, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <DealsProductCard data={slideData}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};