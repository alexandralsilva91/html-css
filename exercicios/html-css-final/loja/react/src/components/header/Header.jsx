import NavbarBtn from "./NavbarBtn";

function Header() {
    return (
        <div className="header-container">
            <a className="logo" href="#home"></a>
            <div className="navbar-btns">
                <NavbarBtn>Seating</NavbarBtn>
                <NavbarBtn>Living Room</NavbarBtn>
                <NavbarBtn>Outdoor</NavbarBtn>
                <NavbarBtn>Bedroom</NavbarBtn>
                <NavbarBtn>Storage</NavbarBtn>
            </div>
        </div>
    )
}

export default Header;