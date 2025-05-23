import "./advertisementscreen.css"

function AdvertisementScreen() {
    return (
        <div className="advertisement-screen">
            <div className="container-text">
                <p className="p-1">Nomad</p>
                <p className="p-2"><strong>The Ambid</strong> system works beautifully. It´s comfortable, absolutely solid,
                     and looks great.</p>
                <button>Shop now</button>
            </div>
            <img className="container-img" src="../../public/crop-sofa.png" alt="sofa" />
        </div>
    )
}

export default AdvertisementScreen;