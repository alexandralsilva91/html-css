import Title from "./Title";
import "./section.css";

function Section({ title, fullScreen = false, noBottomMargin = false, children }) {
    let containerClasses = "full-container section-children-container";

    if (fullScreen) {
        containerClasses += " fullscreen";
    }

    if (noBottomMargin) {
        containerClasses += " no-bottom-margin";
    }

    return (
        <div className="full-container flex flex-col">
            <Title>
                {title}
            </Title>
            <div className={containerClasses}>
                {children}
            </div>
        </div>
    )
}

export default Section;