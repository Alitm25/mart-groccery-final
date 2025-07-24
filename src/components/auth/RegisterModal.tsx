import {Input, Modal} from "@/components";
import React from "react";
import {createPortal} from "react-dom";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {registerApiCall} from "@/api/Register";

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
    const mutate = useMutation({mutationFn: registerApiCall});


    const onSubmit = (data :formData) => {
        mutate.mutate(data, {
            onSuccess: (response) => {
                console.log('response: ', response)
            }
        })
    }


    return createPortal(
        <Modal closeModal={onClose} title={'Register'}>
            <form onSubmit={handleSubmit(onSubmit)} className={'flex items-center justify-center flex-col gap-y-6'}>

                <Input errors={errors} register={ register('username', {required: 'This field is required. Please enter your username.', maxLength: 20}) } type={'text'} placeholder='Username' />
                <Input errors={errors} register={ register('email', {required: 'This field is required. Please enter your Email.', maxLength: 20, minLength: 6}) } type={'email'} placeholder='Email' />
                <Input errors={errors} register={ register('password', {required: 'This field is required. Please enter your password.', maxLength: 20, minLength: 6}) } type={'password'} placeholder='Password' />

                <button className={'rounded-xl border-2 bg-[#253D4E] text-white font-quicksand font-bold text-base py-[22px] px-[45px] md:py-4 md:px-7 hover:bg-white hover:border-[#253D4E] hover:text-[#253D4E] transition-all'}>
                    Submit & Register
                </button>
            </form>
        </Modal>,

        document.getElementById('modal-portal')!
    );
};