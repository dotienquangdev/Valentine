import { useContext } from "react";
import { MenuContext } from "./LayOut";
function Menu() {
    const menus = useContext(MenuContext);
    // const { menus } = props;
    console.log(menus)
    return (
        <>
            <ul>
                {menus.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Menu;