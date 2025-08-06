import {Section} from "@/components/section/Section";
import {InfoBlock} from "@/components/common/ui/info-block";

interface Props {
    
};

export default function Index({}: Props) {
    return (
        <div className={'container'}>
            <Section>
                <div className={'flex flex-col md:flex-row items-center justify-center gap-x-16 flex-wrap gap-y-12'}>
                    <div className={'flex flex-col items-center xl:items-start justify-center gap-y-5 w-full xl:w-4/12'}>
                        <h3 className={'font-quicksand text-heading4 text-[#3BB77E]'}>How can help you ?</h3>
                        <h1 className={'font-quicksand text-heading1 text-[#253D4E]'}>let us know how we can help you</h1>
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
        </div>
    );
};