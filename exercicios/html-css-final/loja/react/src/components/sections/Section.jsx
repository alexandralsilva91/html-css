import "./section.css";

function Section() {
    return <div className="section">
        <h1 className="section-title">Clever designs, delivered free</h1>
        <div className="section-grid-container">   
            <div className="img-container">
                <img src="../../public/D-VN-Seating.webp" alt="Category Seating" /> 
                <span>Seating</span>
            </div>
            <div className="img-container">
                <img src="../../public/category-outdoor.webp" alt="Category Outdoor" />
                <span>Outdoor</span>
            </div>
            <div className="img-container">
                <img src="../../public/category-storage.webp" alt="Category Storage" />
                <span>Storage</span>
            </div>
            <div className="img-container">
                <img src="../../public/category-bedroom.webp" alt="Category Bedroom" />
                <span></span>
            </div>
            <div className="img-container">
                <img src="../../public/category-tables.webp" alt="Category Tables" />
                <span>Tables</span>
            </div>
            <div className="img-container">
                <img src="../../public/category-rugs.webp" alt="Category Rugs" />
                <span>Rugs</span>
            </div>
                
                
                
                
                
                
        </div>
    </div>
}

export default Section;