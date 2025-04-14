import "./eachproductcontainer.css"

function EachProductContainer({ productImageSource, productName, productPrice}) {
    return (
    <div className="product-container">
        <img className="product-img" src={productImageSource} alt="Product image" />
        <p className="product-name">{productName}</p>
        <span className="product-price">{productPrice}</span>
    </div>
    )
}

export default EachProductContainer;