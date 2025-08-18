import {ImageView} from "@/components";

interface Props {
    title: string;
    icon: string;
    onClick: () => void;
    isSelect?: boolean;
};

export function AccountSectionBtn({title, icon, onClick, isSelect}: Props) {
    return (
            <button onClick={onClick}
                className={`flex flex-col lg:flex-row cursor-pointer gap-3.5 text-black px-4 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-[#3BB77E] focus:text-white focus:drop-shadow-lg focus:scale-105 hover:text-white hover:drop-shadow-lg transition-all hover:scale-105 ${isSelect && 'bg-[#3BB77E] text-white drop-shadow-lg scale-105'}`}>
                <ImageView alt={'setting logo'} width={26} height={24} src={icon}/>
                <div className="hidden lg:block text-medium">{title}</div>
            </button>
    );
};