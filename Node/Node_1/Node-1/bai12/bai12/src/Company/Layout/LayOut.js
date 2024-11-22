import Header from "../Header";
import { createContext } from "react";
export const MenuContext = createContext();

function LayOut() {


    const menus = [
        "trang chu",
        "tin tuc",
        "gioi thieu",
        "lien he"
    ]
    return (
        <>
            <MenuContext.Provider value={menus}>
                <Header />
            </MenuContext.Provider>
            <div>Main</div>
            <div>Footer</div>
        </>
    )
}
export default LayOut;