import "./productdetails.css";
import Title from "./sections/Title";

function ProductDetails( colectionTitle, productName, imgSource, productPrice, fabricColor, colorIcons, upgradeOptions ) {
    return (
        <div className="product-details">
            <div className="product-details-img">
                <strong className="colection">{colectionTitle}</strong>
                <img src={imgSource} alt="product" />
            </div>
            <div className="product-details-text">
                <Title className="title-left-smaller">{productName}</Title>
                <span>{`$${productPrice} + Free Shipping`}</span>
                <div className="fabric-color">
                    <div><strong>Fabric Color</strong>-{fabricColor}</div>
                    <div className="colors">
                        {colorIcons.map((colorIcon, index) => (
                            <img className={`color-icon-${index}`} scr={} alt="color-icon">{colorIcon.icon}</img>
                        ))}
                    </div>
                </div>
                <div className="upgrades">
                    <strong>Upgrades</strong>
                    <div className="upgrade-options">
                        {upgradeOptions.map((upgradeOption, index) => (
                            <div className={`upgrade-option-${index}`}>
                                <input type="checkbox" id={`upgrade-option-input-${index}`} name="scales" checked />
                                <label for="upgrade-option-label">{`${upgradeOption.name} + $${upgradeOption.price}`}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <Button>Add to cart</Button>
            </div>
        </div>
    )
}

export default ProductDetails;