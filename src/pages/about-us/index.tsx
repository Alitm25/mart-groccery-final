import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import {IconBox, ImageView} from "@/components";
import {useState} from "react";
import {Section} from "@/components/section/Section";
import {ProvideCard} from "@/components/pages/aboutUsPage";

interface Props {

};

export default function Index({}: Props) {
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // const sliderImages = [
    //     '/assets/images/about-us/about-3.jpg',
    //     '/assets/images/about-us/about-2.jpg',
    //     '/assets/images/about-us/about-1.jpg',
    //     '/assets/images/about-us/about-4.jpg'
    // ]
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
                <div className={'flex flex-col items-center mb-16'}>
                    <h2 className={'text-heading3 md:text-heading1 font-quicksand text-[#253D4E] '}>What We Provide?</h2>
                    <svg width="150" height="15" viewBox="0 0 150 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7.5
           C12.5 0, 37.5 15, 50 7.5
           C62.5 0, 87.5 15, 100 7.5
           C112.5 0, 137.5 15, 150 7.5"
                              fill="none"
                              stroke="#A7F3D0"
                              stroke-width="6"
                              stroke-linecap="round" />
                    </svg>
                </div>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
                    <ProvideCard icon={'/assets/images/about-us/provide-card-images/005-sale.png'}      title={'Best Prices & Offers'}   description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'} />
                    <ProvideCard icon={'/assets/images/about-us/provide-card-images/Group.png'}         title={'Wide Assortment'}        description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'} />
                    <ProvideCard icon={'/assets/images/about-us/provide-card-images/Group(1).png'}      title={'Free Delivery'}          description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'} />
                    <ProvideCard icon={'/assets/images/about-us/provide-card-images/003-exchange.png'}  title={'Easy Returns'}           description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'} />
                    <ProvideCard icon={'/assets/images/about-us/provide-card-images/Group(2).png'}      title={'100% Satisfaction'}      description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'} />
                    <ProvideCard icon={'/assets/images/about-us/provide-card-images/surface1.png'}      title={'Great Daily Deal'}       description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'} />
                </div>
            </Section>
            <Section>
                <div className={'flex flex-col lg:flex-row items-center justify-center gap-6'}>
                    <div>
                        <ImageView alt={'about-body'} width={325} height={438} src={'/assets/images/about-us/Rectangle-30.png'} className={'rounded-lg object-contain'}/>
                    </div>
                    <div>
                        <ImageView alt={'about-body'} width={426} height={575} src={'/assets/images/about-us/Rectangle-31.png'} className={'rounded-lg'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center lg:items-start lg:justify-evenly h-full text-start lg:text-start w-full lg:w-4/12'}>
                        <p className={'text-heading5 xl:text-heading4 font-quicksand text-[#7E7E7E] mb-[19px]'}>Our performance</p>
                        <h2 className={'text-heading3 lg:text-heading2 xl:text-heading1 font-quicksand text-[#253D4E] mb-10'}>Your Partner for e-commerce grocery solution</h2>
                        <p className={'font-lato text-sm lg:text-base text-[#7E7E7E] font-normal mb-4'}>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                        <p className={'font-lato text-sm lg:text-base text-[#7E7E7E] font-normal'}>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                    </div>
                </div>
            </Section>
        </>

    );
};