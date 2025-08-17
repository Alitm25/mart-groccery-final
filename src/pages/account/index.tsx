import {Section} from "@/components/section/Section";
import {ImageView} from "@/components";
import {useModal} from "@/stores/ModalContext";
import {useOrder} from "@/stores/OrderContext";
import {YourOrders} from "@/components/pages/account/YourOrders";
import {AccountSectionBtn} from "@/components/pages/account/AccountSectionBtn";
import {useState} from "react";
import {AccountDetails} from "@/components/pages/account/AccountDetails";

type AccountSection = 'dashboard' | 'order-list' | 'track-orders' | 'my-address' | 'account-detail'

export default function Index() {
    const {openModal}                         = useModal();
    const {order}                             = useOrder();
    const [accountSection, setAccountSection] = useState<AccountSection>('dashboard');


    return (
        <Section sectionClassName={"container lg:mt-[100px] sm:mt-4 font-lato mb-[239px]"}>
            <div className={'flex items-center justify-evenly'}>
                <div className="flex flex-wrap justify-center items-center">
                    {/*buttons*/}
                    <div className="flex flex-col gap-2.5 font-quickSand text-gray-500 text-heading6 ml-auto sm:mb-10">
                        <AccountSectionBtn title={'Dashbord'} icon={'/setting-logo.svg'} onClick={ () => setAccountSection('dashboard')} isSelect={accountSection === 'dashboard'} />
                        <AccountSectionBtn title={'Order list'} icon={'/setting-logo.svg'} onClick={ () => setAccountSection('order-list')} isSelect={accountSection === 'order-list'}/>
                        <AccountSectionBtn title={'Track your orders'} icon={'/shop-logo.svg'} onClick={ () => setAccountSection('track-orders')} isSelect={accountSection === 'track-orders'}/>
                        <AccountSectionBtn title={'My address'} icon={'/location-logo.svg'} onClick={ () => setAccountSection('my-address')} isSelect={accountSection === 'my-address'}/>
                        <AccountSectionBtn title={'Account details'} icon={'/account-logo.svg'} onClick={ () => setAccountSection('account-detail')} isSelect={accountSection === 'account-detail'}/>
                        <AccountSectionBtn title={'Log out'} icon={'/order-logo.svg'} onClick={() => openModal('ConfirmLogout')}/>
                    </div>
                </div>
                <div>
                    {/*sections*/}
                    {
                        accountSection === 'dashboard' ?
                            <div>This is dashboard</div>
                            : accountSection === 'order-list' ?
                                <YourOrders order={order} />
                                : accountSection === 'track-orders' ?
                                    <div>This is track-orders</div>
                                    : accountSection === 'my-address' ?
                                        <div>This is my-address</div>
                                        : accountSection === 'account-detail' ?
                                            <AccountDetails />
                                            : null

                    }
                </div>
            </div>



        </Section>
    );
};