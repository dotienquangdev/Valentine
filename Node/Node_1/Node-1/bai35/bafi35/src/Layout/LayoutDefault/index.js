import { Link, NavLink, Outlet } from "react-router-dom";
import "./index.css"
import GoBack from "../../pages/compoment/Goback";


function LayoutDefault() {
    const navLinkActive = (e) => {
        return e.isActive ? "menu_link menu_link-active" : "menu_link";
    }
    return (
        <>
            <div className="layout_default">
                <header className="layout-default_header">
                    <div className="layout-default_logo">Logo</div>
                    <div className="layout-default_menu">
                        <ul>
                            <li>
                                <NavLink className={navLinkActive} to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={navLinkActive} to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink className={navLinkActive} to="/contact">Contact</NavLink>
                            </li>

                            <li className="">
                                <NavLink className={navLinkActive} to="/blog">Blog</NavLink>


                                <ul className="menu_sub">
                                    <li>
                                        <NavLink to={"/blog/detail"} className={navLinkActive}>
                                            detail
                                        </NavLink>
                                    </li>
                                </ul>
                                <ul className="menu_sub">
                                    <li>
                                        <NavLink to={"/blog/news"} className={navLinkActive}>
                                            new Blog
                                        </NavLink>
                                    </li>
                                </ul>

                                <ul className="menu_sub">
                                    <li>
                                        <NavLink to={"/blog/related"} className={navLinkActive}>
                                            related Blog
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink className={navLinkActive} to="/InforUser">
                                    InforUser
                                </NavLink>
                            </li>
                            <GoBack />
                        </ul>
                    </div>
                </header>

                <main className="layout-default_main">
                    <Outlet />
                </main>

                <footer className="layout-default_footer">
                    {/* <Outlet></Outlet> */}
                    Copyright @ 2003 by 28teach
                </footer>
            </div>
        </>
    )
}
export default LayoutDefault;