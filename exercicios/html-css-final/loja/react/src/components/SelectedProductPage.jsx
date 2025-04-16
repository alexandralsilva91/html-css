import "./selectedproductpage.css"
import OtherRecommendedProducts from "./OtherRecommendedProducts";
import ProductHighlight from "./ProductHighlight";
import ProductKeyFeatures from "./ProductKeyFeatures";

function SelectedProductPage() {
    return (
        <div className="selected-product-page">
            <ProductKeyFeatures />
            <ProductHighlight 
                videoSource={"../../public/videos/product-video-1.mp4"}
                videoSide="left"
                details={[
                { title: "Low carbon footprint", description: "Sustainable wood" },
                { title: "Sustainable wood", description: "Sourced from responsibly managed forests" }
            ]} 
                title={"Durable enough for everyday drama"}
                description={"Each and every component of our furniture is selected for durability, from the galvanized steel latches to the precision-milled Baltic Birch frame. The fabric is inherently scratch-resistant, thanks to an incredibly tight weave, which makes it perfect for pets and their parents."}
                  />
            <ProductHighlight 
                videoSource={"../../public/videos/product-video-2.mp4"}
                videoSide="right"
                details={[
                { title: "Non toxic", description: "Zero chemical additives or treatments" },
                { title: "Zero PFCs", description: "Fabric free of dangerous formaldehydes" }
            ]} 
                title={"Don't sweat the spills"}
                description={"Our olefin fabric is stain-resistant thanks to a deep dyeing process that colors each individual strand to the core, as opposed to other fibers that have little pores that absorb stains. You can even spray spills with a water and bleach solution (yes, we said bleach) and blot it out to clean stains."}/>
            <OtherRecommendedProducts />
        </div>
    )
}

export default SelectedProductPage;

// <ProductDetails />
// <ProductDimensions />
// <ProductAbout />
// <ProductKeyFeatures />
// <ProductHighlight />
// <ProductHighlight />
// <OtherRecommendedProducts />