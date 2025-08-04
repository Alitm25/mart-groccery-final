import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import {IconBox, ImageView} from "@/components";
import {useState} from "react";
import {Section} from "@/components/section/Section";

interface Props {

};

export default function Index({}: Props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const sliderImages = [
        '/assets/images/about-us/about-3.jpg',
        '/assets/images/about-us/about-2.jpg',
        '/assets/images/about-us/about-1.jpg',
        '/assets/images/about-us/about-4.jpg'
    ]
    // @ts-ignore
    return (
        <>
            <Section>
                <div className={'container'}>
                    <div className={'flex items-end justify-between py-12'}>

                    </div>
                </div>
            </Section>
            <Section>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '}>

                </div>
            </Section>
        </>

    );
};