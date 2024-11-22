import { Link, Outlet } from 'react-router-dom';
import './index.css'
import MenuSmall from './menuSmall';
function LayOutDefault() {
    return (
        <>
            <div className="layout_default">
                <header className="layout-default_header">
                    <div className="layout-default_logo">
                        <div className='home_menu'>
                            <h1>
                                <Link to="/">Tranng chu</Link>
                            </h1>

                            {/* <li>
                                <Link to="/about">HTML</Link>
                            </li>

                            <li>
                                <Link to="/cart">CSS</Link>
                            </li>
                            <li>
                                <Link to="/javaScript">JavaScript</Link>
                            </li>

                            <li>
                                <Link to="/nodeJS">NodeJS</Link>
                            </li>
                            <li>
                                <Link to="/java">Java</Link>
                            </li>

                            <li>
                                <Link to="/c">C++</Link>
                            </li> */}
                        </div>

                    </div>
                </header>

                <main className="layout-default_main">
                    <Outlet />
                    <div className="layout-default_cart">
                        <MenuSmall />
                    </div>
                </main>

                <footer className="layout-default_footer">
                    Cooyright @ 2024 28teach
                </footer>
            </div>


        </>
    )
}
export default LayOutDefault;