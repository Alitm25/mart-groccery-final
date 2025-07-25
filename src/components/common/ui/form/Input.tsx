import React, {useId} from "react";
import {FieldErrors, UseFormRegisterReturn} from "react-hook-form";
import {ErrorMessage} from "@/components/common/ui/form/ErrorMessage";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    type?:              'text' | 'password' | 'email' | 'tel' | 'number';
    placeholder?:       string;
    register:           UseFormRegisterReturn<any>;
    label?:             string;
    labelClassName?:    string;
    errors:             FieldErrors<any>;
};

export function Input({type = 'text', placeholder, register, label, labelClassName, errors, ...rest}: Props) {
    /// creating id for connecting label and input together
    const id = useId();

    const name = register.name;
    const hasError = !!(errors && errors[name]);

    return (
        <div className={'w-full'}>
            <div className={'flex items-start justify-center flex-col mb-1'}>
                {label && <label htmlFor={id} className={labelClassName}>{label}</label>}
                <input {...rest} id={id} className={`w-full outline-none ${hasError && 'border-rose-600 hover:border-rose-600'} hover:border-green-200 focus:border-green-200 font-lato font-normal text-base py-6 px-9 flex items-start justify-center text-[#B6B6B6] border rounded-xl transition-all`}
                       placeholder={placeholder} type={type} {...register}/>
            </div>
            <ErrorMessage errors={errors} name={name}/>
        </div>
    );
};