import {Modal} from "@/components";
import React from "react";
import {createPortal} from "react-dom";
import {useForm} from "react-hook-form";

interface Props {
    onClose: () => void;
};

interface formData {
    username: string;
    email: string;
    password: string;
}

export function RegisterModal({onClose}: Props) {
    const {register, handleSubmit, formState: {errors}} = useForm<formData>();

    const onSubmit = (data :formData) => {
        console.log(data);
    }


    return createPortal(
        <Modal closeModal={onClose} title={'Register'}>
            <form onSubmit={handleSubmit(onSubmit)} className={'flex items-center justify-center flex-col gap-y-6 w-full'}>
                <div className={'flex items-start justify-center flex-col'}>
                    <input className={'w-full outline-none hover:border-green-200 focus:border-green-200 font-lato font-normal text-base py-6 px-9 flex items-start justify-center text-[#B6B6B6] border rounded-xl transition-all'} placeholder={'Username'} type="text" {...register('username', {
                        required: 'This field is required. Please enter your username.',
                        maxLength: 20
                    })}/>
                </div>

                <div className={'flex items-start justify-center flex-col'}>
                    <input className={'w-full outline-none hover:border-green-200 focus:border-green-200 font-lato font-normal text-base py-6 px-9 flex items-start justify-center text-[#B6B6B6] border rounded-xl transition-all'} placeholder={'Email'} type="email" {...register('email', {
                        required: 'This field is required. Please enter your password.',
                        minLength: 6,
                        maxLength: 20
                    })}/>
                </div>

                <div className={'flex items-start justify-center flex-col'}>
                    <input className={'w-full outline-none hover:border-green-200 focus:border-green-200 font-lato font-normal text-base py-6 px-9 flex items-start justify-center text-[#B6B6B6] border rounded-xl transition-all'} placeholder={'Password'} type="password" {...register('password', {
                        required: 'This field is required. Please enter your password.',
                        minLength: 6,
                        maxLength: 20
                    })}/>
                </div>

                <button className={'rounded-xl border-2 bg-[#253D4E] text-white font-quicksand font-bold text-base py-[22px] px-[45px] hover:bg-white hover:border-[#253D4E] hover:text-[#253D4E] transition-all'}>
                    Submit & Register
                </button>
            </form>
        </Modal>,
        document.getElementById('modal-portal')!
    );
};