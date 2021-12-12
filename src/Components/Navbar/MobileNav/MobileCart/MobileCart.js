import React, { useState, useRef } from 'react'
import classes from './Mobilecart.module.css'
import CartIcon from "../../../../Asset/cart.png"
import MyCart from "../../../../Pages/MyCart/MyCart"
import { useHistory } from "react-router-dom"



const MobileCart = () => {

   const [showMyCart, setShowMyCart] = useState(false)
   const history = useHistory()
   const modalRef = useRef(null)

   const goToCheckout = () => {
      setShowMyCart(false)
      history.push("/checkout")
   }

   window.addEventListener('click', (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
         setShowMyCart(false)
      }
   })

   return (

      <div ref={modalRef}>
         <div className={showMyCart ? classes.cartProductsContainer : "d-none"}>
            <MyCart setShowMyCart={setShowMyCart} onClicked={goToCheckout} />
         </div>
         <div onClick={() => setShowMyCart(true)} className="d-flex">
            <div className={classes.notification}>
               <p >155</p>
            </div>
            <button className={classes.cart_btn}>
               <img className={classes.user + " img-fuid"} src={CartIcon} alt="cart-icon" />
            </button>
         </div>
      </div>
   )
}

export default MobileCart
