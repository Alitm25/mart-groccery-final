import {MiniProductCard} from "@/components";
import {ProductsType} from "@/types/api/Products";
import {EntityType} from "@/types";

interface Props {
    title: string;
    data: Array<EntityType<ProductsType>>;
};

export function ProductVerticalList({title, data}: Props) {
    return (
        <>
            <h3 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300 mb-[30px]">{title}</h3>
            <div className="flex flex-col gap-6">
                {
                    data &&
                    data.map( (item :EntityType<ProductsType>, index :number) => {
                        return (
                            <MiniProductCard key={index} data={item} />
                        )
                    })
                }
            </div>
        </>
    );
};