import { Link, Outlet } from "react-router-dom";
import "./index.css"
import CartMini from "../../compoment/CartMini";
{/* <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
/> */}

function LayoutDefault() {
    return (
        <>
            <div className="layout_default">
                <header className="layout-default_header">
                    <div className="layout-default_logo">
                        <Link to="/">Logo</Link>
                    </div>

                    <div className="layout-default_cart">
                        <CartMini />
                    </div>
                </header>

                <main className="layout-default_main">
                    <Outlet />
                </main>

                <footer className="layout-default_footer">
                    Copyright @ 2003 by 28teach
                </footer>
            </div>
        </>
    )
}
export default LayoutDefault;