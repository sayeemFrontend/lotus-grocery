import React from "react";
import classes from "./Product.module.css";
import Pulses from "../../Asset/pulses.png";

function Product() {
  return (
    <div className={classes.product}>
      <img src={Pulses} alt="pulses" />
      <h1>Pulses</h1>
    </div>
  );
}

export default Product;
