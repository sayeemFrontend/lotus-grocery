import classes from "./Cart.module.css"
import SelectedInput from '../SelectedInput/selectedInput';
import { useState } from 'react';
import Button from './../Button/button';


const Cart = (props) => {
    const cartItem = {
        name: "Red & Yellow Capsicum (Net Weight ± 20 gm)",
        newPrice: 180,
        oldPrice: 210,
        quantity: ["200 gm", "500 gm", " 700 gm", " 1 kg"]
    }
    const icon = <img className="pb-2" src="./asset/bagIcon.png" alt="" width="28px" />

    const [quantity, setQuantity] = useState(cartItem.quantity[0])
    return (
        <div className={classes.cartContainer}>
            <div className={classes.cart}>
                <div className={classes.cartContent}>
                    <img className="rounded" src="/asset/cartImage.png" width="100%" alt="" />
                    <div className="d-flex flex-column align-items-center">
                        <p className="my-3 text-center lh-1 f-400">{cartItem.name}</p>
                        <div className={classes.selectDiv + " my-3"}>
                            <SelectedInput selFunc={(parms) => setQuantity(parms)} name="quantity" value={quantity} options={cartItem.quantity} />
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <img src="/asset/takaIcon.png" width="15px" alt="" />
                                <h3 className="ms-1 f-600 s-30">{cartItem.newPrice}</h3>
                            </div>
                            <div className="ps-3 d-flex align-items-center  text-decoration-line-through cADADAD s-18">
                                <img src="/asset/takaIcon.png" width="13px" alt="" />
                                <p className="ps-1 ">{cartItem.oldPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-3 bgWhite cPrimary-1 brPrimary-1 
                    ">
                        <Button title="Add to Cart" icon={icon} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Cart;