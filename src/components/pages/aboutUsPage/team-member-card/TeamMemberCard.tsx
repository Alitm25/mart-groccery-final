import {ImageView} from "@/components";

interface Props {
    img: string;
    name: string;
    job: string;
};

export function TeamMemberCard({img, name, job}: Props) {
    return (
        <div className={'relative h-[571px]'}>
            <ImageView alt={'Team member image'} width={480} height={503} src={img} className={'rounded-lg'}/>
            <div className={'absolute bottom-0 left-0 right-0 flex flex-col  items-center justify-center text-center bg-white rounded-2xl py-7 px-20'}>
                <h3 className={'text-heading4 font-quicksand'}>{name}</h3>
                <p className={'font-lato text-sm font-normal text-[#7E7E7E]'}>{job}</p>
            </div>
        </div>
    );
};