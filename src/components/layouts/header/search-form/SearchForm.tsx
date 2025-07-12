import React from 'react';
import {IconBox} from "@/components";
import {useForm} from "react-hook-form";

interface Props {
    inputClassName?: string;
}

interface FromInput {
    search_text: string;
}

export function SearchForm({inputClassName} :Props) {
    // TODO must developed some interactions
    const {register, handleSubmit} = useForm<FromInput>();

    const onSubmit = (data :FromInput) => {
        console.log(data);
    }

    return (
            <form name="search-form" onSubmit={handleSubmit(onSubmit)} action="#" method="post" className="flex items-center">
                <input type="text" {...register('search_text')} placeholder="Search for items"
                       className={`text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none ${inputClassName}`}/>
                <button type="submit"><IconBox icon={'icon-search'} size={22}/></button>
            </form>
    );
}
