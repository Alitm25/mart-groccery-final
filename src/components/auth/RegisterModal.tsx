import {Input, Modal} from "@/components";
import React from "react";
import {createPortal} from "react-dom";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {registerApiCall} from "@/api/Register";
import {useAuth} from "@/stores/AuthContext";
import {toast} from "react-toastify";
import {useModal} from "@/stores/ModalContext";
import {useBasketData} from "@/hooks/useBasketData";

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
    const {login, isLogin} = useAuth();
    const {closeModal, openModal} = useModal();
    const {uuid2User} = useBasketData();


    const onSubmit = (data :formData) => {
        mutate.mutate(data, {
            onSuccess: (response) => {
                console.log(data);
                login(response.jwt, response.user);
                toast.success(`You have been successfully registered!`);
                closeModal();
                uuid2User();
            }
        })
    }


    return createPortal(
        <Modal closeModal={onClose} title={'Register'}>
            <form onSubmit={handleSubmit(onSubmit)} className={'flex items-center justify-center flex-col gap-y-6'}>

                <Input errors={errors} register={ register('username', {required: 'This field is required. Please enter your username.', maxLength: 20}) } type={'text'} placeholder='Username' />
                <Input errors={errors} register={ register('email', {required: 'This field is required. Please enter your Email.', maxLength: 20, minLength: 6}) } type={'email'} placeholder='Email' />
                <Input errors={errors} register={ register('password', {required: 'This field is required. Please enter your password.', maxLength: 20, minLength: 6}) } type={'password'} placeholder='Password' />

                <div className={'flex items-center justify-between w-full gap-x-2'}>
                    <button className={'rounded-xl border-2 bg-[#253D4E] text-white font-quicksand font-bold text-base py-[22px] px-[45px] md:py-4 md:px-7 hover:bg-white hover:border-[#253D4E] hover:text-[#253D4E] transition-all'}>
                        Submit & Register
                    </button>
                    <div className={'flex flex-col gap-y-1 font-quicksand font-bold break-words'}>
                        <span className={'text-base lg:text-lg'}>Do you have an account?</span>
                        <span onClick={ () => openModal('Login') } className={'cursor-pointer text-green-300 text-base lg:text-lg'}>click to Login</span>
                    </div>
                </div>
            </form>
        </Modal>,

        document.getElementById('modal-portal')!
    );
};