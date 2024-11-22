import { country } from "../../data/country";
import "./Country.css"
function Coutry() {
    console.log(country)

    return (
        <>
            <ul className="country">
                {(country || []).map((itemCountry) => (
                    <li className="country_item" key={itemCountry.id}>
                        <span className="country_text">{itemCountry.name}</span>
                        <ul className="country_sub country_sub_all">
                            {(itemCountry.city || []).map((itemCity) => (
                                <li className="country_sub_item country_sub_all" key={itemCity.id}>{itemCity.name}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Coutry;