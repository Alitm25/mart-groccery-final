interface Props {
    title: string;
    description: string;
};

export function InfoBodyBlock({title, description}: Props) {
    return (
        <div className={'flex flex-col items-start justify-start'}>
            <h3 className={'font-quicksand text-heading5 mb-[15px] transition-all cursor-default'}>{title}</h3>
            <p className={'whitespace-pre-line font-lato text-heading-sm text-[#7E7E7E] font-normal cursor-default'}>{description}</p>
        </div>
    );
};