import {IconBox, ImageView} from "@/components";
import {useBasketData} from "@/hooks/useBasketData";
import Link from "next/link";
import React from "react";
import {useQuery} from "@tanstack/react-query";
import {getAllProductsApiCall} from "@/api/Products";
import calculateTotal from "@/utils/calculateTotal";
import {useForm} from "react-hook-form";

type FormValues = {
    selectedProducts: string[]
}

export default function Index({}) {
    // basket Item variables
    const { updateProduct, basketItems, deleteItem, clearBasket } = useBasketData();
    const productIds = basketItems.map((item) => item.product.data.id);

    /// basket item products api call
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
    const total = calculateTotal(basketItems);


    // RHF dependencies
    const {register, watch, setValue} = useForm<FormValues>({
        defaultValues: { selectedProducts: [] }
    })
    const selectedProducts = watch('selectedProducts');
    // selected row boolean variable
    const rowSelected = selectedProducts.includes(String(productIds));


    return (
        basketItems.length < 1 ?
            <div className={'flex flex-col mx-auto text-center items-center justify-center gap-y-6'}>
                <h1 className={'text-heading3 lg:text-heading2 xl:text-heading1 2xl:text-display2 text-blue-300'}>
                    Your basket is Empty!
                </h1>
                <p className={'font-lato text-heading-sm md:text-heading-5 text-[#7E7E7E] w-full font-normal cursor-default'}>In order to continue, return to the homepage and add some products to your basket</p>
                <Link href={'/'}>
                    <button type="submit" className="mt-6 px-[18px] py-4 bg-yellow-100 hover:bg-yellow-100 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                        <IconBox icon={'icon-arrow-small-right rotate-180'} size={24}/>
                        <span className="font-quickSand text-heading6 text-white">Continue Shopping</span>
                    </button>
                </Link>
            </div>
        :
        <div className="container m-auto">
                <h1 className="text-heading2 font-quickSand">Your Cart</h1>
                <div className="text-heading6 text-gray-500 mt-4">There are <span className="text-green-200">{basketItems.length}</span> products in your cart</div>
                <div className={`flex flex-col lg:grid lg:grid-cols-[2fr_1.5fr] xl:grid-cols-[2fr_1fr] gap-6 mt-12
                ${selectedProducts.includes( String(productIds) ) ? "bg-green-50 border border-green-200" : ""}`}>
                    {/*basket items form*/}
                    <div>
                        <div className="flex items-center justify-end pb-[20px]">
                            <button type={'button'} onClick={clearBasket} className="flex items-center gap-x-[2px] font-quickSand text-heading6 text-[#B6B6B6]">
                                <ImageView alt={'trash-bin-icon'} width={16} height={17} src={'/assets/images/trash-bin.svg'} />
                                Clear Cart
                            </button>
                        </div>
                        <div className="w-full text-center">
                            <div className="max-h-[500px] overflow-auto">
                                <div className="min-w-[500px] flex flex-col gap-[30px]">
                                    <div className="text-xsmall font-quickSand md:text-heading6 bg-gray-100 rounded-[15px] h-[58px] w-full grid grid-cols-[minmax(0,_0.5fr)_minmax(0,_2fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)]">
                                        <div className="flex justify-center items-center">
                                            <label htmlFor="all-checkbox" className="hidden"></label>
                                            <input type="checkbox" name="all-checkbox"  className="accent-green-200 w-3 h-3 md:w-4 md:h-4"
                                            onChange={ (e) => {
                                                if (e.target.checked) {
                                                    setValue('selectedProducts', basketItems.map( (item) => String(item.product.data.id)));
                                                } else {
                                                    setValue('selectedProducts', []);
                                                }
                                            }}
                                           checked={
                                               basketItems.length > 0 &&
                                               selectedProducts?.length === basketItems.length
                                           }
                                            />
                                        </div>
                                        <div className="flex justify-center items-center">Products</div>
                                        <div className="flex justify-center items-center">Unit Price</div>
                                        <div className="flex justify-center items-center">Quantity</div>
                                        <div className="flex justify-center items-center">Subtotal</div>
                                        <div className="flex justify-center items-center">Remove</div>
                                    </div>
                                    {
                                        basketItems.map( (item) => {
                                            const product = basketProducts.find(
                                                (p) => p.id === item.product.data.id
                                            );


                                            if (!product) return null;

                                            return (
                                                <div className={`font-quickSand text-xsmall md:text-heading6 w-full grid grid-cols-[minmax(0,_0.5fr)_minmax(0,_2fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)]`}>
                                                    {/*input box*/}
                                                    <div className="flex justify-center items-center">
                                                        <label htmlFor="chbox1" className="hidden"></label>
                                                        <input type="checkbox" {...register('selectedProducts')} value={item.product.data.id}
                                                               className="accent-green-200 w-3 h-3 md:w-4 md:h-4"/>
                                                    </div>
                                                    {/*image box*/}
                                                    <div className="flex flex-col xl:flex-row items-center justify-between gap-4 text-center lg:text-left">
                                                        <ImageView alt={'products-image'} width={91} height={73} src={product.attributes.thumbnail?.data?.attributes.url} className={'border border-[#E5E5E5] rounded-lg p-5'}/>
                                                        <div className="font-quickSand text-heading-sm lg:text-heading6  text-[#253D4E]">{product.attributes.title}</div>
                                                    </div>
                                                    {/*price box*/}
                                                    <div className="flex justify-center items-center">
                                                        <div className="font-quickSand text-xsmall md:text-heading4 text-gray-400">{product.attributes.sell_price ? product.attributes.sell_price :  product.attributes.price}$</div>
                                                    </div>
                                                    {/*quantity button*/}
                                                    <div className="flex justify-center items-center">
                                                        <div className="border-2 font-quicksand font-bold rounded-lg text-[#B6B6B6] border-[#B6B6B6] hover:border-[#3BB77E] hover:text-[#3BB77E] p-[7px] w-16 md:w-28 flex flex-row-reverse justify-evenly items-center transition-all">
                                                            <div className="flex flex-col justify-between items-center">
                                                                <IconBox icon={'up icon-angle-small-up cursor-pointer'} size={10} onClick={ () => updateProduct(product?.id, 'increase')}/>
                                                                <IconBox icon={'down icon-angle-small-down cursor-pointer'} size={10} onClick={ () => updateProduct(product?.id, 'decrease')}/>
                                                            </div>
                                                            {item.quantity}
                                                        </div>
                                                    </div>
                                                    {/*subtotal price box*/}
                                                    <div className="flex justify-center items-center">
                                                        <div className="font-quickSand text-xsmall md:text-heading4 text-green-200">${product.attributes.sell_price ? (product.attributes.sell_price * item.quantity) : (product.attributes.price * item.quantity)}
                                                        </div>
                                                    </div>
                                                    {/*remove button*/}
                                                    <button type={'button'} className="flex justify-center items-center" onClick={ () => deleteItem(product?.id)}>
                                                        <ImageView alt={'remove-item-icon'} width={25} height={25} src={'/assets/images/remove-item.svg'} />
                                                    </button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col gap-[30px] mt-[26px]">
                                <div className="h-[1px] w-full bg-gray-200"></div>
                                <div className="flex flex-col lg:flex-row justify-between items-center">
                                    <Link href={'/'}>
                                        <button type="submit" className="mt-6 px-[18px] py-4 bg-yellow-100 hover:bg-yellow-100 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                                            <IconBox icon={'icon-arrow-small-right rotate-180'} size={24}/>
                                            <span className="font-quickSand text-heading6 text-white">Continue Shopping</span>
                                        </button>
                                    </Link>
                                    <button type="submit" className="mt-6 px-[18px] py-4 bg-green-200 hover:bg-yellow-100 rounded cursor-pointer inline-flex max-w-max items-center gap-2.5 transition-all">
                                        <ImageView alt={'refresh-icon'} width={17} height={17} src={'/assets/images/refresh-icon.svg'} />
                                        <div className="font-quickSand text-heading6 text-white">Update Cart</div>
                                    </button>
                                </div>
                                <div className="flex flex-col xl:grid xl:grid-cols-[minmax(0,_1.5fr)_minmax(0,_1fr)] gap-[45px] text-left">
                                    <div
                                        className="bg-white flex flex-col gap-[30px] md:gap-[14px] items-start justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 max-h-[560px] overflow-y-auto">
                                        <div className="font-quickSand text-heading4">Calculate Shipping</div>
                                        <div className="flex justify-start items-center gap-4">
                                            <span className="font-lato text-medium text-gray-400">Flat rate:</span>
                                            <span className="font-quickSand text-heading6 text-green-200">5%</span>
                                        </div>
                                        <div className="w-full focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                                            <label htmlFor="country" className="hidden"></label>
                                            {/*when index 0 is select bg-gray-400 must be set*/}
                                            <select name="country" id="country" className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium border-none">
                                                <option>State / Country</option>
                                                <option>Iran</option>
                                                <option>United State</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-[30px]">
                                            <div
                                                className="w-full md:w-auto focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                                                <label htmlFor="city" className="hidden"></label>
                                                <input name="city" id="city" type="text" placeholder="City / Town"
                                                       className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                                            </div>
                                            <div
                                                className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 w-full">
                                                <label htmlFor="postal-zip" className="hidden"></label>
                                                <input name="postal-zip" id="postal-zip" type="text"
                                                       placeholder="Postcode / Zip"
                                                       className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[30px] items-start justify-center">
                                        <div className="font-quickSand text-heading4">Apply Coupon</div>
                                        <div className="font-lato text-medium text-gray-400">Using A Promo Code?</div>
                                        <div
                                            className="lg:col-span-2 2xl:col-span-1 focus-within:border-green-200 bg-white text-medium text-gray-500 flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 w-full">
                                            <div className="flex gap-[7px] ml-[22px] flex-1 w-full">
                                                <ImageView alt={'coupon-icon'} width={16} height={16} src={'/assets/images/coupon-icon.svg'}/>
                                                <label htmlFor="coupon-code" className="hidden"></label>
                                                <input name="coupon-code" id="coupon-code" type="text"
                                                       placeholder="Coupon Code"
                                                       className="w-full placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                                            </div>
                                            <button className="font-quickSand text-heading6 bg-green-200 hover:bg-yellow-100 h-full min-h-[52px] rounded-r-[10px] text-white px-7 transition-all">Apply
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*total box*/}
                    <div className="flex flex-col gap-[70px]">
                        <div
                            className="bg-white flex flex-col gap-[30px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 max-h-[560px] overflow-y-auto">
                            <div className="flex justify-between items-center w-full">
                                <div className="font-quickSand text-heading6 text-gray-400">Subtotal</div>
                                <div className="font-quickSand text-heading4 text-green-200">${total}</div>
                            </div>
                            <div className="h-[1px] w-full bg-gray-200"></div>
                            <div className="grid grid-cols-2 gap-7 w-full">
                                <div
                                    className="font-lato text-heading6 text-gray-500 flex justify-start items-center">Shipping
                                </div>
                                <div className="font-lato text-heading5 flex justify-end items-center">Free Shipping
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-7 w-full">
                                <div
                                    className="font-lato text-heading6 text-gray-500 flex justify-start items-center">Estimate
                                    for
                                </div>
                                <div className="font-lato text-heading5 flex justify-end items-center">United Kingdom
                                </div>
                            </div>
                            <div className="h-[1px] w-full bg-gray-200"></div>
                            <div className="flex justify-between items-center w-full">
                                <div className="font-quickSand text-heading6 text-gray-400">Total</div>
                                <div className="font-quickSand text-heading4 text-green-200">${total}</div>
                            </div>
                            <Link href={'/checkout'} className={'w-full'}>
                                <button type="submit" className="w-full mt-6 py-4 bg-green-200 hover:bg-yellow-100 rounded-[3px] cursor-pointer flex items-center justify-center gap-2.5 transition-all">
                                    <div className="font-quickSand text-heading6 text-white">Proceed to Checkout</div>
                                    <IconBox icon={'icon-arrow-small-right'} size={24}/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>

    );
};