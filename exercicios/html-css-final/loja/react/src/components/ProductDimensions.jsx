import "./productdimensions.css";
import Title from "./sections/Title";

function ProductDimensions({ dimensionsChart, productImgSrc}) {
    return (
        <div className="product-dimensions">
            <Title className="title-left-smaller">{"Dimensions"}</Title> 
            <div className="product-dimensions-info">
                <div className="product-dimensions-info-text">
                    {dimensionsChart.map((dimension, index) => {
                        <div key={`dimensions-chart-${index}`} className="dimensions-chart">
                            <div className="dimensionType">{dimension.type}</div>
                            <div className="dimensionValue">{dimension.value}</div>
                        </div>  
                    })}
                </div>
                <div className="product-dimensions-info-image">
                    <img src={productImgSrc} alt="Product with measurements" />
                </div>
            </div>
        </div>
    )
}

export default ProductDimensions;