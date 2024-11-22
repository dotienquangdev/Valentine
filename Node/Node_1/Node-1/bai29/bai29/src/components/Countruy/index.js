import { countruy } from "../../data/countruy";
import "./Countruy.css"

function Countruy() {
    console.log(countruy);
    // code mảng lồng nhau
    return (
        <>
            <ul className="countruy">
                {(countruy || []).map(itemCountruy => (
                    <li className="countruy_item" key={itemCountruy.id}>
                        <span className="countruy_text">{itemCountruy.name}</span>
                        <ul className="countruy_sub">
                            {/* {itemCountruy.city.map(itemCity => ( */}
                            {(itemCountruy.city || []).map(itemCity => (
                                <li className="countruy_sub-item" key={itemCity.id}>{itemCity.name}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Countruy;