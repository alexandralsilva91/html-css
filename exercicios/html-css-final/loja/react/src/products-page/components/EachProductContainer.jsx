import { useNavigate } from "react-router";
import "./eachproductcontainer.css"

function EachProductContainer({ productImageSource, productName, productPrice }) {
    const navigate = useNavigate();

    return (
        <div className="each-product-container" onClick={() => {
            navigate('/product')
        }}>
            <img className="product-img" src={productImageSource} alt="Product image" />
            <p className="product-name">{productName}</p>
            <span className="product-price">{productPrice}</span>
        </div>
    )
}

export default EachProductContainer;