import React from "react";
import classes from "./RadioButton.module.css";

const RadioButton = () => {
   return (
      <label className={classes.customBtn}>
         <input type="radio" name="radio" />
         <span className={classes.checkmark}></span>
      </label>
   );
};

export default RadioButton;
