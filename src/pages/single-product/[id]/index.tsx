import {Section} from "@/components/section/Section";
import {Badge, IconBox, ImageView, InfoBlock, InfoBody, InfoBodyBlock, Rating} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {getAllProductsApiCall} from "@/api/Products";
import {useRouter} from "next/router";
import ProductCardButton from "@/components/common/product/product-card/ProductCardButton";
import {useBasketData} from "@/hooks/useBasketData";
import {useEffect, useState} from "react";
import {filter} from "minimatch";


export default function Index() {
    const router = useRouter();
    const [showInfo, setShowInfo] = useState('');
    const [isActive, setIsActive] = useState(true);
    const {data: singleData} = useQuery({queryKey: ['single-product'], queryFn: () => getAllProductsApiCall({ filters: {id: router.query.id}, populate: ['thumbnail', 'categories'] })});
    const {addItem, getItem, updateProduct, basketItems} = useBasketData();
    const {data: relatedProducts} = useQuery({queryKey: ['category-based-products'], queryFn: () => getAllProductsApiCall(
            {
                filters: {
                    categories: {
                        title: {
                            $eq: singleData?.data[0].attributes.categories?.data[0].attributes.title
                        }
                    }
                }
            }
        )});


    const showInfoHandler = (info :string) => {
        setShowInfo(info);
    }

    useEffect(() => {
        showInfoHandler('description');
    }, []);


    return (
        <div className={'container'}>
            <Section>
                {
                    singleData &&
                    <div className="flex flex-col items-center mb-[68px]">
                        <div className="flex flex-col md:flex-row items-start justify-center w-full gap-x-8">
                            <div>
                                <div className="w-full h-[670px] mb-[28px] p-[40px] border-[1px] border-gray-200 rounded-2xl">
                                    <div className="top-0 left-0 flex justify-end">
                                        <i className="icon-search text-[24px] text-gray-200 mb-20"></i>
                                    </div>
                                    <ImageView alt={'product image'} width={586} height={421} src={singleData.data[0].attributes.thumbnail?.data?.attributes.url}/>
                                </div>
                                {
                                    singleData?.data[0].attributes.gallery &&
                                    <div className="flex flex-row gap-[25px] justify-center items-center">
                                        <div className="bg-green-200 rounded-full flex flex-row-reverse items-center p-2">
                                            <IconBox icon={'icon-arrow-small-right rotate-180'} size={24}/>
                                        </div>
                                        <div className="w-1/4 border-[1px] border-green-200 rounded-2xl p-4">
                                            <ImageView alt={'product gallery image'} width={106} height={84} src={'/assets/images/3%20389454.png'}/>
                                        </div>
                                        <div className="w-1/4 border-[1px] rounded-xl p-4">
                                            <ImageView alt={'product gallery image'} width={106} height={84} src={'/assets/images/zppb2xd1%201.png'}/>
                                        </div>
                                        <div className="w-1/4 border-[1px] rounded-xl p-4">
                                            <ImageView alt={'product gallery image'} width={106} height={84} src={'/assets/images/6%201.png'}/>
                                        </div>
                                        <div className="w-1/4 border-[1px] rounded-xl p-4">
                                            <ImageView alt={'product gallery image'} width={106} height={84} src={'/assets/images/7%201.png'}/>
                                        </div>
                                        <div className="bg-green-200 rounded-full flex items-center p-2">
                                            <IconBox icon={'icon-arrow-small-right'} size={24}/>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col items-start justify-center w-4/12 gap-y-6">
                                <div className={'py-1 px-3 rounded-md bg-[#DEF9EC] font-quicksand text-sm text-[#3BB77E] font-bold'}>
                                    In Stock
                                </div>
                                <h1 className={'text-heading2 font-quicksand text-[#253D4E]'}>{singleData.data[0].attributes.title}</h1>
                                <div className={'flex items-center justify-center gap-x-[10px]'}>
                                    <Rating rate={singleData.data[0].attributes.rate} /> <span className={'text-xs font-lato font-normal text-[#7E7E7E]'}>({singleData.data[0].attributes.rate})</span>
                                </div>
                                {
                                    singleData.data[0].attributes.sell_price ?
                                        <div className={'flex flex-row items-end justify-center gap-x-4'}>
                                            <span className="font-quicksand font-bold text-7xl text-green-200">${singleData.data[0].attributes.sell_price}</span>
                                            <span className="text-heading3 md:text-heading4 line-through text-gray-500">${singleData.data[0].attributes.price}</span>
                                        </div>
                                        : <span className="text-heading2 md:text-heading3 text-green-200">${singleData.data[0].attributes.price}</span>
                                }
                                <p className={'font-lato font-normal text-lg text-[#7E7E7E]'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!

                                    Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness.
                                </p>
                                <ProductCardButton productData={singleData.data[0]}/>

                                <div className={'flex flex-row items-center justify-center gap-x-1'}>
                                    <span className={'font-lato text-lg font-normal text-[#253D4E]'}>SKU: </span>
                                    <span className={'font-lato text-lg font-normal text-[#B6B6B6]'}>{singleData.data[0].attributes.SKU}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </Section>
            <Section>
                <div className={'flex flex-col items-start justify-between p-12 border border-[#F2F3F4] rounded-xl'}>
                    <div className={'flex flex-row items-center justify-center gap-x-6 mb-9'}>
                        <button onClick={ () => showInfoHandler('description')} className={'px-[30px] py-[15px] rounded-full bg-white border border-[#F2F3F4] text-[18px] font-quicksand font-bold text-[#B6B6B6] hover:text-[#3BB77E] focus:text-[#3BB77E] hover:drop-shadow-xl focus:drop-shadow-xl transition-all'}> Description     </button>
                        <button onClick={ () => showInfoHandler('additional')}  className={'px-[30px] py-[15px] rounded-full bg-white border border-[#F2F3F4] text-[18px] font-quicksand font-bold text-[#B6B6B6] hover:text-[#3BB77E] focus:text-[#3BB77E] hover:drop-shadow-xl focus:drop-shadow-xl transition-all'}> Additional info </button>
                        <button onClick={ () => showInfoHandler('review')} className={'px-[30px] py-[15px] rounded-full bg-white border border-[#F2F3F4] text-[18px] font-quicksand font-bold text-[#B6B6B6] hover:text-[#3BB77E] focus:text-[#3BB77E] hover:drop-shadow-xl focus:drop-shadow-xl transition-all'}>Reviews         </button>
                    </div>

                    <div>
                        {
                            showInfo === 'description' ?
                                <InfoBody description={singleData?.data[0].attributes.description} />
                            : showInfo === 'additional' ?
                                <div className={'flex flex-col items-start gap-y-[15px]'}>
                                    <InfoBodyBlock title={'Packaging & Delivrey'} description={'Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.\n' +
                                        'Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.\n'} />
                                    <InfoBodyBlock title={'Suggested Use'} description={'\n' +
                                        'Refrigeration not necessary.\n' +
                                        '\n' +
                                        'Stir before serving\n'} />
                                    <InfoBodyBlock title={'Other Ingredients'} description={'Organic raw pecans, organic raw cashews.\n' +
                                        'This butter was produced using a LTG (Low Temperature Grinding) process.\n' +
                                        'Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy.'} />
                                    <InfoBodyBlock title={'Warnings'} description={'Oil separation occurs naturally. May contain pieces of shell.'} />
                                </div>
                            : showInfo === 'review' &&
                                    <p>this is reviews</p>
                        }
                    </div>

                </div>
            </Section>
            <Section>

            </Section>
        </div>

    );
};