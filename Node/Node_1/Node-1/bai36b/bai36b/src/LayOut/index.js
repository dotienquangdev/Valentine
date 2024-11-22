import "./layOut.css"
import HomeAll from "../Home";
import Topics from "../Body/topics";

function LayoutDefault() {
    return (

        <>
            <header className="layout-header">

                <div className="layout-logo">
                    Logo
                </div>

                <div className="layout-input">

                    <div className="layout-logIn">Dang nhap</div>
                    <div className="layout-logOut">Dang xuat</div>

                </div>
            </header>
            <menu>
                <Topics />
            </menu>

            <HomeAll />

            <footer className="layout-footer">
                Copyright @ 2003 by 28teach
            </footer>

        </>
    )
}

export default LayoutDefault;