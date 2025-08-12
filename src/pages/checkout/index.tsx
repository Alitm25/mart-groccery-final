import {CheckOutForm, IconBox} from "@/components";

interface Props {

};

export default function Index({}: Props) {
    return (
        <div className="container m-auto">
                <h1 className="text-heading2 font-quickSand">Checkout</h1>
                <div className="text-heading6 text-gray-500 mt-4">There are <span
                    className="text-green-200">3</span> products in your cart
                </div>
                <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1.5fr] xl:grid-cols-[2fr_1fr] gap-6 mt-12">
                    <CheckOutForm options={['Iran', 'United State']}/>
                    <div className="flex flex-col gap-[70px]">
                        <div className="bg-white flex flex-col gap-[30px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 max-h-[560px] overflow-y-auto">
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
        </div>

    );
};