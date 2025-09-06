import Link from "next/link";
import React, {MouseEvent, useEffect, useState} from "react";
import {IconBox} from "@/components";
import {useMenu} from "@/hooks/useMenu";
import {EntityType, MenuItemsType} from "@/types";
import useOverlay from "@/hooks/useOverlay";


export function Menu() {
    // Load the main menu & browse category menu items api
    const {data: mainMenuItems} = useMenu({position: 'main_menu'});
    const {data: browseCategoryItems} = useMenu({position: 'brows-category'});


    // make the browse category interactive
    const [showBrowseCategoryMenu, setShowBrowseCategoryMenu] =useState<boolean>(false);

    const showCategoryBtnHandler = (e :MouseEvent) => {
        e.stopPropagation();
        setShowBrowseCategoryMenu((prevState) => !prevState);
    }

    const categoryMenuBodyHandler = (e :MouseEvent) => {
        e.stopPropagation();
    }

    useOverlay({
        onClick: () => {
            setShowBrowseCategoryMenu(false);
        }
    })


    return (
        <>
            <div className={'relative'}>
                <div id="all_categories" onClick={showCategoryBtnHandler} className="flex cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center mb-5 md:mb-0">
                    <IconBox icon={'icon-apps'} size={24} link={'#'} title={'Browse All Categories'} titleClassName={'text-heading-sm md:text-heading6 font-bold font-quicksand ml-2'}/>
                    <IconBox icon={'icon-angle-small-down'} size={24} />
                </div>
                <div id="all_categories_box" onClick={categoryMenuBodyHandler} className={`${showBrowseCategoryMenu ? 'flex' : 'hidden'} lg:absolute z-20 bg-white left-0 top-16 lg:w-[500px] rounded-[5px] lg:border-[1px] border-green-300 lg:p-[30px] hover:cursor-default`}>
                    <div id="all_cat_inner_box" className="flex flex-col lg:flex-row lg:flex-wrap justify-between gap-y-[15px]">

                        {
                            browseCategoryItems &&
                            browseCategoryItems.data.map( (item :EntityType<MenuItemsType>, index :number) => {
                                return (
                                    <IconBox key={index} icon={item.attributes.icon_name} size={30} link={item.attributes.link} title={item.attributes.title} titleClassName={'text-heading-sm text-blue-300'} path={item.attributes.icon_path} linkClassName={'gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start lg:pl-4 lg:hover:border-green-300 hover:scale-105 transition'}/>
                                )
                            })
                        }

                        <div id="more_categories" className="cursor-pointer flex gap-4 items-center lg:justify-center w-full mt-[17px]">
                            <IconBox icon={'icon-add'} size={24} />
                            <div className="text-heading-sm text-blue-300">More Categories</div>
                        </div>
                    </div>
                </div>
            </div>

            <nav id="main_menu">
                <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">
                    {
                        mainMenuItems &&
                        mainMenuItems.data.map( (item :EntityType<MenuItemsType>, index :number) => {
                            return (
                                <li key={index}>
                                    {
                                        item.attributes.icon_name ? <IconBox icon={item.attributes.icon_name} link={item.attributes.link} title={item.attributes.title} size={24}/>
                                            : <Link href={item.attributes.link} className="flex items-center gap-1">{item.attributes.title}</Link>
                                    }
                                </li>

                            )
                        })
                    }

                </ul>
            </nav>
        </>
    );
}

