import { Link, Outlet } from "react-router-dom";
import "./index.css"

function LayoutDefault() {
    return (
        <>
            <div className="layout_default">
                <header className="layout-default_header">
                    <div className="layout-default_logo" >
                        <Link to="/" >Logo</Link>
                    </div>
                    <div className="layout-default_cart">
                        <Link to="/cart">Giỏ hàng</Link>
                    </div>
                </header >
                <main className="layout-default_main">
                    <Outlet />
                </main>
                <footer className="layout-default_footer">
                    Copyright @ 2003 by 28teach
                </footer>
            </div >
        </>
    )
}
export default LayoutDefault;