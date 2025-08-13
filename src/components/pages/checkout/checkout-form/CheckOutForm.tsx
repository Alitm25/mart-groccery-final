import {IconBox, ImageView, Input} from "@/components";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {useModal} from "@/stores/ModalContext";

interface Props {
    options: Array<country>
}

interface formData {
    firstName: string,
    lastName: string,
    address: string,
    address2: string,
    state: country,
    city: string,
    postCode: string,
    phone: string,
    email: string,
    company?: string,
    additional?: string,

};

type country = 'Iran' | 'United State'

export function CheckOutForm({options}: Props) {
    const {register, formState: {errors}, reset} = useForm<formData>()
    const {openModal} = useModal();
    const [loginToken, setLoginToken] = useState<string | null>(null)

    const onSubmitHandler = ( ) => {
        toast.success('Your message have sent successfully, Our team will respond your message as soon as possible.');
        reset();
    }

    useEffect(() => {
        const token = window.localStorage.getItem('loginToken');
        setLoginToken(token);
    }, []);

    return (
        <div>
            <div className={'flex flex-col md:flex-row items-center justify-center gap-7 mb-16'}>
                {
                    !loginToken &&
                    <div className="text-sm lg:text-medium text-gray-500 bg-white flex gap-[7px] py-[13px] px-10 items-center justify-center shadow-c rounded-[10px] border-[1px] border-gray-200">
                        <IconBox icon={'icon-user'} size={16} />
                        <div>Already have an account?</div>
                        <span onClick={() => openModal('Login')} className={"text-green-200 cursor-pointer"} >Click here to login</span>
                    </div>
                }
                <div className="focus-within:border-green-200 bg-white text-medium text-gray-500 flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 min-h-[52px]">
                    <div className="flex gap-[7px] ml-[22px] flex-1">
                        <ImageView alt={'coupon-icon'} width={16} height={16} src={'/assets/images/coupon-icon.svg'}/>
                        <label htmlFor="coupon-code" className="hidden"></label>
                        <input name="coupon-code" id="coupon-code" type="text" placeholder="Coupon Code" className="w-full placeholder-gray-400 focus:outline-none text-gray-500 text-sm lg:text-medium"/>
                    </div>
                    <button className="font-quickSand text-heading-sm lg:text-heading6 bg-blue-300  rounded-r-[10px] text-white py-4 px-3 lg:px-5 xl:px-7">Apply Coupon</button>
                </div>
            </div>
            <h3 className={'text-heading5 md:text-heading4 font-quicksand text-[#253D4E]'}>Billing Details</h3>
            <div className={"flex flex-col lg:grid lg:grid-cols-2 w-full gap-6 mt-10"}>
                <Input type={'text'}     register={register( 'firstName',  {required: 'Please insert your first name.'})}          errors={errors} placeholder={'First name *'}        {...{autoComplete: 'off'}}/>
                <Input type={'text'}     register={register( 'lastName',   {required: 'Please insert your last name.'})}           errors={errors} placeholder={'Last name *'}         {...{autoComplete: 'off'}}/>
                <Input type={'text'}     register={register( 'address',    {required: 'Please insert your address.'})}             errors={errors} placeholder={'Address 1 *'}         {...{autoComplete: 'off'}}/>
                <Input type={'text'}     register={register( 'address2',   {required: 'Please insert your address line 2.'})}      errors={errors} placeholder={'Address line 2 *'}    {...{autoComplete: 'off'}}/>
                <Input type={'select'}   register={register( 'state',      {required: 'Please choose your state or country.'})}    errors={errors} options={options}/>
                <Input type={'text'}     register={register( 'city',       {required: 'Please insert your city or town.'})}        errors={errors} placeholder={'City/Town *'}         {...{autoComplete: 'off'}}/>
                <Input type={'text'}     register={register( 'postCode',   {required: 'Please insert your postcode or Zip.'})}     errors={errors} placeholder={'Postcode/Zip *'}      {...{autoComplete: 'off'}}/>
                <Input type={'tel'}      register={register( 'phone',      {required: 'Please insert phone number.'})}             errors={errors} placeholder={'Address line 2 *'}    {...{autoComplete: 'off'}}/>
                <Input type={'email'}    register={register( 'email',      {required: 'Please insert your email address.'})}       errors={errors} placeholder={'Email*'}              {...{autoComplete: 'off'}}/>
                <Input type={'text'}     register={register( 'company')}                                                         errors={errors} placeholder={'Company'}             {...{autoComplete: 'off'}}/>
                <Input type={'textarea'} register={register( 'additional',)} errors={errors} placeholder={'Additional information'} className={'h-[208px] w-full'}/>
            </div>
        </div>
    );
};