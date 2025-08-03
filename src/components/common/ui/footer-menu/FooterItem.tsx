import Link from "next/link";
import React, {useState} from "react";
import {IconBox} from "@/components";

interface Props {
    title: string;
    item: Array<string>;
};

export function FooterItem({title, item}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHandler = () => {
        setIsOpen(prevState =>  !prevState);
    }

    return (
        <div className="pt-4 md:pt-0">
            <div onClick={toggleHandler} className="flex text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading4 text-blue-300 toggle items-center">
                {title}
                <IconBox icon={`${isOpen ? 'icon-angle-small-up' : 'icon-down-dark'} inline-block sm:hidden`} size={24}/>
            </div>
            <ul className="hidden md:flex flex-col gap-2.5 mb-4 lg:mb-6">
                {
                    item.map( (title :string, index :number) => {
                        return <li key={index} className="font-lato text-medium text-blue-300"><Link href="#">{title}</Link></li>

                    })
                }
            </ul>
        </div>
    );
};