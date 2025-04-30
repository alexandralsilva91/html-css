import "./productabout.css"
import Title from "../../common/Title";

function ProductAbout({ aboutProduct, productFeatures }) {
    return (
        <div className="product-about">
            <Title className="title-left-smaller">{"About this piece"}</Title>
            <p className="product-about-description">{aboutProduct}</p>
            <div className="product-about-features">
                {productFeatures.map((feature, index) => (
                    <div key={`product-feature-${index}`} className="product-feature">
                        <strong>{feature.title}</strong>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductAbout;
