import {Order} from "@/stores/OrderContext";


interface Props {
    order: Order[];
};

export function YourOrders({order}: Props) {
    return (
        <div className="flex flex-col items-start w-full">
            <div className="text-heading3 font-quicksand text-[#253D4E] mb-6">Your Orders</div>

            <div className="w-full max-h-[500px] overflow-auto">
                {/* Header */}
                {/*<div className="min-w-[600px] bg-[#F5F5F5] rounded-xl px-6 py-4 flex flex-row items-center justify-between text-left">*/}
                {/*    <p className="text-heading6 font-quicksand text-[#253D4E]">Order ID</p>*/}
                {/*    <p className="text-heading6 font-quicksand text-[#253D4E]">Date</p>*/}
                {/*    <p className="text-heading6 font-quicksand text-[#253D4E]">Status</p>*/}
                {/*    <p className="text-heading6 font-quicksand text-[#253D4E]">Total</p>*/}
                {/*    <p className="text-heading6 font-quicksand text-[#253D4E]">Actions</p>*/}
                {/*</div>*/}
                <table>
                    <th>
                        <tr className={'min-w-[600px] bg-[#F5F5F5] rounded-xl px-6 py-4 flex flex-row items-center justify-between text-left'}>
                            <td className={'text-heading6 font-quicksand text-[#253D4E]'}>Order ID</td>
                            <td className={'text-heading6 font-quicksand text-[#253D4E]'}>Date</td>
                            <td className={'text-heading6 font-quicksand text-[#253D4E]'}>Status</td>
                            <td className={'text-heading6 font-quicksand text-[#253D4E]'}>Total</td>
                            <td className={'text-heading6 font-quicksand text-[#253D4E]'}>Actions</td>
                        </tr>
                    </th>
                    <tbody>
                        {order.map(order => (
                            <tr key={order.id} className={'min-w-[600px] px-6 py-4 flex flex-row items-center justify-between text-left'}>
                                <td className="text-medium font-lato text-[#7E7E7E]">#{order.id}</td>
                                <td className="text-medium font-lato text-[#7E7E7E]">{order.date}</td>
                                <td className={`text-medium font-lato ${order.status === 'processing' ? 'text-[#FDC040]' : 'text-[#81B13D]'}`}>
                                    {order.status}
                                </td>
                                <td className="text-medium font-lato text-[#7E7E7E]">${order.total} for {order.items.length} item</td>
                                <button className="text-medium font-lato text-[#3BB77E]">View</button>
                            </tr>


                        ))}
                    </tbody>
                </table>

            </div>
        </div>

    );
};