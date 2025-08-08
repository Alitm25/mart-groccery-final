import {Section} from "@/components/section/Section";
import {Badge, IconBox, ImageView} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {getAllProductsApiCall} from "@/api/Products";
import {useRouter} from "next/router";

interface Props {

};

export default function Index({}: Props) {
    const router = useRouter();
    const {data: singleData} = useQuery({queryKey: ['single-product'], queryFn: () => getAllProductsApiCall({ filters: {id: router.query.id}, populate: ['thumbnail'] })});
    console.log(singleData);

    return (
        <Section>
            {
                singleData &&
                <div className="container flex flex-col items-center justify-between mb-[68px]">
                    <div className="flex flex-col md:flex-row justify-center w-4/5">
                        <div className="w-1/2 mr-[28px]">
                            <div className="w-full mb-[28px] p-[40px] border-[1px] border-gray-200 rounded-2xl">
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
                        <div className="flex items-start justify-center">
                            {singleData.data[0].attributes.label &&


                            }
                        </div>
                    </div>
                </div>
            }
        </Section>
    );
};