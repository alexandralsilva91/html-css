import Button from "./Button";

function SplashScreen() {
    return (
        <div className="splash-screen">
            <img className="splash-img" src="public/splash-screen.webp" alt="sala do splash screen" />
            <div className="splash-screen-info">
                <h2 className="splash-screen-title">Clever designs, delivered free</h2>
                <Button>shop bedroom</Button>
            </div>
        </div>
    )
}

export default SplashScreen;