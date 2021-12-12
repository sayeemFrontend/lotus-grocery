import classes from"./input.module.css"

const Input = (props) => {
    let inputElement;

    switch (props.varient) {
        case "textArea":
            inputElement = (
                <div className={classes.customTextArea}>
                    {props.label ? <label className="text-capitalize">{props.label}</label> : ""}
                    <textarea onChange={props.changed} value={props.value} />
                </div>
            );
            break;
        case "border":
            inputElement = (

                <div style={props.styles ? props.styles : null} className={classes.customInput + " " +classes.border}>
                    {props.label ? <label className="text-capitalize"> {props.label} </label> : ""}
                    <input  placeholder={props.placeholder ? props.placeholder : ""} onChange={props.changed} value={props.value} type={props.type}
                    />
                </div>

            );
            break;

        default:
            inputElement = (
                <div style={props.styles ? props.styles : null} className={classes.customInput}>
                    {props.label ? <label className="text-capitalize"> {props.label} </label> : ""}
                    <input placeholder={props.placeholder ? props.placeholder : ""} onChange={props.onChanged} value={props.value} type={props.type}
                    />
                </div>
            );
    }

    return (
        <>
            { inputElement}
        </>
    );


}
export default Input;