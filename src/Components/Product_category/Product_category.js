import React from "react";
import classes from "./Product.module.css";
import Vegetable from "../Asset/vegetable.png";

function Product_category() {
  return (
    <div className={classes.category}>
      <img src={Vegetable} alt="vegetable" />
      <h1>Fresh Fruits & Vegetable</h1>
    </div>
  );
}

export default Product_category;
