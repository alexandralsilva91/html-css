import { NavLink } from "react-router";
import "./splashscreen.css";
import Button from "../../common/Button";

function SplashScreen() {
    return (
        <div className="splash-screen">
            <img className="splash-screen-img" src="public/splash-screen.webp" alt="sala do splash screen" />
            <div className="splash-screen-info">
                <h2 className="splash-screen-title">Clever designs, delivered free</h2>
                <NavLink to="/products">
                    <Button >shop bedroom</Button>
                </NavLink>
            </div>
        </div>
    )
}

export default SplashScreen;