import {ImageType} from "@/types/api/Image";
import {EntityType} from "@/types";

export interface CategoryType {
    title: string
    description: any
    slug: string
    is_featured: boolean
    icon_name: any
    color?: string
    product_count?: number
    link?: string
    thumbnail: {
        data?: EntityType<ImageType>
    }
}