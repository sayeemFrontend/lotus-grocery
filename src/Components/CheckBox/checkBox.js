import classes from "./checkBox.module.css"

const CheckBox = (props) => {


    return (
        <div className={classes.customCheckBox}>
            <input className={classes.regularCheckbox} onClick={props.onChecked} value={props.value} type={props.type} /> {props.label ? <label className="text-capitalize">{props.label}</label> : ""}
        </div>
    );
}

export default CheckBox;