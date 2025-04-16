import "./productkeyfeatures.css"

function ProductKeyFeatures() {
    return (
        <div className="product-key-features">
            <h2 className="product-key-features-title">Key features</h2>
            <div className="features">
                <div className="feature">
                        <img src="../../public/icons/icon-1.webp" alt="icon" width="150px" />
                        <h5>Customizable</h5>
                </div>
                <div className="key-feature">
                        <img src="../../public/icons/icon-2.webp" alt="icon" width="150px" />
                        <h5>Frame</h5>
                </div>
                <div className="key-feature">
                        <img src="../../public/icons/icon-3.webp" alt="icon" width="150px"/>
                        <h5>Hardware</h5>
                </div>
                <div className="key-feature">
                        <img src="../../public/icons/icon-4.webp" alt="icon" width="150px"/>
                        <h5>Charger</h5>
                </div>
                <div className="key-feature">
                        <img src="../../public/icons/icon-5.webp" alt="icon" width="150px"/>
                        <h5>Legs</h5>
                </div>
            </div>
        </div>
        
        
        
    )
}

export default ProductKeyFeatures;