import NavbarBtn from "./NavbarBtn";
import "./header.css";


function Header() {
    return (
        <div className="header-container">
            <a className="logo" href="/"></a>
            <div className="navbar-btns">
                <NavbarBtn>Seating</NavbarBtn>
                <NavbarBtn>Living Room</NavbarBtn>
                <NavbarBtn>Outdoor</NavbarBtn>
                <NavbarBtn>Bedroom</NavbarBtn>
                <NavbarBtn>Storage</NavbarBtn>
            </div>
            <button className="navbar-btn-mobile">
                <img src="/public/menu.svg" />
            </button>
        </div>
    )
}

export default Header;