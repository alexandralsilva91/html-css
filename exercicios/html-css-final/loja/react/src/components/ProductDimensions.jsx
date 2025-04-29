import "./productdimensions.css";
import Title from "./sections/Title";

function ProductDimensions({ dimensionsTable, productImgSrc}) {
    return (
        <div className="product-dimensions">
            <Title className="title-left-smaller">{"Dimensions"}</Title> 
            <div className="product-dimensions-info">
                <div className="product-dimensions-info-table">
                    {dimensionsTable.map((dimension, index) => (
                        <div key={`dimensions-table-${index}`} className="dimensions-table-line">
                            <span className="dimension-type">{dimension.type}</span>
                            <span className="dimension-value">{dimension.value}</span>
                        </div>  
                    ))}
                </div>
                <div className="product-dimensions-info-image">
                    <img src={productImgSrc} alt="Product with measurements" />
                </div>
            </div>
        </div>
    )
}

export default ProductDimensions;