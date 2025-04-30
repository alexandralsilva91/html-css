import EachProductContainer from "./components/EachProductContainer";
import "./productspage.css"
import Button from "../common/Button"

function ProductsPage() {
    return (
        <div className="products-page">
            <h1 className="products-page-title">All Seating</h1>
            <p className="products-page-intro"> The main feature of any living room is always going to be the seating.
                Pick and choose your seating styles to build the perfect place to relax.
                Unwind by yourself, spend time with your family, or entertain guests,
                all in ultimate comfort.</p>
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
                <div className="btn-box">
                    <Button>See more</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductsPage;