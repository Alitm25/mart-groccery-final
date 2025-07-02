import {IconBox} from "@/components";

interface Props {
    rate: number;
};

export function Rating({rate}: Props) {
    let starFill = [];

    for (let i = 0; i < rate; i++) {
        starFill.push(
            <li className="flex"><IconBox icon={"icon-star-full"} size={12}></IconBox></li>
        );
    }

    let starEmpty = [];

    for (let i = rate; i < 5; i++) {
        starEmpty.push(
            <li className="flex"><IconBox icon={"icon-star-empty"} size={12}></IconBox></li>
        );
    }


    return (
        <ul className="flex gap-1">
            {/*<li className="flex"><i className="icon-star-full text-[12px]"></i></li>*/}
            {/*<li className="flex"><i className="icon-star-full text-[12px]"></i></li>*/}
            {/*<li className="flex"><i className="icon-star-full text-[12px]"></i></li>*/}
            {/*<li className="flex"><i className="icon-star-full text-[12px]"></i></li>*/}
            {/*<li className="flex"><i className="icon-star-empty text-[12px]"></i></li>*/}
            {starFill} {starEmpty}
        </ul>
    );
};