import {CheckOutForm, ImageView} from "@/components";
import {useBasketData} from "@/hooks/useBasketData";
import {useQuery} from "@tanstack/react-query";
import {getAllProductsApiCall} from "@/api/Products";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import {useOrder} from "@/stores/OrderContext";
import calculateTotal from "@/utils/calculateTotal";
import {useEffect, useState} from "react";
import {UserType} from "@/types/api/Auth";
import {useModal} from "@/stores/ModalContext";

interface formData {
    firstName: string,
    lastName: string,
    address: string,
    address2: string,
    state: Array<string>,
    city: string,
    postCode: string,
    phone: string,
    email: string,
    company?: string,
    additional?: string,

};

export default function Index() {
    const { basketItems, clearBasket }                      = useBasketData();
    const { register, handleSubmit, formState: {errors} }   = useForm<formData>()
    const router                                 = useRouter();
    const { addOrder }                                      = useOrder();
    const { openModal }                                     = useModal();
    const [user, setUser]                                   = useState<UserType | null>(null);

    useEffect(() => {
        const user = window.localStorage.getItem('user');

        if (user)
            setUser(JSON.parse(user) as UserType);
    }, []);

    const productIds = basketItems.map((item) => item.product.data.id);

    const { data: basketProductsData } = useQuery({
        queryKey: ['basketProducts', productIds],
        queryFn: () =>
            getAllProductsApiCall({
                filters: { id: { $in: productIds } },
                populate: ['thumbnail'],
            }),
        enabled: productIds.length > 0,
    });
    const basketProducts = basketProductsData?.data || [];

    const date = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })

    const onSubmitHandler = (data :formData) => {
        if (!user) {
            openModal('Register');
            return
        } else {

            const basketSnapShot = [...basketItems];

            const newOrder = {
                id: Math.floor(Math.random() * 1000),
                date: date,
                status: 'processing',
                total: calculateTotal(basketSnapShot),
                items: basketSnapShot
            }
            addOrder(newOrder);
            router.push('/');
            toast.success('Your order was successfully completed. Thanks for your purchase. You can observe your orders process in your account page');
            clearBasket();
        }
    }

    return (
        <div className="container m-auto">
                <h1 className="text-heading2 font-quickSand">Checkout</h1>
                <div className="text-heading6 text-gray-500 mt-4">
                    There are
                    <span className="text-green-200 mx-1">{basketItems.length}</span>
                    products in your cart
                </div>
                <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1.5fr] xl:grid-cols-[2fr_1fr] gap-6 mt-12">
                    <form id="checkout-form" onSubmit={handleSubmit(onSubmitHandler)}>
                        <CheckOutForm options={['Iran', 'United State']} register={register} errors={errors}/>
                    </form>
                    <div className="flex flex-col gap-[70px]">
                        <div className="bg-white flex flex-col gap-[30px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 max-h-[560px] overflow-y-auto">
                            <div className="flex justify-between items-center w-full">
                                <div className="font-quickSand text-heading5 md:text-heading4">Your Orders</div>
                                <div className="font-quickSand text-heading-sm md:text-heading6 text-gray-400">Subtotal</div>
                            </div>
                            <div className="h-[1px] w-full bg-gray-200"></div>
                            {
                                basketItems.map( (item) => {
                                    const product = basketProducts.find(
                                        (p) => p.id === item.product.data.id
                                    );

                                    if (!product) return null;


                                    return (
                                        <div className="grid grid-cols-[minmax(0,_2fr)_minmax(0,_4fr)_minmax(0,_1fr)_minmax(0,_1fr)] gap-7 w-full">
                                            <div className="flex justify-center items-center">
                                                <ImageView alt={'product-image'} width={220} height={154} src={product.attributes.thumbnail?.data?.attributes.url}/>
                                            </div>
                                            <div className="font-quickSand text-heading-sm md:text-heading6 flex justify-center items-center py-[22px]">{product.attributes.title}</div>
                                            <div className="font-lato text-heading5 md:text-heading4 text-gray-400 flex flex-row justify-center items-center">× {item.quantity}</div>
                                            <div className="font-lato text-heading-sm md:text-heading4 text-green-200 flex justify-center items-center">${product.attributes.sell_price ? (product.attributes.sell_price * item.quantity) : (product.attributes.price * item.quantity)}</div>
                                        </div>
                                    )

                                })
                            }
                        </div>
                        <div>
                            <div className="font-quickSand text-heading4">Payment</div>
                            <div className="flex flex-col items-start gap-4 mt-7">
                                <div className="flex items-center justify-start gap-2">
                                    <input type="radio" name="payment-method" id="direct-transfer"
                                           value="direct-transfer" className="accent-green-200 w-4 h-4" checked/>
                                    <label className="font-lato text-medium text-gray-500" htmlFor="direct-transfer">Direct
                                        bank transfer</label>
                                </div>
                                <div className="flex items-center justify-start gap-2">
                                    <input type="radio" name="payment-method" id="on-delivery" value="direct-transfer"
                                           className="accent-green-200 w-4 h-4"/>
                                    <label className="font-lato text-medium text-gray-500" htmlFor="on-delivery">Cash on
                                        delivery</label>
                                </div>
                                <ImageView alt={'payment method'} width={307} height={21} src={'/assets/images/payment-method%202.png'}/>
                            </div>
                        </div>
                        <button type="submit"
                            onClick={() => {
                                const form = document.querySelector("#checkout-form") as HTMLFormElement;
                                form?.requestSubmit();
                        }
                        } className="mt-6 px-[50px] py-4 bg-green-200 hover:bg-yellow-100 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5 transition-all">
                            <div className="font-quickSand text-heading6 text-white">Place an Order</div>
                            <ImageView alt={'payment method'} width={16} height={16} src={'/order-logo.svg'}/>
                        </button>
                    </div>
                </div>
        </div>

    );
};