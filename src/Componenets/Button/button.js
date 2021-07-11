import classes from "./button.module.css"

const Button = (props) => {
   return (
      <div className={classes.customButton}>
         <button onClick={props.onCanceled ? props.onCanceled : props.onClicked} className="text-capitalize">{props.icon && <span className="me-2">{props.icon}</span>} <span>{props.title}</span> </button>
      </div>
   );
}
export default Button;