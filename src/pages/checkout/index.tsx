import {IconBox} from "@/components";

interface Props {

};

export default function Index({}: Props) {
    return (
        <div className="container m-auto">
            <form className="font-lato">
                <h1 className="text-heading2 font-quickSand">Checkout</h1>
                <div className="text-heading6 text-gray-500 mt-4">There are <span
                    className="text-green-200">3</span> products in your cart
                </div>
                <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1.5fr] xl:grid-cols-[2fr_1fr] gap-6 mt-12">
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
                        <div
                            className="lg:col-span-2 2xl:col-span-1 text-medium text-gray-500 bg-white flex gap-[7px] py-[13px] items-center justify-center shadow-c rounded-[10px] border-[1px] border-gray-200">
                            <IconBox icon={'fi-rs-user'} />
                            <img src="../assets/icons/fi-rs-user.svg" width="16" height="16" alt="unanimous user"/>
                            <div>Already have an account?</div>
                            <a className="text-green-200" href="#">Click here to login</a>
                        </div>
                        <div
                            className="lg:col-span-2 2xl:col-span-1 focus-within:border-green-200 bg-white text-medium text-gray-500 flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 min-h-[52px]">
                            <IconBox icon={'fi-rs-user'} />
                            <div className="flex gap-[7px] ml-[22px] flex-1">
                                <img src="../assets/icons/fi-rs-label%201.svg" width="16" height="16"
                                     alt="unanimous user"/>
                                <label htmlFor="coupon-code" className="hidden"></label>
                                <input name="coupon-code" id="coupon-code" type="text" placeholder="Coupon Code"
                                       className="w-full placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                            </div>
                            <button
                                className="font-quickSand text-heading6 bg-blue-300 h-full min-h-[52px] rounded-r-[10px] text-white px-7">Apply
                                Coupon
                            </button>
                        </div>
                        <div className="font-quickSand text-heading4 col-span-2">Billing Details</div>
                        <div
                            className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                            <label htmlFor="fist-name" className="hidden"></label>
                            <input name="fist-name" id="fist-name" type="text" placeholder="First name*" required
                                   className="autofill:bg-red w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                        </div>
                        <div
                            className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                            <label htmlFor="last-name" className="hidden"></label>
                            <input name="last-name" id="last-name" type="text" placeholder="Last name*" required
                                   className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                        </div>
                        <div
                            className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                            <label htmlFor="address" className="hidden"></label>
                            <input name="address" id="address" type="text" placeholder="Address*" required
                                   className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                        </div>
                        <div
                            className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                            <label htmlFor="address-line2" className="hidden"></label>
                            <input name="address-line2" id="address-line2" type="text" placeholder="Address line 2*"
                                   required
                                   className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                        </div>
                        <div
                            className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                            <label htmlFor="country" className="hidden"></label>
                            {/*when index 0 is select bg-gray-400 must be set*/}
                            <select name="country" id="country" required
                                    className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium border-none">
                                <option>State / Country*</option>
                                <option>Iran</option>
                                <option>United State</option>
                            </select>
                        </div>
                        <div
                            className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                            <label htmlFor="city" className="hidden"></label>
                            <input name="city" id="city" type="text" placeholder="City / Town" required
                                   className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                        </div>
                        <div
                            className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                            <label htmlFor="postal-zip" className="hidden"></label>
                            <input name="postal-zip" id="postal-zip" type="text" placeholder="Postcode / Zip" required
                                   className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                        </div>
                        <div
                            className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                            <label htmlFor="phone-number" className="hidden"></label>
                            <input name="phone-number" id="phone-number" type="tel" placeholder="Phone number" required
                                   className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                        </div>
                        <div
                            className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                            <label htmlFor="email" className="hidden"></label>
                            <input name="email" id="email" type="email" placeholder="Email" required
                                   className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                        </div>
                        <div
                            className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                            <label htmlFor="company" className="hidden"></label>
                            <input name="company" id="company" type="text" placeholder="Company"
                                   className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                        </div>
                        <div
                            className="col-span-2 focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 min-h-[210px]">
                            <label htmlFor="information" className="hidden"></label>
                            <textarea name="information" id="information" placeholder="Additional information"
                                      className="resize-none w-full h-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"></textarea>
                        </div>
                        <div className="col-span-2 bg-white flex gap-[7px] items-center justify-start text-gray-500">
                            <input name="create-account" id="create-account" type="checkbox"
                                   className="accent-green-200 h-6"/>
                            <label htmlFor="create-account">Create an account ?</label>
                        </div>
                        <div className="col-span-2 bg-white flex gap-[7px] items-center justify-start text-gray-500">
                            <input name="diff-address" id="diff-address" type="checkbox"
                                   className="accent-green-200 h-6"/>
                            <label htmlFor="diff-address">Ship to a different address?</label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[70px]">
                        <div
                            className="bg-white flex flex-col gap-[30px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 max-h-[560px] overflow-y-auto">
                            <div className="flex justify-between items-center w-full">
                                <div className="font-quickSand text-heading4">Your Orders</div>
                                <div className="font-quickSand text-heading6 text-gray-400">Subtotal</div>
                            </div>
                            <div className="h-[1px] w-full bg-gray-200"></div>
                            <div
                                className="grid grid-cols-[minmax(0,_2fr)_minmax(0,_4fr)_minmax(0,_1fr)_minmax(0,_1fr)] gap-7 w-full">
                                <div className="flex justify-center items-center">
                                    <img src="../assets/images/3%20389454.png" alt="orange" width="220" height="154"/>
                                </div>
                                <div
                                    className="font-quickSand text-heading6 flex justify-center items-center py-[22px]">Field
                                    Roast Chao Cheese Creamy Original
                                </div>
                                <div
                                    className="font-lato text-heading4 text-gray-400 flex justify-center items-center">×
                                    1
                                </div>
                                <div
                                    className="font-lato text-heading4 text-green-200 flex justify-center items-center">$2.51
                                </div>
                            </div>
                            <div
                                className="grid grid-cols-[minmax(0,_2fr)_minmax(0,_4fr)_minmax(0,_1fr)_minmax(0,_1fr)] gap-7 w-full">
                                <div className="flex justify-center items-center">
                                    <img src="../assets/images/7%201.png" alt="orange" width="220" height="154"/>
                                </div>
                                <div
                                    className="font-quickSand text-heading6 flex justify-center items-center py-[22px]">Seeds
                                    of Change Organic Quinoa, Brown, & Red Rice
                                </div>
                                <div
                                    className="font-lato text-heading4 text-gray-400 flex justify-center items-center">×
                                    2
                                </div>
                                <div
                                    className="font-lato text-heading4 text-green-200 flex justify-center items-center">$5.60
                                </div>
                            </div>
                            <div
                                className="grid grid-cols-[minmax(0,_2fr)_minmax(0,_4fr)_minmax(0,_1fr)_minmax(0,_1fr)] gap-7 w-full">
                                <div className="flex justify-center items-center">
                                    <img src="../assets/images/8%201.png" alt="orange" width="220" height="154"/>
                                </div>
                                <div
                                    className="font-quickSand text-heading-sm flex justify-center items-center py-[22px]">Angie’s
                                    Boomchickapop Sweet & Salty Kettle Corn
                                </div>
                                <div
                                    className="font-lato text-heading4 text-gray-400 flex justify-center items-center">×
                                    1
                                </div>
                                <div
                                    className="font-lato text-heading4 text-green-200 flex justify-center items-center">$7.00
                                </div>
                            </div>
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
                                <img src="../assets/images/payment-method%202.png" alt="payment method" width="307"
                                     height="21"/>
                            </div>
                        </div>
                        <button type="submit"
                                className="mt-6 px-[50px] py-2 bg-green-200 hover:bg-yellow-100 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                            <div className="font-quickSand text-heading6 text-white">Place an Order</div>
                            <img src="../assets/icons/fi-rs-sign-out%201.svg" alt="arrow right" width="16" height="16"/>
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );
};