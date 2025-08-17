import {Section} from "@/components/section/Section";
import {ImageView} from "@/components";
import {useModal} from "@/stores/ModalContext";
import {useOrder} from "@/stores/OrderContext";
import {YourOrders} from "@/components/pages/account/YourOrders";
import {AccountSectionBtn} from "@/components/pages/account/AccountSectionBtn";

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
                    <AccountSectionBtn title={'Dashbord'} icon={'/setting-logo.svg'} />
                    <AccountSectionBtn title={'Order list'} icon={'/setting-logo.svg'} />
                    <AccountSectionBtn title={'Track your orders'} icon={'/shop-logo.svg'} />
                    <AccountSectionBtn title={'My address'} icon={'/location-logo.svg'} />
                    <AccountSectionBtn title={'Account details'} icon={'/account-logo.svg'} />
                    <AccountSectionBtn title={'Log out'} icon={'/order-logo.svg'} />

                </div>

                {/*order details*/}

                <YourOrders order={order} />
            </div>
        </Section>
    );
};