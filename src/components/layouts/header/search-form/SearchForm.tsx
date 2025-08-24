import React, {useEffect, useState} from 'react';
import {IconBox} from "@/components";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {getAllProductsApiCall} from "@/api/Products";
import {EntityType} from "@/types";
import {ProductsType} from "@/types/api/Products";
import {useDebounce} from "@/hooks/useDebounce";
import Link from "next/link";

interface Props {
    inputClassName?: string;
}

interface FromInput {
    search_text: string;
}

interface FilterData {
    title: {
        '$containsi': string,
    }
}



export function SearchForm({inputClassName = ''} :Props) {

    const [resultData, setResultData] = useState<Array<EntityType<ProductsType>>>()
    const {register, handleSubmit, watch} = useForm<FromInput>();
    const inputMutationData = useMutation({mutationFn: (data :FilterData) => getAllProductsApiCall( {filters: data} ) })

    const searchText = watch('search_text');


    useEffect(() => {
        if (searchText) {
            delay();
        } else {
            setResultData([]);
        }
    }, [searchText]);


    const onSubmit = (data :FromInput) => {
        if (data.search_text.length <= 1) {
            return;
        }

        inputMutationData.mutate(
            {
                title: {
                    '$containsi': data.search_text,
                }
            },
            {
                onSuccess: (response) => {
                    setResultData(response.data);
                }
            }
        )
    }

    const delay = useDebounce(handleSubmit(onSubmit), 1000);


    return (
        <div className={'relative'}>
            <form name="search-form" onSubmit={handleSubmit(onSubmit)} action="#" method="post" className="flex items-center">
                <input autoComplete={'off'} type="text" {...register('search_text')} placeholder="Search for items"
                       className={`text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none ${inputClassName}`}/>
                <button type="submit"><IconBox icon={'icon-search'} size={22}/></button>
            </form>
            {
                resultData &&
                <div className={'absolute bg-white w-full left-0 right-0 top-14'}>
                    <ul>
                        {
                            resultData.map( (item :EntityType<ProductsType>, index :number) => {
                                return (
                                    <Link href={`/single-product/${item.id}`}>
                                        <li className={'p-4 hover:bg-green-200 hover:text-white cursor-pointer'} key={index}>{item.attributes.title}</li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    );
}
