import {Section} from "@/components/section/Section";
import {ImageView, InfoBlock, Input} from "@/components";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import React from "react";

interface formData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

export default function Index({}) {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<formData>()

    const onSubmitHandler = (data :formData) => {
        toast.success('Your message have sent successfully, Our team will respond your message as soon as possible.');
        reset();
    }

    return (
        <div className={'container'}>
            <Section>
                <div className={'flex flex-col md:flex-row items-center justify-center gap-x-16 flex-wrap gap-y-12'}>
                    <div className={'flex flex-col items-center xl:items-start justify-center gap-y-5 w-full xl:w-4/12'}>
                        <h3 className={'font-quicksand text-heading5 md:text-heading4 text-[#3BB77E]'}>How can help you ?</h3>
                        <h1 className={'font-quicksand text-heading2 md:text-heading1 text-[#253D4E]'}>let us know how we can help you</h1>
                        <p className={'font-lato text-heading-sm font-normal text-[#7E7E7E]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p className={'font-lato text-heading-sm font-normal text-[#7E7E7E]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className={'grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16'}>
                        <InfoBlock title={'01. Visit Feedback'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'} />
                        <InfoBlock title={'02. Employer Services'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'} />
                        <InfoBlock title={'03. Billing Inquiries'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'} />
                        <InfoBlock title={'04. General Inquiries'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'} />
                    </div>
                </div>
            </Section>
            <Section>
                <div className={'w-full h-[483px]'}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.314876619886!2d-87.62614042330084!3d41.88608486491334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b34afe61%3A0x6caeb5f721ca846!2s205%20N%20Michigan%20Ave%20Suit%20810%2C%20Chicago%2C%20IL%2060601%2C%20USA!5e0!3m2!1sen!2sae!4v1754523240590!5m2!1sen!2sae"
                        className={"w-full h-full border-none rounded"}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </Section>
            <Section>
                <div className={'flex flex-wrap items-center justify-evenly gap-y-12'}>
                    <InfoBlock title={'Office'} description={'205 North Michigan Avenue, Suite 810\n' +
                        'Chicago, 60601, USA\n' +
                        'Phone: (123) 456-7890\n' +
                        'Email: contact@Evara.com'} button={true} buttonTitle={'View map'} buttonClassName={'py-3 px-6 rounded-md bg-[#3BB77E] font-quicksand text-sm font-bold text-white mt-7'}
                         buttonLink={'https://maps.app.goo.gl/ysjE9khVNQbpVt5V7'}
                    />

                    <InfoBlock title={'Studio'} description={'205 North Michigan Avenue, Suite 810\n' +
                        'Chicago, 60601, USA\n' +
                        'Phone: (123) 456-7890\n' +
                        'Email: contact@Evara.com'} button={true} buttonTitle={'View map'} buttonClassName={'py-3 px-6 rounded-md bg-[#3BB77E] font-quicksand text-sm font-bold text-white mt-7'}
                        buttonLink={'https://maps.app.goo.gl/ysjE9khVNQbpVt5V7'}
                    />

                    <InfoBlock title={'Shop'} description={'205 North Michigan Avenue, Suite 810\n' +
                        'Chicago, 60601, USA\n' +
                        'Phone: (123) 456-7890\n' +
                        'Email: contact@Evara.com'} button={true} buttonTitle={'View map'} buttonClassName={'py-3 px-6 rounded-md bg-[#3BB77E] font-quicksand text-sm font-bold text-white mt-7'}
                         buttonLink={'https://maps.app.goo.gl/ysjE9khVNQbpVt5V7'}
                    />
                </div>

            </Section>
            <Section>
                <div className="flex flex-col md:flex-row items-center justify-center gap-x-16">
                    <form onSubmit={handleSubmit(onSubmitHandler)} className={'flex flex-col items-start justify-start md:grid md:grid-cols-2 w-full gap-6'}>
                        <div className={'flex flex-col items-start justify-start col-span-2 mb-12 gap-y-3'}>
                            <h3 className={'text-heading5 md:text-heading4 font-quicksand text-[#3BB77E]'}>Contact form</h3>
                            <h2 className={'text-heading3 sm:text-heading2 md:text-heading1 font-quicksand text-[#253D4E]'}>Drop Us a Line</h2>
                            <p className={'text-heading-sm font-normal font-lato text-[#7E7E7E]'}>Your email address will not be published. Required fields are marked *</p>
                        </div>

                        <Input type={'text'} register={register( 'name', {required: 'Please insert your name.'})} errors={errors} placeholder={'Your name *'} {...{autoComplete: 'off'}}/>
                        <Input type={'email'} register={register( 'email', {required: 'Please insert your Email.'})} errors={errors} placeholder={'Email *'} {...{autoComplete: 'off'}}/>
                        <Input type={'tel'} register={register( 'phone', {required: 'Please insert your Phone number.'})} errors={errors} placeholder={'Phone number *'} {...{autoComplete: 'off'}}/>
                        <Input type={'text'} register={register( 'subject', {required: 'Please write the subject you want to talking about.'})} errors={errors} placeholder={'Subject *'} {...{autoComplete: 'off'}}/>
                        <Input register={register( 'message', {required: 'Please insert your message.'})} errors={errors} type={'textarea'} placeholder={'Message *'} className={'h-[244px] w-full'}/>

                        <button className={'col-span-2 w-fit h-fit rounded-xl border-2 bg-[#253D4E] text-white font-quicksand font-bold text-base md:py-[22px] md:px-[45px] py-4 px-7 hover:bg-white hover:border-[#253D4E] hover:text-[#253D4E] transition-all'}>
                            Send Message
                        </button>
                    </form>
                    <ImageView alt={'message form image'} width={378} height={412} src={'/assets/images/contact-us/Rectangle-43.png'} className={'hidden lg:block'}/>

                </div>
            </Section>
        </div>
    );
};