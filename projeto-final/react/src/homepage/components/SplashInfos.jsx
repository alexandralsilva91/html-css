import "./splashinfos.css"

function SplashInfos() {
    return (
        <div className="splash-infos">
            <div className="splash-info">
                <img className="icon" src="../../public/icon-truck.png" alt="Shipping" />
                <div className="text">
                    <p>Fast & free shipping<br />Every single order ships for free.<br />No
                        minimums, no tiers, no fineprint, whatsoever.</p>
                </div>
            </div>
            <div className="splash-info">
                <img className="icon" src="../../public/icon-sofa.png" alt="Packaging" />
                <div className="text">
                    <p>Modular, easy to move design<br />Our innovative modular design is
                        driven by the belief that furniture should fit this home, and the next one.</p>
                </div>
            </div>
            <div className="splash-info">
                <img className="icon" src="../../public/icon-trees.png" alt="Products material" />
                <div className="text">
                    <p>Durable, premium materials<br />We use materials like sustainably-forested
                        wood, strenghtened steel hardware, and top grain Italian leather.</p>
                </div>
            </div>
        </div>
    )
}

export default SplashInfos;