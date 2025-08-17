import {Order} from "@/stores/OrderContext";


interface Props {
    order: Order[];
};

export function YourOrders({order}: Props) {
    return (
        <div className="flex flex-col items-start">
            <div className="text-heading3 font-quickSand text-blue-300 mb-[22px]">Your Orders</div>
            {
                order &&
                order.map( (item) => {
                    return (
                        <div className="flex flex-wrap justify-between items-start gap-20 rounded-2xl mb-[30px] px-[30px]">
                            <div className="text-medium text-gray-500">#{item.id}</div>
                            <div className="text-medium text-gray-500">{item.date}</div>
                            <div className="text-medium text-green-300">{item.status}</div>
                            <div className="text-medium text-gray-500">${item.total} for {order.length} item</div>
                            <button className="text-medium text-green-200">View</button>
                        </div>
                    )
                })

            }

        </div>
    );
};