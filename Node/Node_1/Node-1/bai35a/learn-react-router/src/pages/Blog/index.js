import { Outlet } from "react-router-dom";
import "./style.css"
function Blog() {
    return (
        <>
            <h1>
                <h3>Trang tin tuwcs</h3>
            </h1>
            {/* <ul>
                <li>
                    <Link className="cart" to="/cart1">Cart1</Link>
                    <Link className="cart" to="/cart2">Cart2</Link>
                    <Link className="cart" to="/cart3">Cart3</Link>
                    <Link className="cart" to="/cart4">Cart4</Link>
                </li>

            </ul> */}

            <ul>
                <Outlet />
            </ul>
        </>
    )
}

export default Blog;