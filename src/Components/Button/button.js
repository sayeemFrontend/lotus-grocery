import classes from "./button.module.css"

const Button = (props) => {
   return (
      <div className={classes.customButton + " fw-5"}>
         <button onClick={props.onCanceled ? props.onCanceled : props.onClicked} className="text-capitalize" style={props.styles}><span>{props.icon ? props.icon : ""}</span>{props.title} </button>
      </div>
   );
}
export default Button;