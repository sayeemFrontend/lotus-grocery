import React, { useState } from "react"
import classes from "./cart.module.css"
import Button from "../Button/button"
import pic01 from "../../Asset/pic01.png"
import { useHistory } from "react-router"
import { useDispatch } from "react-redux"
import { addItem } from "../Redux/reducers/Card/actions.jsx"
import CartAddItem from "../CartAddItem/CartAddItem"

const Cart = (props) => {
   const history = useHistory()
   const dispatch = useDispatch()
   const cartObj = {
      img: pic01,
      title: "Bell Pape red",
      ammount: "1kg",
      price: 200
   }
   const [amountButton, setAmountButton] = useState(false)

   const cartButtonHandler = () => {
      dispatch(addItem({ id: 1, title: "sas" }))
      setAmountButton(true)
   }

   const icon = <i className="fas fa-plus"></i>
   return (
      <>
         <div className={classes.cartContainer} style={props.styles}>
            <div className={classes.clickableArea} onClick={() => history.push("/productView")}>
               <img src={cartObj.img} alt="" />
               <p className={classes.title}>{cartObj.title}</p>
               <p className={classes.text}>{cartObj.ammount}, <span>pricing</span></p>
               <p className={classes.price}>${cartObj.price}</p>
            </div>
            {
               amountButton ? <CartAddItem /> : <Button onClicked={cartButtonHandler} icon={icon} title="Add to Cart" styles={{ fontSize: "12px", height: "32px", marginTop: "15px" }} />
            }

         </div>
      </>
   );
}

export default Cart;