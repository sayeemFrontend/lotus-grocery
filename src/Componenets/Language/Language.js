import classes from "./Language.module.css"

const Language = () => {
    return (
        <div className="d-flex align-items-center">
            <p className="cWhite">
                EN
            </p>
            <span className={"mx-2 " + classes.blockDraw}></span>
            <p className="cBlack-1">
                বাং
            </p>

        </div>
    );
}

export default Language;