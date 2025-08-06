import {ImageView} from "@/components";
import Link from "next/link";

interface Props {
    icon: string;
    title: string;
    description: string;
};

export function ProvideCard({icon, title, description}: Props) {
    return (
        <div className={'border border-[#E5E5E5] hover:border-green-300 hover:shadow-lg hover:scale-[1.02] rounded-xl py-12 px-8 flex flex-col items-center justify-center gap-y-7 bg-white transition-all'}>
            <ImageView alt={'provider-icon'} width={100} height={100} src={icon}/>
            <h2 className={'font-quicksand text-heading4 font-bold'}>{title}</h2>
            <p className={'font-lato text-lg font-normal text-[#7E7E7E] text-center'}>{description}</p>
            <Link href={'#'}>
                <span className={'font-lato font-normal text-lg text-[#3BB77E]'}>Read more</span>
            </Link>
        </div>
    );
};