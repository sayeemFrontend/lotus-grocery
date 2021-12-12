import classes from "./radio.module.css"
const Radio = (props) => {
    return (
        <label style={props.styles ? props.styles : null} className={classes.customRadio}>
            <input onChange={props.changed} name={props.name} value={props.value} type={props.type} />  {props.label ? <span className="text-capitalize">{props.label}</span> : ""}
        </label>
    );
}

export default Radio;