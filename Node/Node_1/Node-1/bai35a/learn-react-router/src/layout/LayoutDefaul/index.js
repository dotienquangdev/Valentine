import { NavLink, Outlet } from "react-router-dom";
import "./style.scss"


function LayoutDefault() {

    const navLinkActive = (e) => {
        console.log(e);
        return e.isActive ? "menu_link menu_link--active" : "menu_link";
    }

    return (
        <>
            <div className="layout-default">
                <header className="layout-default_header">
                    <li >
                        <NavLink to="/" className={navLinkActive}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={navLinkActive}><div className="layout-default_logo">About</div></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={navLinkActive}><div className="layout-default_menu">Menu</div></NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={navLinkActive}><div className="layout-default_blog">Blog</div></NavLink>
                        <ul className="blog0">
                            <li>
                                <NavLink to="/blog" className="blog"><div className="layout-default_blog1">Blog1</div></NavLink>
                                <NavLink to="/blog/cart1" className="blog"><div className="layout-default_blog1">Blog1</div></NavLink>
                                <NavLink to="/blog/cart2" className="blog"><div className="layout-default_blog1">Blog2</div></NavLink>
                                <NavLink to="/blog/cart3" className="blog"><div className="layout-default_blog1">Blog3</div></NavLink>
                                <NavLink to="/blog/cart4" className="blog"><div className="layout-default_blog1">Blog4</div></NavLink>

                            </li>
                        </ul>
                    </li>
                </header>
                <main className="layout-default_main">
                    <Outlet />
                </main>
                <footer className="layout-default_footer">
                    Copyright @ 2023 By 28 tteach
                </footer>
            </div>
        </>
    )
}
export default LayoutDefault;