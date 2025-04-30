import "./productdetails.css";
import Title from "./sections/Title";
import Button from "./body/Button";

function ProductDetails({ colectionTitle, productName, imgSource, productPrice, fabricColor, colorIcons, upgradeOptions }) {
    return (
        <div className="product-details">
            <div className="product-details-img">
                <strong className="colection">{colectionTitle}</strong>
                <img src={imgSource} alt="product" />
            </div>
            <div className="product-details-text">
                    <p className="product-denomination">{productName}</p>
                    <span>${productPrice} + Free Shipping</span>
                    <div>
                        <div><strong>Fabric Color</strong>-{fabricColor}</div>
                        <div className="colors">
                            {colorIcons.map((colorIcon, index) => {
                                let className = "color-icon"
                                if (index === 0) {
                                    className = `${className} selected`
                                }
                                return (
                                    <div key={`color-icon-${index}`} className={className} style={{ backgroundColor: colorIcon }} />
                                )
                            })}
                        </div>
                    </div>
                    <div className="upgrades">
                        <strong>Upgrades</strong>
                        <div className="upgrade-options">
                            {upgradeOptions.map((upgradeOption, index) => (
                                <div key={`upgrade-option-${index}`} className="upgrade-option">
                                    <input type="checkbox" id={`upgrade-option-input-${index}`} name="scales" />
                                    <label for="upgrade-option-label">{`${upgradeOption.name} + $${upgradeOption.price}`}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                
                <div className="button-container">
                    <div className="spacer"></div>
                    <Button className="product-details-btn">Add to cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;