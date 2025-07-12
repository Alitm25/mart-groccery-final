import React from 'react';
import {IconBox} from "@/components";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {getAllProductsApiCall} from "@/api/Products";

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
    // TODO must developed some interactions
    const {register, handleSubmit} = useForm<FromInput>();

    const inputMutationData = useMutation({mutationFn: (data :FilterData) => getAllProductsApiCall( {filters: data} ) })

    const onSubmit = (data :FromInput) => {
        inputMutationData.mutate(
            {
                title: {
                    '$containsi': data.search_text,
                }
            },
            {
                onSuccess: (response) => {
                    console.log('response: ', response)
                }
            }
        )
    }

    return (
            <form name="search-form" onSubmit={handleSubmit(onSubmit)} action="#" method="post" className="flex items-center">
                <input type="text" {...register('search_text')} placeholder="Search for items"
                       className={`text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none ${inputClassName}`}/>
                <button type="submit"><IconBox icon={'icon-search'} size={22}/></button>
            </form>
    );
}
