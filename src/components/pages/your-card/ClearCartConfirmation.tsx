import {Modal} from "@/components";
import {useModal} from "@/stores/ModalContext";
import {useBasketData} from "@/hooks/useBasketData";
import {useRouter} from "next/router";
import {toast} from "react-toastify";
import {useQueryClient} from "@tanstack/react-query";

export default function ClearCartConfirmation() {
    const {closeModal} = useModal()
    const {clearBasket} = useBasketData();
    const router = useRouter();

    const confirmHandler = () => {
        clearBasket();
        toast.success('Your basket has been cleared successfully');
        closeModal();
        router.push('/');
    }

    return (
        <Modal closeModal={closeModal} title={'Confirm cleaning basket'}>
            <div className={'flex flex-col items-center justify-center gap-y-11'}>
                <div className={'font-quicksand text-lg lg:text-2xl font-bold'}>Are you sure that you want clear all of the products?</div>

                <div className={'flex items-center justify-evenly w-full'}>
                    <button onClick={closeModal} className={'rounded-xl border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-white hover:border-white font-quicksand font-bold text-lg md:py-4 md:px-[38px] py-4 px-7 transition-all'}>
                        No
                    </button>
                    <button onClick={confirmHandler} className={'rounded-xl border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-white hover:border-white font-quicksand font-bold text-lg md:py-4 md:px-[38px] py-4 px-7  transition-all'}>
                        Yes
                    </button>
                </div>
            </div>
        </Modal>
    );
};