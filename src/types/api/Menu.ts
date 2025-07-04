import {MenuItemsType} from "@/types/api/MenuItem";
import {PopulateType} from "@/types/api/Response";

export interface MenuType {
    title: string
    position: string
    menu_items: PopulateType<MenuItemsType>
}