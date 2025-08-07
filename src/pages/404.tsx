import {IconBox, ImageView, Input, SearchForm} from "@/components";
import Link from "next/link";
import React from "react";

export default function Custom404() {
    return (
        <div className={'container mb-72'}>
            <div className={'flex flex-col items-center justify-center'}>
                <ImageView alt={'404 logo'} width={510} height={194} src={'/assets/images/404.png'}/>
                <h1 className={'text-heading1 font-quicksand text-[#253D4E] mb-7'}>Page Not Found</h1>
                <p className={'text-heading-sm font-normal font-lato text-[#7E7E7E] mb-1'}>The link you clicked may be broken or the page may have been removed. </p>
                   <p className={'text-heading-sm font-normal font-lato text-[#7E7E7E] mb-7'}>visit the <Link href={'/'}><span className={'text-[#3BB77E]'}>Homepage</span></Link>  or <Link href={'/contact-us'}><span className={'text-[#3BB77E]'}>Contact us</span></Link> about the problem </p>
                <div className={'w-4/12 border border-[#E5E5E5] rounded-2xl drop-shadow hover:drop-shadow-lg flex items-center justify-center gap-x-2 transition-all p-4'}>
                    <IconBox icon={'icon-search'} size={22}/>
                    <div className={'w-full'}>
                        <input type={'text'} placeholder={'Enter your keywords...'} className={'w-full text-base font-lato font-normal text-[#B6B6B6] outline-none'}/>
                    </div>
                </div>
            </div>
        </div>

    );
}
;