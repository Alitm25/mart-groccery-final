interface Props {
    title: string;
    description: string;
};

export function InfoBlock({title, description}: Props) {
    return (
        <div className={'flex items-start justify-start'}>
            <h3 className={'font-quicksand text-heading3 mb-7 '}>{title}</h3>
            <p className={'font-lato text-heading-sm text-[#7E7E7E]'}>{description}</p>
        </div>
    );
};