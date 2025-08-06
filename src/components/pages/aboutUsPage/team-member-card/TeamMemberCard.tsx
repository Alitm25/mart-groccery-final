import {ImageView} from "@/components";
import Link from "next/link";

interface Props {
    img: string;
    name: string;
    job: string;
    link: {
        facebook: string;
        twitter: string;
        youtube: string;
        instagram: string;
    }
};

export function TeamMemberCard({img, name, job, link}: Props) {
    return (
        <div className={'relative h-[571px]'}>
            <ImageView alt={'Team member image'} width={480} height={503} src={img} className={'rounded-lg'}/>
            <div className={'absolute z-[20] top-[73%] left-[50%] translate-x-[-50%] w-3/4 flex flex-col items-center justify-center text-center bg-white rounded-2xl py-7 drop-shadow'}>
                <h3 className={'text-heading4 font-quicksand mb-2'}>{name}</h3>
                <p className={'font-lato text-sm font-normal text-[#7E7E7E] mb-7'}>{job}</p>
                <ul className={'flex items-center justify-center gap-x-4'}>
                    <li>
                        <Link href={link.facebook}>
                            <ImageView alt={'social media icons'} width={19} height={19} src={'/assets/images/about-us/social-media-icons/Group.png'}/>
                        </Link>
                    </li>
                    <li>
                        <Link href={link.twitter}>
                            <ImageView alt={'social media icons'} width={19} height={19} src={'/assets/images/about-us/social-media-icons/akar-icons_twitter-fill.png'}/>
                        </Link>
                    </li>
                    <li>
                        <Link href={link.youtube}>
                            <ImageView alt={'social media icons'} width={19} height={19} src={'/assets/images/about-us/social-media-icons/akar-icons_youtube-fill.png'}/>
                        </Link>
                    </li>
                    <li>
                        <Link href={link.instagram}>
                            <ImageView alt={'social media icons'} width={19} height={19} src={'/assets/images/about-us/social-media-icons/akar-icons_instagram-fill.png'}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};