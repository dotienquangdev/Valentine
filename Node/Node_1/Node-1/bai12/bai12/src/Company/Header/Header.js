import Menu from "../Menu/Menu";

function Header() {
    const { menus } = props;
    return (
        <>
            <div>Logo</div>
            <Menu />
        </>
    )
}
export default Header;