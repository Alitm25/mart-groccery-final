interface Props {
    title: string;
    description: string;
    button: boolean;
    buttonTitle: string;
    buttonClassName: string;
};

export function InfoBlock({title, description, button, buttonTitle, buttonClassName}: Props) {
    return (
        <div className={'flex flex-col items-start justify-start group'}>
            <h3 className={'font-quicksand text-heading4 md:text-heading3 mb-7 group-hover:text-[#3BB77E] transition-all cursor-default'}>{title}</h3>
            <p className={'font-lato text-heading-sm text-[#7E7E7E] max-w-[400px] font-normal cursor-default'}>{description}</p>
            {
                button &&
                <button className={buttonClassName}>{buttonTitle}</button>
            }
        </div>
    );
};