import {IconBox, ImageView} from "@/components";
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
                <div className="flex items-center w-full max-w-md rounded-xl border border-gray-200 shadow-sm px-[15px] py-5 bg-white hover:drop-shadow-xl transition">
                    <IconBox icon="icon-search mr-1" size={22} />
                    <input
                        type="text"
                        placeholder="Enter your keywords..."
                        className="flex-1 bg-transparent font-lato outline-none ml-2 text-medium text-[#B6B6B6] placeholder-[#B6B6B6]"
                    />
                </div>
            </div>
        </div>

    );
}
;