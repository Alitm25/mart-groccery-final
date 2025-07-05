import {useQuery} from "@tanstack/react-query";
import {getMenuApiCall} from "@/api/Menu";
import {EntityType, MenuItemsType, MenuType, PopulateType} from "@/types";

export function useMenu({position} : {position : string}) {
    /// Load the menu api
    const {data: menuData} = useQuery({queryKey:[getMenuApiCall.name], queryFn: () => getMenuApiCall()});

    // fill the menu items
    let menuItems : null | PopulateType<MenuItemsType> = null;

    if (menuData) {
        const findMenu = menuData.data.filter( (item :EntityType<MenuType>) => item.attributes.position === position);

        if (findMenu.length > 0) {
            menuItems = findMenu[0].attributes.menu_items;
            /// sort the menu items
            menuItems.data.sort( (a :EntityType<MenuItemsType>, b :EntityType<MenuItemsType>) => {
                if (a.attributes.rank < b.attributes.rank) {
                    return -1;
                }

                if (a.attributes.rank > b.attributes.rank) {
                    return 1;
                }

                return 0;
            })
        }
    }
    return {data: menuItems}
}