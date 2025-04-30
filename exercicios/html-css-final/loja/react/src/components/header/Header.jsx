import NavbarBtn from "./NavbarBtn";


function Header({ mobile }) {
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
            <button className="navbar-btn-mobile">≡</button>
        </div>
    )
}

export default Header;