import {IconBox, Input} from "@/components";
import React from "react";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";

interface Props {
    children: React.ReactNode;
    submitBtnClassName: string;
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

export function CheckOutForm({children, submitBtnClassName}: Props) {
    const {register, handleSubmit, formState: {errors}, reset} = useForm()

    const onSubmitHandler = ( ) => {
        toast.success('Your message have sent successfully, Our team will respond your message as soon as possible.');
        reset();
    }


    return (
        <div className={'flex flex-col md:grid md:grid-cols-2 gap-6'}>
            <div className="lg:col-span-2 2xl:col-span-1 text-medium text-gray-500 bg-white flex gap-[7px] py-[13px] items-center justify-center shadow-c rounded-[10px] border-[1px] border-gray-200">
                <IconBox icon={'fi-rs-user'} />
                <img src="../assets/icons/fi-rs-user.svg" width="16" height="16" alt="unanimous user"/>
                <div>Already have an account?</div>
                <a className="text-green-200" href="#">Click here to login</a>
            </div>
            <div
                className="lg:col-span-2 2xl:col-span-1 focus-within:border-green-200 bg-white text-medium text-gray-500 flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 min-h-[52px]">
                <IconBox icon={'fi-rs-user'} />
                <div className="flex gap-[7px] ml-[22px] flex-1">
                    <img src="../assets/icons/fi-rs-label%201.svg" width="16" height="16"
                         alt="unanimous user"/>
                    <label htmlFor="coupon-code" className="hidden"></label>
                    <input name="coupon-code" id="coupon-code" type="text" placeholder="Coupon Code"
                           className="w-full placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                </div>
                <button
                    className="font-quickSand text-heading6 bg-blue-300 h-full min-h-[52px] rounded-r-[10px] text-white px-7">Apply
                    Coupon
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmitHandler)} className={"flex flex-col lg:grid lg:grid-cols-[2fr_1.5fr] xl:grid-cols-[2fr_1fr] gap-6 mt-12"}>
                <h3 className={'text-heading5 md:text-heading4 font-quicksand text-[#3BB77E]'}>Contact form</h3>


                <Input type={'text'}     register={register( 'firstName',  {required: 'Please insert your first name.'})}          errors={errors} placeholder={'First name *'}        {...{autoComplete: 'off'}}/>
                <Input type={'text'}     register={register( 'lastName',   {required: 'Please insert your last name.'})}           errors={errors} placeholder={'Last name *'}         {...{autoComplete: 'off'}}/>
                <Input type={'text'}     register={register( 'address',    {required: 'Please insert your address.'})}             errors={errors} placeholder={'Address 1 *'}         {...{autoComplete: 'off'}}/>
                <Input type={'text'}     register={register( 'address2',   {required: 'Please insert your address line 2.'})}      errors={errors} placeholder={'Address line 2 *'}    {...{autoComplete: 'off'}}/>
                <Input type={'select'}   register={register( 'state',      {required: 'Please choose your state or country.'})}    errors={errors} />
                <Input type={'text'}     register={register( 'city',       {required: 'Please insert your city or town.'})}        errors={errors} placeholder={'City/Town *'}         {...{autoComplete: 'off'}}/>
                <Input type={'text'}     register={register( 'postCode',   {required: 'Please insert your postcode or Zip.'})}     errors={errors} placeholder={'Postcode/Zip *'}      {...{autoComplete: 'off'}}/>
                <Input type={'tel'}      register={register( 'phone',      {required: 'Please insert phone number.'})}             errors={errors} placeholder={'Address line 2 *'}    {...{autoComplete: 'off'}}/>
                <Input type={'email'}    register={register( 'email',      {required: 'Please insert your email address.'})}       errors={errors} placeholder={'Email*'}              {...{autoComplete: 'off'}}/>
                <Input type={'text'}     register={register( 'Company')}                                                         errors={errors} placeholder={'Company'}             {...{autoComplete: 'off'}}/>
                <Input type={'textarea'} register={register( 'additional',)} errors={errors} placeholder={'Additional information'} className={'h-[208px] w-full'}/>

                <button className={submitBtnClassName}>
                    {children}
                </button>
            </form>
        </div>
    );
};