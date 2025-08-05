interface Props {
    title: string;
    description: string;
};

export function InfoBlock({title, description}: Props) {
    return (
        <div className={'flex flex-col items-start justify-start'}>
            <h3 className={'font-quicksand text-heading4 md:text-heading3 mb-7 '}>{title}</h3>
            <p className={'font-lato text-heading-sm text-[#7E7E7E] max-w-[400px] font-normal'}>{description}</p>
        </div>
    );
};