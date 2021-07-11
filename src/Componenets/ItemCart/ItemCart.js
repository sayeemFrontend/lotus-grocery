import React, { useState } from 'react'
import classes from "./ItemCart.module.css"
// import CartIcon from "/Asset/cartIcon.png"
// import { useHistory } from "react-router-dom"

const ItemCart = () => {

   // const [showMyCart, setShowMyCart] = useState(false)
   // const history = useHistory()

   // const goToCheckout = (props) => {
   //    setShowMyCart(false)
   //    history.push("/checkout")
   // }

   return (
      <div className={classes.itemCart}>
         <span className="bgSecondary-1 cWhite fs-12 fw-500 ">3</span>
         <img src="/Asset/cartIcon.png" alt="cart-icon" />
      </div>
   )
}

export default ItemCart
