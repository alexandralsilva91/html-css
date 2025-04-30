import "./title.css"

function Title({ className = '', children }) {
    return <h1 className={`${className} title`}>{children}</h1>
}

export default Title;