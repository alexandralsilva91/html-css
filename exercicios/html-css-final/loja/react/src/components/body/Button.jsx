import "./body.css";

function Button({ children, className = "" }) {
    return <button className={`btn ${className}`}>
        {children}
    </button>
}

export default Button;