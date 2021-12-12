import React from "react";
import classes from "./Product.module.css";
import Cart_image from "../Asset/pic01.png";

function Product_cart() {
  return (
    <div className={classes.product_cart}>
      <div className={classes.product_view}>
        <img src={Cart_image} alt="cart_image" />
        <h1>4 Items</h1>
      </div>
      <div className={classes.total_cart_price}>
        <h1>$1599</h1>
      </div>
    </div>
  );
}

export default Product_cart;
