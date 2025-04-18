import "./header.css"

function NavbarBtn({ children }) {
    return (
        <button className="navbar-btn">
            {children}
            <i className="arrow-down" />
        </button>
    )
}

export default NavbarBtn;