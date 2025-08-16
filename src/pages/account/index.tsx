import {Section} from "@/components/section/Section";
import {ImageView} from "@/components";
import {useModal} from "@/stores/ModalContext";
import {useOrder} from "@/stores/OrderContext";

interface Props {

};

export default function Index({}: Props) {
    const {openModal} = useModal();
    const {order} =     useOrder();


    return (
        <Section sectionClassName={"container lg:mt-[100px] sm:mt-4 font-lato mb-[239px]"}>
            <div className="flex flex-wrap justify-center items-center">
                {/*buttons*/}
                <div className="flex flex-col gap-2.5 font-quickSand text-gray-500 text-heading6 lg:mr-[73px] sm:mr-0 sm:mb-10">
                    <button className="flex cursor-pointer gap-3.5 text-black px-4 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                        <ImageView alt={'setting logo'} width={26} height={24} src={'/setting-logo.svg'}/>
                        <div className="text-medium">Dashboard</div>
                    </button>

                    <button
                        className="flex cursor-pointer gap-3.5 text-black px-4 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                        <ImageView alt={'setting logo'} width={26} height={24} src={'/setting-logo.svg'}/>
                        <div className="text-medium">Order list</div>
                    </button>

                    <button
                        className="flex cursor-pointer gap-3.5 text-black px-4 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                        <ImageView alt={'shop logo'} width={26} height={24} src={'/shop-logo.svg'}/>

                        <div className="text-medium">Track your orders</div>
                    </button>

                    <button
                        className="flex cursor-pointer gap-3.5 text-black px-4 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                        <ImageView alt={'location logo'} width={26} height={24} src={'/location-logo.svg'}/>
                        <div className="text-medium">My address</div>
                    </button>

                    <button
                        className="flex cursor-pointer gap-3.5 text-black px-4 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                        <ImageView alt={'location logo'} width={26} height={24} src={'/account-logo.svg'}/>
                        <div className="text-medium">Account details</div>
                    </button>

                    <button onClick={() => openModal('ConfirmLogout')}
                        className="flex cursor-pointer gap-3.5 text-black px-4 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                        <ImageView alt={'payment method'} width={26} height={24} src={'/order-logo.svg'}/>
                        <div className="text-medium">Log out </div>
                    </button>
                </div>

                {/*order details*/}

                <div className="flex flex-col items-start">
                    <div className="text-heading3 font-quickSand text-blue-300 mb-[22px]">Your Orders</div>
                    {
                        order &&
                            <div className="flex flex-wrap justify-between items-start gap-20 rounded-2xl mb-[30px] px-[30px]">
                                <div className="text-medium text-gray-500">#1357</div>
                                <div className="text-medium text-gray-500">March 15, 2021</div>
                                <div className="text-medium text-green-300">Completed</div>
                                <div className="text-medium text-gray-500">$125.00 for 2 item</div>
                                <button className="text-medium text-green-200">View</button>
                            </div>
                    }

                </div>
            </div>
        </Section>
    );
};