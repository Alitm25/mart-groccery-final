import {IconBox} from "@/components";

interface Props {
    rate: number;
};

export function Rating({rate}: Props) {
    let starFill = [];
    const roundRate = Math.round(rate);

    for (let i = 0; i < roundRate; i++) {
        starFill.push(
            <li className="flex"><IconBox icon={"icon-star-full"} size={12}></IconBox></li>
        );
    }

    let starEmpty = [];

    for (let i = roundRate; i < 5; i++) {
        starEmpty.push(
            <li className="flex"><IconBox icon={"icon-star-empty"} size={12}></IconBox></li>
        );
    }


    return (
        <ul className="flex items-center gap-1">
            {starFill} {starEmpty}
        </ul>
    );
};