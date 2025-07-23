import React, {useId} from "react";
import {UseFormRegister, UseFormRegisterReturn} from "react-hook-form";

interface Props {
    type?: 'text' | 'password' | 'email' | 'tel' | 'number';
    placeholder?: string;
    register: UseFormRegisterReturn<any>;
    label?: string;
    labelClassName?: string;
};

export function Input({type = 'text', placeholder, register, label, labelClassName}: Props) {
    /// creating id for connecting label and input together
    const id = useId();

    return (
        <div className={'flex items-start justify-center flex-col w-full'}>
            {label && <label htmlFor={id} className={labelClassName}>{label}</label>}
            <input id={id} className={'w-full outline-none hover:border-green-200 focus:border-green-200 font-lato font-normal text-base py-6 px-9 flex items-start justify-center text-[#B6B6B6] border rounded-xl transition-all'}
                   placeholder={placeholder} type={type} {...register}/>
        </div>
    );
};