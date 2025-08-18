import { Order } from "@/stores/OrderContext";

interface Props {
    order: Order[];
}

export function YourOrders({ order }: Props) {
    return (
        <div className="w-full max-h-[500px] overflow-y-auto">
            {/* horizontal scroll wrapper */}
            <div className="overflow-x-auto">
                <table className="min-w-[600px] w-full text-left border-collapse">
                    <thead>
                    <tr className="bg-[#F5F5F5]">
                        <th className="px-6 py-4 text-heading-sm lg:text-heading6 font-quicksand text-[#253D4E]">Order ID</th>
                        <th className="px-6 py-4 text-heading-sm lg:text-heading6 font-quicksand text-[#253D4E]">Date</th>
                        <th className="px-6 py-4 text-heading-sm lg:text-heading6font-quicksand text-[#253D4E]">Status</th>
                        <th className="px-6 py-4 text-heading-sm lg:text-heading6 font-quicksand text-[#253D4E]">Total</th>
                        <th className="px-6 py-4 text-heading-sm lg:text-heading6 font-quicksand text-[#253D4E]">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {order.map((order) => (
                        <tr key={order.id} className="border-b last:border-none hover:bg-gray-50">
                            <td className="px-4 py-2 lg:px-6 lg:py-4 text-sm lg:text-medium font-lato text-[#7E7E7E]">#{order.id}</td>
                            <td className="px-4 py-2 lg:px-6 lg:py-4 text-sm lg:text-medium font-lato text-[#7E7E7E]">{order.date}</td>
                            <td className={`px-4 py-2 lg:px-6 lg:py-4 text-sm lg:text-medium font-lato ${order.status === 'processing' ? 'text-[#FDC040]' : 'text-[#81B13D]'}`}>
                                {order.status}
                            </td>
                            <td className="px-4 py-2 lg:px-6 lg:py-4 text-sm lg:text-medium font-lato text-[#7E7E7E]">
                                ${order.total} for {order.items.length} item
                            </td>
                            <td className="px-4 py-2 lg:px-6 lg:py-4">
                                <button className="text-sm lg:text-medium font-lato text-[#3BB77E]">View</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
