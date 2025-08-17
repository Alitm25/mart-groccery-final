import {ImageView} from "@/components";

interface Props {
    title: string;
    icon: string;
    onClick: () => void;
};

export function AccountSectionBtn({title, icon, onClick}: Props) {
    return (
            <button onClick={onClick} className="flex cursor-pointer gap-3.5 text-black px-4 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                <ImageView alt={'setting logo'} width={26} height={24} src={icon}/>
                <div className="text-medium">{title}</div>
            </button>
    );
};