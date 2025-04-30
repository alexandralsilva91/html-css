import "./producthighlight.css"
import Title from "./sections/Title";

function ProductHighlight({
    videoSource,
    videoSide = "",
    title,
    description,
    details
}) {
    return (
        <div className={`product-highlight ${videoSide}`}>
            <div className="highlight-video-box">
                <video
                    className="highlight-video"
                    src={videoSource}
                    type="video/mp4"
                    autoPlay
                    muted
                    loop
                />
            </div>
            <div className="product-highlight-text">
                <Title className="title-left">{title}</Title>
                <p className="product-highlight-text-description">
                    {description}
                </p>
                <div className="product-highlight-extra-details">
                    {details?.map((detail, index) => (
                        <div key={`detail-${index}`} className="detail">
                            <strong>{detail.title}</strong>
                            <p>{detail.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductHighlight;