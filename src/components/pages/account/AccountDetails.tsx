import {useEffect, useState} from "react";
import {UserType} from "@/types/api/Auth";

export function AccountDetails() {
    const [user, setUser]                       = useState<UserType | null>(null);

    useEffect(() => {
        const user = window.localStorage.getItem('user');

        if (user)
            setUser(JSON.parse(user) as UserType);
    }, []);

    return (
        <>
            <div className="text-heading3 font-quickSand text-blue-300 mb-8">Your Account details</div>
            <div className={'flex items-center flex-wrap justify-between gap-y-4 gap-x-11'}>
                <div className={'flex flex-col items-start justify-center gap-y-4'}>
                    <p className={'text-heading5 font-quicksand text-[#253D4E]'}>Username: </p>
                    <p className={'text-heading6 font-lato text-[#253D4E]'}>{user?.username}</p>
                </div>
                <div className={'flex flex-col items-start justify-center gap-y-4'}>
                    <p className={'text-heading5 font-quicksand text-[#253D4E]'}>Email: </p>
                    <p className={'text-heading6 font-lato text-[#253D4E]'}>{user?.email}</p>
                </div>
                <div className={'flex flex-col items-start justify-center gap-y-4'}>
                    <p className={'text-heading5 font-quicksand text-[#253D4E]'}>Provider: </p>
                    <p className={'text-heading6 font-lato text-[#253D4E]'}>{user?.provider}</p>
                </div>
                <div className={'flex flex-col items-start justify-center gap-y-4'}>
                    <p className={'text-heading5 font-quicksand text-[#253D4E]'}>Blocked: </p>
                    <p className={'text-heading6 font-lato text-[#253D4E]'}>{user?.blocked === true ? 'User is blocked' : 'User is not blocked'}</p>
                </div>
                <div className={'flex flex-col items-start justify-center gap-y-4'}>
                    <p className={'text-heading5 font-quicksand text-[#253D4E]'}>Confirmation: </p>
                    <p className={'text-heading6 font-lato text-[#253D4E]'}>{user?.confirmed === true ? 'User is Confirmed' : 'User is not Confirmed'}</p>
                </div>
            </div>
        </>

    );
};