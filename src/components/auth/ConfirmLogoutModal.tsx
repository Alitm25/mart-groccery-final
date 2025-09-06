import {Modal} from "@/components";
import {useModal} from "@/stores/ModalContext";
import {useAuth} from "@/stores/AuthContext";
import {toast} from "react-toastify";
import {useQueryClient} from "@tanstack/react-query";


export function ConfirmLogoutModal({}) {


    return (
        <Modal closeModal={closeModal} title={'Confirm Logout'}>
            <div className={'flex flex-col items-center justify-center gap-y-11'}>
                <div className={'font-quicksand text-lg lg:text-2xl font-bold'}>Are you sure that you want to Log out?</div>

                <div className={'flex items-center justify-evenly w-full'}>
                    <button onClick={closeModal} className={'rounded-xl border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-white hover:border-white font-quicksand font-bold text-lg md:py-4 md:px-[38px] py-4 px-7 transition-all'}>
                        No
                    </button>
                    <button onClick={logoutHandler} className={'rounded-xl border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-white hover:border-white font-quicksand font-bold text-lg md:py-4 md:px-[38px] py-4 px-7  transition-all'}>
                        Yes
                    </button>
                </div>
            </div>
        </Modal>
    );
};