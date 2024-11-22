import { Link, Outlet } from 'react-router-dom';
import './menuSmall.css'
function MenuSmall() {
    return (
        <>
            <Link>
                <ul className='home_menu'>
                    <li>
                        <Link className="custom-link" to="/about" >HTML</Link>
                    </li>

                    <li>
                        <Link className="custom-link" to="/cart">CSS</Link>
                    </li>
                    <li>
                        <Link className="custom-link" to="/javaScript">JavaScript</Link>
                    </li>

                    <li>
                        <Link className="custom-link" to="/nodeJS">NodeJS</Link>
                    </li>
                    <li>
                        <Link className="custom-link" to="/java">Java</Link>
                    </li>

                    <li>
                        <Link className="custom-link" to="/c">C++</Link>
                    </li>
                </ul>
            </Link>
        </>
    )
}
export default MenuSmall;