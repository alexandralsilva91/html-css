import "./selectedproductpage.css"
import OtherRecommendedProducts from "./OtherRecommendedProducts";
import ProductHighlight from "./ProductHighlight";
import ProductKeyFeatures from "./ProductKeyFeatures";
import ProductAbout from "./ProductAbout";
import ProductDimensions from "./ProductDimensions";
import ProductDetails from "./ProductDetails";

function SelectedProductPage() {
    return (
        <div className="selected-product-page">
            <ProductDetails 
                colectionTitle="Nomad Collection"
                productName="Block Nomad Sofa"
                imgSource="../../public/products/1/product.webp"
                productPrice="1595"
                fabricColor="Navy Blue"
                colorIcons={[
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ]}
                upgradeOptions={[
                    {index:"1", name: "Moveable chaise", price: "495"},
                    {index:"2", name: "Ottoman", price: "345"},
                    {index:"3", name: "Lumbar Pillows", price: "135"},
                    {index:"4", name: "Sleep Kit", price: "295"}
                ]}
            />  
            <ProductDimensions 
                productImgSrc={"../../public/product-details-2.png"}
                dimensionsChart={[
                    {index: "1", type: 'General Dimensions', value: '86" L x 61" D x 33" H'},
                    {index: "2", type: 'Seat Height', value: '17"'},
                    {index: "3", type: 'Arm Height', value: '23"'},
                    {index: "4", type: 'Chaise Length', value: '13"'},
                    {index: "5", type: 'Seat Depth', value: '134"'},
                    {index: "6", type: 'Chaise Seat Depth', value: '11"'},
                    {index: "7", type: 'Leg Height', value: '7”'},
                    {index: "8", type: 'Ottoman Dimensions', value: '26" L x 26" W x 17" H'},
                ]}
            />
            <ProductAbout 
                aboutProduct="The ideal three-seat sofa featuring one seat with a chaise lounge adition, 
                one seat with an ottoman, and one seat foir the chiropractor who loves to seat upright 
                with their feet on the floor. Like everything we make, our modular design is incredibly 
                easy to move and packed with all the clever life-changing features you expect
                 form Burrow, starting with a built-in USB charger."
                productFeatures={[
                    { index: "1", title: "Customizable", description: "Create your ideal sectional sofa with five fabric colors, six leg finishes, and three armrest heights. You can even swap the reversible back cushions: one side is tufted for a classic look, the other smooth and contemporary." },
                    { index: "2", title: "Adaptable", description: "Rest easy with the knowledge that your new furniture can grow and expand with your life, thanks to the universal, modular design of our Nomad Collection."}
                ]}
            />
            <ProductKeyFeatures />
            <ProductHighlight 
                videoSource={"../../public/videos/product-video-1.mp4"}
                videoSide="left"
                details={[
                { index: "1", title: "Low carbon footprint", description: "Sustainable wood" },
                { index: "2", title: "Sustainable wood", description: "Sourced from responsibly managed forests" }
                ]} 
                title={"Durable enough for everyday drama"}
                description={"Each and every component of our furniture is selected for durability, from the galvanized steel latches to the precision-milled Baltic Birch frame. The fabric is inherently scratch-resistant, thanks to an incredibly tight weave, which makes it perfect for pets and their parents."}
                  />
            <ProductHighlight 
                videoSource={"../../public/videos/product-video-2.mp4"}
                videoSide="right"
                details={[
                { index: "3", title: "Non toxic", description: "Zero chemical additives or treatments" },
                { index: "4", title: "Zero PFCs", description: "Fabric free of dangerous formaldehydes" }
            ]} 
                title={"Don't sweat the spills"}
                description={"Our olefin fabric is stain-resistant thanks to a deep dyeing process that colors each individual strand to the core, as opposed to other fibers that have little pores that absorb stains. You can even spray spills with a water and bleach solution (yes, we said bleach) and blot it out to clean stains."}/>
            <OtherRecommendedProducts />
        </div>
    )
}

export default SelectedProductPage;

