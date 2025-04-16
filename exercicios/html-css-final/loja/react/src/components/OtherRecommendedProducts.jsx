import "./otherrecommendedproducts.css"
import Title from "./sections/Title";
import EachProductContainer from "../EachProductContainer";

function OtherRecommendedProducts() {
    return (
        <div className="other-recommended-products">
            <Title>Here's what else our designers recommend</Title> 
           <div className="products-container">
                <EachProductContainer 
                productImageSource="../public/products/1/product.webp"
                productName="Nomad Sofa"
                productPrice="$1595 or as low as $100/mo"
                />
                <EachProductContainer 
                productImageSource="../public/products/1/product.webp"
                productName="Nomad Sofa"
                productPrice="$1595 or as low as $100/mo"
                />
                <EachProductContainer 
                productImageSource="../public/products/1/product.webp"
                productName="Nomad Sofa"
                productPrice="$1595 or as low as $100/mo"
                />
           </div> 
        </div>
    )
}

export default OtherRecommendedProducts;

