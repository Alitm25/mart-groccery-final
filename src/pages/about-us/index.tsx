import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import {IconBox, ImageView} from "@/components";
import {useState} from "react";
import {Section} from "@/components/section/Section";
import {ProvideCard} from "@/components/pages/aboutUsPage";
import {InfoBlock} from "@/components/common/ui/info-block";

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
                    <div className={'mb-7'}>
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
            <Section>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12'}>
                    <InfoBlock title={'Who we are'} description={'Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.'} />
                    <InfoBlock title={'Our history'} description={'Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.'} />
                    <InfoBlock title={'Our mission'} description={'Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.'} />
                </div>
            </Section>
            <Section>
                <div className={'w-full rounded-xl relative bg-fixed bg-center p-32'} style={{backgroundImage: "url('/assets/images/about-us/about-banner.jpg')"}}>
                    <div className="absolute inset-0 bg-[#4B675A] opacity-80 rounded-xl"></div>

                     <div className={'flex flex-wrap md:flex-row gap-y-12 gap-x-6 items-center justify-between w-full h-auto relative z-10'}>
                         <div className={'flex flex-col items-center justify-center'}>
                             <p className={'text-6xl lg:text-7xl text-white font-bold'}>12+</p>
                             <p className={'text-heading-sm md:text-heading5 font-quicksand text-white'}>Glorious years</p>
                         </div>

                         <div className={'flex flex-col items-center justify-center'}>
                             <p className={'text-6xl lg:text-7xl text-white font-bold'}>360+</p>
                             <p className={'text-heading-sm md:text-heading5 font-quicksand text-white'}>Happy clients</p>
                         </div>

                         <div className={'flex flex-col items-center justify-center'}>
                             <p className={'text-6xl lg:text-7xl text-white font-bold'}>580+</p>
                             <p className={'text-heading-sm md:text-heading5 font-quicksand text-white'}>Projects complete</p>
                         </div>

                         <div className={'flex flex-col items-center justify-center'}>
                             <p className={'text-6xl lg:text-7xl text-white font-bold'}>160+</p>
                             <p className={'text-heading-sm md:text-heading5 font-quicksand text-white'}>Team advisor</p>
                         </div>

                         <div className={'flex flex-col items-center justify-center'}>
                             <p className={'text-6xl lg:text-7xl text-white font-bold'}>48+</p>
                             <p className={'text-heading-sm md:text-heading5 font-quicksand text-white'}>Products Sale</p>
                         </div>
                     </div>
                </div>
            </Section>
            <Section>
                <div className={'flex flex-col items-center mb-16'}>
                    <h2 className={'text-heading3 md:text-heading1 font-quicksand text-[#253D4E] '}>Our Team</h2>
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
                <div className={'flex flex-wrap gap-x-6'}>
                    <div className={'flex flex-col items-start justify-evenly w-4/12'}>
                        <p className={'font-quicksand text-[18px] font-bold'}>Our Team</p>
                        <h2 className={'text-heading3 md:text-heading1 font-quicksand text-[#253D4E] mb-6'}>Meet Our Expert Team</h2>
                        <p className={'font-lato text-heading-sm text-[#7E7E7E] max-w-[400px] font-normal cursor-default mb-6'}>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus. </p>
                        <p className={'font-lato text-heading-sm text-[#7E7E7E] max-w-[400px] font-normal cursor-default mb-6'}>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus. </p>
                        <button className={'py-4 px-7 bg-[#3BB77E] rounded hover:bg-amber-200 text-white font-quicksand font-bold text-[18px] transition-all'}>View All Members</button>
                    </div>
                </div>
            </Section>
        </>

    );
};